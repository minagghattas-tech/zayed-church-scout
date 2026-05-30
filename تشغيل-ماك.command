#!/bin/bash
# كشافة كنائس زايد - تشغيل النظام على ماك / لينكس

cd "$(dirname "$0")"

echo ""
echo "========================================"
echo "   كشافة كنائس زايد - النظام الداخلي"
echo "========================================"
echo ""
echo "جاري تشغيل السيرفر المحلي..."
echo ""
echo "بعد ما يفتح المتصفح، سجّل دخول بـ:"
echo "   admin@zayedscout.org  /  admin2026"
echo ""
echo "عشان توقف السيرفر: اضغط Ctrl+C"
echo "========================================"
echo ""

# افتح المتصفح بعد ثانيتين
( sleep 2 && (open http://localhost:8000/index.html 2>/dev/null || xdg-open http://localhost:8000/index.html 2>/dev/null) ) &

# شغّل السيرفر
if command -v python3 >/dev/null 2>&1; then
    python3 -m http.server 8000
elif command -v python >/dev/null 2>&1; then
    python -m http.server 8000
else
    echo "[!] مفيش Python على الجهاز. نزّله من https://www.python.org/downloads/"
    read -p "اضغط Enter للخروج..."
fi
