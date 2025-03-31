const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isBot = /bot|crawl|spider|crawling|googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|msnbot|ahrefs|semrush|mj12bot|facebookexternalhit|twitterbot|linkedinbot/i.test(navigator.userAgent);

if (!isMobile || isBot || !navigator.cookieEnabled || !navigator.hardwareConcurrency || navigator.webdriver) {
    document.body.innerHTML = '<h1 style="text-align:center;color:red;margin-top:50px;">الوصول غير مسموح</h1>';
    setTimeout(() => {
        window.location.href = "about:blank";
    }, 1000);
    window.stop();
}