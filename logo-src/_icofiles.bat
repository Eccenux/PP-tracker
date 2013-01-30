@echo off

CALL _svg2png.bat Logo.svg ico/logo016.png 16
CALL _svg2png.bat Logo.svg ico/logo032.png 32
CALL _svg2png.bat Logo.svg ico/logo048.png 48
CALL _svg2png.bat Logo.svg ico/logo064.png 64

echo Koniec.
pause
