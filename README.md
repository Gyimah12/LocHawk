## LocHawk 
**LocHawk** is a powerful geolocation phishing tool that tricks targets into revealing their exact GPS location, device information, and network details through a seemingly harmless webpage.


## ⚠️ DISCLAIMER

**This tool is for EDUCATIONAL and security research PURPOSES ONLY.**

By using LocHawk, you acknowledge and agree that:

- **Unauthorized use** of this tool against any individual, organization, or system without explicit written consent is ILLEGAL.

- **You assume full responsibility** for complying with all applicable local, state, and federal laws regarding surveillance, privacy, and computer fraud.

- **The developer assume NO LIABILITY** for any misuse, damages, or legal consequences arising from the use of this tool.

- **Only use on:**
  - Your own devices and networks
  - Systems you have explicit written permission to test
  - Authorized security assessments and penetration testing

- **Unauthorized access** to computer systems, invasion of privacy, and interception of communications are serious crimes with severe penalties including fines and imprisonment.

This tool is designed for **educational purposes, ethical hacking demonstrations, and security research**. It is intended to help penetration testers and security researchers understand how geolocation phishing attacks work, so they can better defend against them.

**By downloading, installing, or using LocHawk, you agree to use it responsibly and ethically, and solely for legitimate security education purposes.**

*Remember: With great power comes great responsibility.*

##  Features

### **Location Tracking**
- Live GPS coordinates with Google Maps link
- High accuracy mode (5-50m precision)
- IP-based city/country fallback

###  **Stealth Mode**
- Zero console logs or visible elements
- Auto-executes on page load
- Silent error handling

###  **Device Info**
- Browser, OS, platform detection
- RAM, CPU cores, screen resolution
- Language, cookies, referrer

### **Network Info**
- Public IP address
- ISP, country, city
- Network-based coordinates

###  **Delivery Methods**
- Serveo.net (instant SSH tunnel)
- Cloudflared (HTTPS with SSL)

###  **Live Monitoring**
- Auto-save to data.txt (JSON)
- Previous data preview

### **Custom Pages**
- Use your own HTML/CSS
- Internal JavaScript & CSS only
- Auto script injection
- Preserves your design

### **Data Control**
- Prompt to clear data.txt on exit
- Choose to keep or delete collected data
- Preview last 20 entries during monitoring


##  Installation
**What You Need:**

- **Linux (Debian, RHEL, Arch**) (`Kali, Parrot, Ubuntu, Black Arch, Fedora, etc`.)
- **npm** (required for install `express.js`. if it is not installed it will automatically install `npm`)
- **Node.js and expressjs** ( In linux distributions like `Debian`,`RHEL`, `Arch` it automatically install `nodejs` and `expressjs` if it is not installed)
- **Port Forwarding Options:**

   - **Serveo.net** – Used           as the default                option for tunneling
  
   - **Cloudflared** –               Available as an               alternative for               port forwarding and           is automatically              installed if missing.
  
**Steps to Install:**
1. **Clone the repository**
```bash
git clone https://github.com/s-r-e-e-r-a-j/LocHawk.git
```
2. **Navigate to the LocHawk directory**
```bash  
cd LocHawk
```
3. **Navigate to the lochawk directory**
```bash
cd lochawk
```
4. **Start the tool**
```bash   
bash lochawk.sh
```

##  How to Use
1. **Run the tool**:

```bash
bash lochawk.sh
```
**OR**

```bash
chmod +x lochawk.sh
./lochawk.sh
```

2. **Choose a custom HTML page** – Optionally provide your own phishing page.

    - Internal CSS (`<style>` tags) supported

    -  Internal JavaScript (`<script>` tags) supported

    -  External CSS/JS files (links to `.css` or `.js`) are not supported

    - Your design is preserved, tracking script is auto-injected

    - Press Enter to use the default page

 **Example custom page:**
```html
html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Internal CSS only */
        body { font-family: Arial; background: #f0f0f0; }
        .container { padding: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Your Phishing Page</h1>
        <p>Content here</p>
    </div>
    <script>
        // Internal JavaScript only
        console.log("Page loaded");
    </script>
</body>
</html>
```
3. **Choose a port forwarding method** – Select between Serveo.net or Cloudflared for tunneling.

4. Share the generated link with the target.

5. **Data Collection** – When they open the link:

   - Device details are captured automatically

   - IP address and network info are collected

   - If they allow location permission and GPS is on, exact coordinates are sent

   - All data appears in your terminal in real-time with Google Maps links

6. **Exit & Clean Up** – Press `Ctrl+C` to stop the server. You'll be prompted:

```text
[+] Do you want to clear the data file (data.txt)? (y/n):
```

  - Type `y` or `yes` to delete all collected data

  - Type `n` or `no` to keep the data file for later use


## License
This project is licensed under the MIT License.
