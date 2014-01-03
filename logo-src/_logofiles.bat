@echo off

SET tmpset_OUT_PATH=..\app\logo\

echo Android
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo036.png 36
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo048.png 48
echo iPhone
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo057.png 57
echo iPhone + Android
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo072.png 72
echo Nokia
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo080.png 80
echo Jolla
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo086.png 86
echo Nokia + iPad
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo114.png 114
echo Default
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo128.png 128
echo Android market
CALL _svg2png.bat Logo.svg %tmpset_OUT_PATH%logo512.png 512

echo Koniec.
pause
