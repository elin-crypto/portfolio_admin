# Admin-sida för hantering av innehåll i databas


Denna webbplats är ett administrationsgränssnitt för att hantera 
innehållet i min webbportfolio och CV. 
Webbplatsen konsumerar en REST-webbtjänst med Fetch API och 
det går att läsa, skriva, uppdatera och radera data.



- Anrop sker till API:t med fetch-metoden. 
- Data från databasen hämtas med en sql-fråga och läses ut 
- Varje rad har en uppdatera- och radera-knapp
- Vid klick på uppdatera/radera skickas id med till uppdatera/delete-metoden som skickar en sql-fråga till databasen och där uppdaterar/tar bort all info
- Vill man lägga till kurser gör man det via formuläret som först kontrollerar att namn är ifyllt och rensar bort eventuella taggar. Därefter skickas sql-fråga och databasen uppdateras.


Webbsida admin: 
http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioPrivate/

API: 
http://studenter.miun.se/~elku1901/writeable/projektAdmin/API/

Webbportfolio:
http://studenter.miun.se/~elku1901/dt173g/Projekt/portfolioFetch/