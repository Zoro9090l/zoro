const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isBot = /bot|crawl|spider|crawling|googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|msnbot|ahrefs|semrush|mj12bot|facebookexternalhit|twitterbot|linkedinbot/i.test(navigator.userAgent);

if (!isMobile || isBot || !navigator.cookieEnabled || !navigator.hardwareConcurrency || navigator.webdriver) {
    console.warn("تم منع الوصول لعدم استيفاء الشروط");
    
    // عرض رسالة تنبيه بدلاً من تغيير الصفحة
    document.body.innerHTML = '<h1 style="text-align:center;color:red;margin-top:50px;">الوصول غير مسموح</h1>';
    
    // إعادة التوجيه بعد 3 ثوانٍ إلى صفحة رئيسية بدلًا من "about:blank"
    setTimeout(() => {
        window.location.href = "/";
    }, 3000);
}
