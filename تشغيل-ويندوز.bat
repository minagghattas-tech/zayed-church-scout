@echo off
chcp 65001 >nul
title كشافة كنائس زايد - تشغيل النظام
echo.
echo ========================================
echo    كشافة كنائس زايد - النظام الداخلي
echo ========================================
echo.
echo جاري تشغيل السيرفر المحلي...
echo.
echo بعد ما يفتح المتصفح، سجل دخول بـ:
echo    admin@zayedscout.org  /  admin2026
echo.
echo عشان توقف السيرفر: اقفل الشباك ده او اضغط Ctrl+C
echo ========================================
echo.

REM يحاول بايثون 3 الاول
where python >nul 2>nul
if %errorlevel%==0 (
    start "" http://localhost:8000/index.html
    python -m http.server 8000
    goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
    start "" http://localhost:8000/index.html
    py -m http.server 8000
    goto :eof
)

echo [!] مفيش Python متسطب على الجهاز.
echo     نزّله من: https://www.python.org/downloads/
echo     وقت التسطيب علّم على "Add Python to PATH"
echo.
pause
