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

### 20/4

Fixade att kunna skriva ut datan som behövs och skapade en fungerande hook för att få väderdata. I mitt API, WeatherAPI, finns möjlighet att få en prognos för 1-14 dagar i PRO-versionen, men sedan går prognosen över till gratisversionen som bara har tre dagars prognos. Därför tänker jag: spela in en demo av min app medan den fortfarande har fem dagars prognos, då provperioden går ut 1/5. Utöver det kommer jag försöka skapa en alternativ variant där tre dagar visas upp samt någon extra information som exempelvis weather alerts.

Att göra härnäst: använda geolocation och skapa möjlighet att visa väder baserat på sina koordinater. Titta på uppvisningen från igår och basera min kod på den.

Därefter: lägga till soluppgång och -nedgång (astro kommer automatiskt med forecast, liksom current, därför kan jag ha samma url till dessa).

Därefter: skapa manuell sökning på något sätt, antingen via knappar för städer eller nån form av sökfunktion.

Även: jobba vidare med desing, som blivit bortprioriterat hittills.

Annat som återstår: kunna med en knapp ändra mellan Fahrenheit och Celsius, samt andra enheter som är specifika för respektive system.

_Uppdatering_:

- ~~Jag har nu fungerande routing, men lyckas däremot inte få ihop koordinaterna från min geolocation med väderdatan. Jag behöver skapa en mindre komplex version av koden, som liknar den Sebastian gjorde på uppvisningen från 19/4. Jag behöver få bättre struktur på vad som ska visas var i min app och exakt vilka komponenter som ska bero på varandra. Detta är prio!~~ FIXAT!

- ~~Det är problem med att skriva ut astro-datan (soluppgång och solnedgång), kolla närmare på vad som är fel. Kanske löser det sig när jag skapar min request enbart baserat på forecast som i Sebastians exempel. Enligt hur designen ser ut i WeatherApi ligger astro under forecast, sedan forecastday, men inget skrivs ut när jag försökt med detta, inte heller med data.forecast.astro.~~ Fungerar, [] fattades, då det är en array av objekt.

### 24/4

Jag har fått handledning under förmiddagen eftersom error "r.location is undefined" uppstår i min deployade version av appen. Ingen lösning hittades under handledning, så jag har tittat vidare själv och upptäckt att min api-key är undefined. Försöker nu hitta en lösning på det.
_Uppdatering_: Det verkar ha med .env att göra, att den inte kan läsa av min variabel av någon anledning i produktion. Det fungerar lokalt, men så fort innehållet ska renderas i deployen dyker felet upp igen. Nu när jag skrev ut app-key i koden istället, som jag hade det från början, försvinner felet och appen funkar. Ta handledning igen imorgon!

### 25/4

Nu kan jag visa upp en forecast, och beslutade mig för att ändra till tre dagar istället för fem dagar, då min provperiod på pro-version av WeatherAPI kommer gå ut den 1/5 och uppgiften inte kommer hinna rättas innan dess. Därför ska jag försöka få ut alerts istället, så att alla kan se aktuella väderhändelser. Jag behöver också kovertera enheter. Jag ska också göra en searchbar för dem som inte vill ange sin plats, men måste då använda en annan url.

Att göra härnäst: Konvertera enheter med en knapp i en egen komponent så det går att använda den på fler ställen. Kanske är headern ett bra ställe för det?

Därefter: Göra färdigt searchbar och bestämma mig för om jag ska ha routing eller inte.

Efter det: Design!

_Uppdatering_ Nu är det löst med .env, som framkallade "r.location is undefined". Jag hade missat att lägga in variabeln i Netlify och efter att detta blev gjort funkar allt. Enhetskonverteringen är klar, och går att göra med två knappar i headern. De ligger globalt i app.tsx och skickas som props in i Header och DisplayWeather. Jag har också fått hjälp att komma vidare i min searchquery under handledningen, men eftersom vi inte kom längre bestämde vi att vi undersöker på varsitt håll och jag återkommer imorgon om jag inte hittat någon fungerande lösning. Jag ska också bygga upp själva sökfältet så att det går att testa till imorgon, om jag återkommer då.

_Uppdatering 2_ Jag verkar ha lyckats villkora url:en så den tar antingen searchquery eller position via geolocation!
