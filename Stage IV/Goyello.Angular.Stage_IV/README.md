#Walidacja w AngularJS

## Celem zadania jest dodanie obsługi błędów walidacji formularza dodawania nowego klienta.

1. Imię, nazwisko i data urodzenia powinny być wymagane.
2. Imię i nazwisko powinny zawierać od 5 do 15 znaków.
3. Każdy błąd powinien być wyświetlany osobno.
4. Jeśli formularz zawiera błędnie wypełnione pola, po kliknięciu "Save" powinien pojawić się dodatkowy komunikat informujący o błędach w formularzu.
5. Błędne pola powinny być zaznaczone na czerwono.
6. Dodanie klienta powinno wyczyścić wszystkie błędy walidacyjne.
7. Błąd nie powinien pojawić się dopóki użytkownik nie zacznie zmieniać pola.

## Wzkazówki:

* Angular wspiera walidacje przez atrybuty HTML5 (required, date, email, etc.).
* Angular dostarcza kilka własnych walidatorów (ng-minlength).
* Od wersji 1.3 mamy do dyspozycji dyrektywę ng-messages.
* ngMessages trzeba dodać do configu require (https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular-messages.min) i załadować w Boot.ts
* Angularowy moduł Customer (w CustomerModule) powinien mieć zależność do ngMessages.
* Przydatne słowa-klucz: novalidate, ModelController, FormController, ng-show.
