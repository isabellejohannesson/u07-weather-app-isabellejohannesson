# Logg U07

## Inledning

Det här är en loggbok för att underlätta processen och hålla ordning på vad som gjorts och ska göras.
Varje dag jag arbetar på projektet för jag anteckningar över vad jag gjort, vad som som behövs härnäst och eventuella problem som dyker upp under processen, allt för att försöka skapa en struktur som funkar bra för mig och för att effektivisera och metodisera mitt arbete.

### 14/4

Läst dokumentation över olika väder-API:er och skapat lo-fi-skisser i Figma. Som förlaga har jag använt [Weather.com](https://weather.com/sv-SE/weather/today/l/59.33,18.05), och försökt ha bra struktur på mina lager i Figma med märkning av vad som ska finnas i dom.

Jag har också skapat projektet och påbörjat versionshantering med Github Classroom.

Att göra härnäst:

- Skapa ett litet minitest med Pokémon-API:et som vi gjorde på lektionen 13/4, då jag inte fick det att fungera under lektionen.
- Ersätta Pokémon-API:et med SMHI och se vad jag får för svar. Titta särskilt på hur jag kan skriva ut staden utifrån koordinaterna.

Att göra därefter:

- Välja CSS, Sass eller Tailwind och skapa en väldigt enkel första iteration av appen.

### 17/4

Skapat minivariant av Pokédex och fått en fungerande url med Weatherapi som testats i Insomnia. Börjat skapa en egen store, komponent, byggt på exemplet med Pokédex, men det fungerar inte att använda den i app.tsx.

Att göra härnäst: flytta in koden i app.tsx och se om det fungerar där, felsök och skapa ett så enkelt fungerande get request som möjligt.

Att göra därefter: Få koden att fungera i egen komponent eller store. Läs mer om store för att förstå hur det fungerar.

Skriv ut väderdatan i browsern.

### 18/4

Väderdatan skrivs ut i browsern och jag har just nu API-requestet i en egen komponent. Jag vill kunna ha en sökfunktion för att visa väder utifrån stad, men också visa väder direkt i startvy baserat på plats. Därför behöver jag ha API-requests i flera komponenter, vilket borde göras med en egen hook, som jag nu läst mer om.

### 19/4

Påbörjat en searchbar-komponent, men ska hålla mig till en sak i taget. Jag har läst igenom uppgiftsbeskrivningen igen och inser att sök-funktion för att kunna söka upp en plats är extra-features, så jag ska därför se till att först nå grundkraven.

Att göra härnäst: Skriva ut all data som behövs och skapa knappar för platser.

Extra: Skapa en hook som gör att jag kan implementera väderAPIrequests i flera komponenter.
