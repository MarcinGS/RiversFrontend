# RiversLevelMonitor

>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.9 and [Node.js](https://nodejs.org/en) 16.xx.xx version.

## :warning: Important information (EN)
For the application to work properly, you need to run it's ***[BACKEND](https://github.com/MarcinGS/RiversBackend)***. If you want to use the ***DOCKER*** application, go to the another ***[repository](https://github.com/MarcinGS/RiversDocker)*** .

## :warning: Ważne informacje (PL)
Aby aplikacja działała poprawnie, musisz uruchomić jej ***[BACKEND](https://github.com/MarcinGS/RiversBackend)***. Jeżeli chcesz skorzystać z aplikacji ***DOCKER*** przejdź do innego ***[repozytorium](https://github.com/MarcinGS/RiversDocker)***.

## Project launching (EN)
Before launching, you need to have ***Node.js*** and ***Angular CLI*** installed on the machine to run the project.

Run `npm install` for install all dependencies. After that run `npm start`, it's run application with settings from `proxy.config.json` file. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Uruchomienie projektu (PL)
Przed uruchomieniem musisz mieć zainstalowane ***Node.js*** oraz ***Angular CLI*** aby uruchomić projekt.

Wpisz i uruchom komende `npm install` aby zainstalować wszystkie potrzebne zależności. Następnie wpisz `npm start`. Komenda ta uruchomi aplikację z ustawieniami z plikieu `proxy.config.json`. Przejdź do `http://localhost:4200/`. Aplikacja zostanie automatycznie załadowana ponownie, jeśli zmienisz którykolwiek z plików źródłowych.

<br>

# Funkcjonalność oprogramowania
Przy przejściu na stronę, która udostępnia stworzoną aplikacje uruchomiona zostaje
strona główna. Posiada ona przyciski nawigacyjne oraz informacje o nazwie zalogowanego
konta. Z tego miejsca możemy przejść do zakładki rzek bądź strony logowania. Widzimy
również informacje, że aby móc korzystać z własnej listy musimy się zalogować.

![Strona główna](https://github.com/MarcinGS/RiversFrontend/assets/48533024/aac27d1d-9e9f-40ab-adea-cf6d148226d0)

Po przejściu do zakładki rzek bez zalogowania możemy przeglądać i zawężać pozycje do województw klikając na nazwy po lewej stronie okna. 

![Lista rzek](https://github.com/MarcinGS/RiversFrontend/assets/48533024/02dc41f2-417e-4fe0-8491-51b97e7ebec0)

Po kliknięciu w przycisk **Pokaż** aplikacja przeniesie nas do widoku szczegółów. W widoku szczegółów bez zalogowania mamy dostępne tylko trzy zakładki.
- Lokalizacja
- Pomiary
- Wykres

Pierwsza prezentuje ogólne dane identyfikacyjne.
Druga pomiary i ich daty podzielone na strony. Zakres stron z danymi można konfigurować za pomocą stronicowania w dolnej prawej części okna.
Trzecia zakładka prezentuje pomiary na wykresie liniowym.

![Lista pomiarów](https://github.com/MarcinGS/RiversFrontend/assets/48533024/3664031b-f136-49b3-b4c5-b02caef90c8c)

![Wykres liniowy](https://github.com/MarcinGS/RiversFrontend/assets/48533024/6c034a0b-2f07-4fd5-9cea-c17423250885)

Aby otrzymać więcej możliwości należy kliknąć przycisk **Logowanie**.

![Logowanie](https://github.com/MarcinGS/RiversFrontend/assets/48533024/9e87642b-d930-414c-8b3c-3fbfc83d809f)

W tym miejscu można się zalogować bądź zarejestrować swoje konto. Po poprawnym przejściu przez ten proces zostajemy przekierowani na stronę z listą rzek.

![Lista rzek log](https://github.com/MarcinGS/RiversFrontend/assets/48533024/1f782913-794e-4d0b-bdfa-db297bebe5a9)

Po zalogowaniu widzimy, że na stronie głównej umieszczona jest informacja o nazwie konta, na którym jesteśmy aktualnie zalogowani.
Teraz na stronie rzek możemy zauważyć, że mamy dostępny żółty przycisk **Dodaj do listy**. Kliknięcie tego przycisku doda wybraną rzekę do listy i przeniesie nas na nią.

![Lista rzek log](https://github.com/MarcinGS/RiversFrontend/assets/48533024/9f28ec0b-b210-4400-bce3-f6f02d2e8a50)

Możemy tutaj usunąć rzekę z listy bądź przejść do jej szczegółów.
W szczegółach rzeki oprócz poprzednich zakładek pojawia się nam nowa o nazwie **Notatki**.
Możemy w niej dodawać i usuwać własne notatki.
Można również zauważyć informacje o ilości rzek na liście prywatnej użytkownika umieszczonej w prawym górnym rogu aplikacji przy ikonie listy.

![Notatki](https://github.com/MarcinGS/RiversFrontend/assets/48533024/ac48e419-16f8-4377-b0a4-3152a3730999)

## Część administracyjna

Do części administracyjnej maja dostęp tylko użytkownicy z rolą administratora.
Przejście tam odbywa się poprzez dopisanie do adresu domeny aplikacji ścieżki `/admin`.

![Admin log](https://github.com/MarcinGS/RiversFrontend/assets/48533024/1a61f8e2-b706-4923-896b-ff5179a04d00)

Po poprawnym podaniu danych logowania jesteśmy przekierowywani do widoku głównego.
Możemy w tym miejscu wymusić ręczną aktualizacje danych pomiarowych na serwerze.
Aby to zrobić należy kliknąć przycisk **Aktualizuj** i poczekać do końca pracy sygnalizowanej przez pasek postępu.
Strona udostępnia również dane statystyczne o ilości danych w bazie i ilości zarejestrowanych kont w systemie.

![Admin panel](https://github.com/MarcinGS/RiversFrontend/assets/48533024/c01cab73-4fa4-4134-acae-dd23b96db40a)

Po przejściu do zakładki rzeki otrzymujemy postronicowaną tabele z listą rzek w bazie danych.
Z tego miejsca możemy dodawać rzeki klikając przycisk **Dodaj rzekę** w górnej części ekranu.

![Admin rzeki](https://github.com/MarcinGS/RiversFrontend/assets/48533024/1d1f1751-0aba-43b4-9a16-9f75ea6a5632)

Możemy również edytować i usuwać pozycje klikając ikony w kolumnie **Akcje**.

![Dodaj rzeke admin](https://github.com/MarcinGS/RiversFrontend/assets/48533024/fb02d38d-d094-46d4-ae2e-d7284cad7ba2)

![Edytuj rzeke admin](https://github.com/MarcinGS/RiversFrontend/assets/48533024/3812b502-8b16-4ab2-9111-1bcb12326d0a)

Zapis pozycji odbywa się po naciśnięciu przycisku **Zapisz**.












<br>
<br>
<br>
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
