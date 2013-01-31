PP-tracker
==========

Pobieranie
----------

Gotowy program można pobrać ze strony [PhoneGap Build](https://build.phonegap.com/apps/296028/share). Zaznaczam, że aplikacja jest w pełni funkcjonalna na platformie Android. Na pozostałych platformach, aplikacja będzie umożliwiać tylko ręcznie wpisanie kodu.

Teoretycznie aplikacja może działać na iOS. Jeśli ktoś ma nadmiarowy klucz do Apple Store (albo nadmiarowe $100), to proszę o kontakt ;-).

O programie
-----------

PP-tracker umożliwia śledzenie przesyłek Poczty Polskiej w telefonie, co jest ułatwione dzięki wbudowanemu czytnikowi kodów kreskowych.

W aplikacji użyto wtyczki do czytania kodów [BarcodeScanner](https://github.com/wildabeast/BarcodeScanner/blob/master/README.md). Do zbudowania samej aplikacji użyto programu [PhoneGap](http://phonegap.com/).

Dla programistów - nie to nie jest błąd, że ani pliku `phonegap.js`, ani `barcodescanner.js` nie ma w katalogu `app` (mimo tego, że jest dołączany w pliku index.html). Pliki JS niezbędne do działania wtyczek są atuomatycznie dodawane przez [PhoneGap Build](https://build.phonegap.com/).

Licencja
--------

Copyright &copy; 2013 Maciej "Nux" Jaros.

Licencja [CC-BY-SA](http://creativecommons.org/licenses/by-sa/3.0/).

Informacje na temat autorów i licencji dla poszczególnych bibliotek (folder ext) znajdują się w odpowiednich plikach JS oraz CSS.