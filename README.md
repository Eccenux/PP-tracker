<img style="z-index:1; position:relative;" align="right" src="https://raw.github.com/Eccenux/PP-tracker/master/app/logo/logo128.png" alt="Logo">
PP tracker
==========

<em>PP tracker</em> umożliwia śledzenie przesyłek Poczty Polskiej w telefonie, co jest ułatwione dzięki wbudowanemu czytnikowi kodów kreskowych.

Pobieranie
----------
<a href="https://build.phonegap.com/apps/296028/share">
  <img align="right" 
  src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=http://build.phonegap.com/apps/296028/install/?qr_key=7zrfu1Lg8fP97RUZfpw1&chld=L|1&choe=UTF-8" 
  alt="kod do pobrania">
</a>
Gotowy program można pobrać ze [strony apki na PhoneGap Build](https://build.phonegap.com/apps/296028/share) lub z Google Play (a niedługo być może także z Jolla Store). Aplikacja jest w pełni funkcjonalna tylko na platformie Android.

Dostępna jest także [wersja do uruchomienia w przeglądarce](http://m.enux.pl/pp-tracker/). Tutaj jednak nie ma skanera, więc trzeba wpisać kod ręcznie, ale i tak jest on zapamiętywany między uruchomieniami.

Teoretycznie aplikacja może działać na iOS. Jeśli ktoś ma nadmiarowy klucz do Apple Store (albo nadmiarowe $100), to proszę o kontakt ;-).

O programie
-----------

W aplikacji użyto wtyczki do czytania kodów [BarcodeScanner](https://github.com/wildabeast/BarcodeScanner/blob/master/README.md). Do zbudowania samej aplikacji użyto programu [PhoneGap](http://phonegap.com/).

<strong>Dla programistów</strong>: nie to nie jest błąd, że pliku `phonegap.js` nie ma w katalogu `app` (mimo tego, że jest dołączany w pliku `index.html`). Pliki JS niezbędne do działania wtyczek są automatycznie dodawane przez [PhoneGap Build](https://build.phonegap.com/).

Wersja dla przeglądarek różni się obecnie dosyć znacząco od tej dostępnej dla Android ze względu na ograniczenia (chodzi o CORS i o to, że Poczta Polska zablokowała najwidoczniej proxy).

Licencja
--------

Copyright &copy; 2013-2014 Maciej "Nux" Jaros.

Licencja [CC-BY](http://creativecommons.org/licenses/by/3.0/) lub [MIT](http://www.opensource.org/licenses/mit-license).

Informacje na temat autorów i licencji dla poszczególnych bibliotek (folder ext) znajdują się w odpowiednich plikach JS oraz CSS.
