# Routing w AngularJS
## Celem zadania jest wydzielenie widoków do osobnych plików.
1. CustomerList.html i CreateCustomer.html powinny znaleźć się w App/Customer/Views.
2. W górnym menu powinny znaleźć się linki Customers oraz Create customer.
3. Po dodaniu customera powinniśmy przekierować użytkownika do listy customerów.

## Wskazówki
1. Angular dostarcza moduł ngRoute (trzeba go dodać do require'a).
2. ngRoute konfigurujemy w CustomerModule.
3. IRoute oprócz pól templateUrl, controller ma również controllerAs - może się przydać.
4. ng.route.IRouteProvider, ng.ILocationService.