<img align="right" src="https://raw.github.com/Eccenux/PP-tracker/master/app/logo/logo128.png" alt="Logo">
PP tracker
==========

<em>PP tracker</em> umożliwia śledzenie przesyłek Poczty Polskiej w telefonie, co jest ułatwione dzięki wbudowanemu czytnikowi kodów kreskowych.

Pobieranie
----------

Gotowy program można pobrać ze [strony apki na PhoneGap Build](https://build.phonegap.com/apps/296028/share). Zaznaczam, że aplikacja jest w pełni funkcjonalna tylko na platformie Android. Na pozostałych platformach aplikacja będzie co prawda umożliwiać tylko ręczne wpisanie kodu, ale kod jest zapamiętywany między uruchomieniami.

Teoretycznie aplikacja może działać na iOS. Jeśli ktoś ma nadmiarowy klucz do Apple Store (albo nadmiarowe $100), to proszę o kontakt ;-).

O programie
-----------

W aplikacji użyto wtyczki do czytania kodów [BarcodeScanner](https://github.com/wildabeast/BarcodeScanner/blob/master/README.md). Do zbudowania samej aplikacji użyto programu [PhoneGap](http://phonegap.com/).

<strong>Dla programistów</strong>: nie to nie jest błąd, że ani pliku `phonegap.js`, ani `barcodescanner.js` nie ma w katalogu `app` (mimo tego, że jest dołączany w pliku `index.html`). Pliki JS niezbędne do działania wtyczek są automatycznie dodawane przez [PhoneGap Build](https://build.phonegap.com/).

Licencja
--------

Copyright &copy; 2013 Maciej "Nux" Jaros.

Licencja [CC-BY-SA](http://creativecommons.org/licenses/by-sa/3.0/).

Informacje na temat autorów i licencji dla poszczególnych bibliotek (folder ext) znajdują się w odpowiednich plikach JS oraz CSS.
