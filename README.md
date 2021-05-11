# Progressive Web Apps @cmda-minor-web · 20-21
![Design scherm](https://i.imgur.com/qs6gs6s.png)
# 🎁 Table of Contents
* [Live versie]()
# 🌍 Live versie
Dit is de repository voor browser-technologies CMD 2020/2021.<br>
🌍 Live versie: https://custom-tshirt-bt.herokuapp.com/
# 💬 Concept
## Uitleg
Voor dit vak moesten wij een demo maken op basis van een use case. We moeten zorgen dat alle gebruikers, met alle browsers, in iedere contect minimaal de *core functionalit* te zien/ horen/ voelen krijgen en maximaal een hele goede user experience.

De demo bouwen we in 3 lagen, volgens het principe van *Progressive Enhancement*.

Als enhancement moesten wij een [Browser Technologie](https://platform.html5.org/) onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning. We onderzoeken hoe verschillende features door verschillende browsers worden ondersteund, hoe je voor goede fallback kan zorgen en testen op featues op verschillende browsers.

Polyfills en NPM packages op de client zijn niet toegestaan, en op de server mag je doen wat je wilt. Wat voor deze opdracht telt, is de HTML/ CSS/ JavaScript die aan de browser wordt aangeleverd.
## Use case
De use case die ik heb gekozen is Nerdy T-Shirt. In deze use dase wil ik mijn eigen t-shiort met nerdy tekst kunnen ontwerpen, opslaan, bestellen, en een volgende keer dat ik de site bezoek kunnen gebruiken.

### Vereisten
* Gegevens maker (naam, telefoon of email)
* Kleur t-shirt
* Tekst t-shirt
* Maat t-shirt
* M/V
* Verder gaan waar je gebleven bent/ontwerp herzien
* Validatie: alles moet zijn ingevuld. Geef duidelijke foutmeldingen
* Gebruiker moet meerdere t-shirts kunnen maken en herzien, en moet dus een overzichtspagina hebben.
* Bestel pagina om een ontwerp kopen en laten maken

# ✏️ Schets 
Na dat ik te horen kreeg dat ik moest herkansen, en het design van de app moest veranderen om meer het gevoel te krijgen dat ik iets aan het designen ben i.p.v. dat ik een formulier invul, heb ik een nieuwe schets gemaakt van hoe het eruit zou komen te zien.

![Nieuwe schets](https://i.imgur.com/5hFkE3A.jpg)
# 📈 API/ Browser Technologie
De API's/ Browser Technologie's die ik wil gaan gebruiken zijn:
* [Drag and drop](https://html.spec.whatwg.org/multipage/dnd.html#dnd)
* [Web storage/ local storage](https://html.spec.whatwg.org/multipage/webstorage.html#webstorage)
# 🍰 Progressive Enhancement
## Wat is Progressive Enhancement?
Progressive Enhancement is de eerst de nadruk leggen op de webcontent. Je kijkt eerst wat voor content er dus belangrijk is om te laten zien op je pagina met HTML (Functional). Daarna voeg je met CSS (Usable) alle functionele functies toe die je kan toevoegen met CSS. Zijn er voor bepaalde functies echt geen mogelijkheden met CSS? Dan voeg je de laatste laag toen, je JavaScript (Pleasurable)
## Progressive Enhancement in mijn project
### 🙂 Functional/ Reliable
Waar ik op gelet heb wat betreft de HTML laag, is dat de content semantisch is. De formulieren zijn semantisch correct gebouwd, zodat deze bijvoorbeeld goed word voorgelezen aan een screenreader. Ook zijn de keuzes in het formulier radiobuttons. Dit zorgt ervoor dat de gebruiker maar 1 keuze kan maken. 
### 😀 Usable
De "extra's" van de CSS laag voegen een aantal dingen toe om de experience flink te verbeteren. Zo worden er natuurlijk standaard dingen toegevoegd zoals leesbaarheidregels, uitlijning, contrast en kleuren. De site ziet er nu dan ook beter uit voor het oog, de gebruiker vind het leuker om de website te kunnen gebruiken. Niet alleen CSS word gezien als een toevoeging van van de Usable laag. Maar ook server side JS.

**File system:** Doormiddel van [File system](https://nodejs.org/api/fs.html), kan de gebruiker zijn gegevens opslaan. Na het invullen van het formulier, word de data in een apart bestandje opgeslagen, een [JSON file](https://github.com/HappyPantss/browser-technologies-2021/blob/master/data.json). Bijvoorbeeld:

```JSON
{
  "gender": "male",
  "size": "XL",
  "color": "pink",
  "text": "May the force be with you - Harry🖖"
}
```

Met deze data kunnen we het opgeslagen shirt op de overview pagina laten zien. Data over het shirt, zoals de maat en het geslacht. De kleur van het shirt veranderd naar de kleur die gekozen is, en de tekst staat op het shirt.

![Overview met JSON data](https://i.imgur.com/qqoWfIe.png)

### 😍 Pleasurable
De pleasurable laag word het meeste door JavaScript beïnvloedt. De gebruiker heeft met deze laag als laatst erbij, de meest enhanced  versie. De experience is hierdoor super vet, gaaf, prettig en leuk om te gebruiken. 

**Drag and Drop:** Drag and Drop is een API/ Browser Technologie die ik heb gekozen. Dit zorgt ervoor dat de gebruiker op een leuke manier met de bedoeling van de site kan werken. Ik heb dit gebruikt met het verplaatsen van de positie van de tekst.

![Drag and Drop](https://i.imgur.com/VCE2IZL.gif)

**Local storage:** Local Storage is de tweede API/ Browser Technologie die ik gekozen heb om te gebruiken. Deze functie zorgt ervoor dat de data die de gebruiker in het formulier invult, word opgeslagen in de storage. Zodra de gebruiker de website verlaat, en terug komt, staat de ingevulde data er nogsteeds.

**Progressive disclosure:** Zodra JavaScript is ingeschakeld, is het formulier fijner om doorheen te gaan door stappen te gebruiken. 

![Progressive disclosure](https://i.imgur.com/iCynZPF.gif)

**Live tekst:** Als je de tekst die je op je t-shirt wilt veranderd, zie je dit gelijk op het shirt tevoorschijn komen. Dit zorgt er natuurlijk voor dat je beter kan zien waar de tekst op het shirt komt.

![Live tekst](https://i.imgur.com/sLUXHdJ.gif)

**Live kleur:** Met het veranderen van een kleur, zie je het shirt meteen veranderen. Hoe tof is dat?! Nu zie je hoe je shirt met de tekst erop eruit gaat zien met je gekozen kleur!

![Live kleur](https://i.imgur.com/JAJvqfu.gif)

# 🔎 Feature Detection
## Wat is Feature Detection?
Feature Detection kijkt of bepaalde features (kenmerken) aanstaat op de pc van de client/ gebruiker. En met deze informatie gebruikt je website andere manieren van werken.
## Feature Detection in mijn project
### JavaScript
De progressive disclosure voor het formulier werkt alleen als JavaScript aanstaat. Maar deze functie zorgt ervoor, als je geen andere optie hebt, dat je formulier niet goed meer werkt. Daarom kijk ik met feature detection of JavaScript aan staat, zo niet, laat dan een normale versie van het formulier zien.

**Code:**
```JavaScript
// Voeg progressive form toe wanneer javascript aanstaat.
const overviewPieces = document.querySelector('.overviewPieces')

if (overviewPieces) {
    // Functie
}
```

### Local storage
De local storage functie werkt sowieso alleen maar als JavaScript aanstaat, maar met behulp van de local storage feature detection, word deze gebruikt als de gebruiker dit aan heeft, en word het niet gebruikt als de gebruiker het uit heeft staan.

**Code:**
```JavaScript
if (window.localStorage) {
// Functies
}
```
# 🔨 Testen
De tests hieronder zijn van mijn herkansing. Wil je graag de oude tests zien? Ga dan naar [de wiki]().

De browsers waarop ik mijn app op heb getest:
* Desktop: Mozilla Firefox
* Desktop: Opera GX
* Mobiel: Android Chrome (Apparaat: OnePlus 8 Pro)
* Mobiel: Samsung Browser (Apparaat: Samsung Galaxy S9)

Functies die getest worden:
* localStorage
* Drag and Drop
* CSS uit
* JavaScript uit

**Bekijk de tests:**
<!-- <details>
<summary>Desktop: Mozilla Firefox</summary>
<p> -->

## localStorage:
**Javascript aan:**
![Javascript aan](https://i.imgur.com/vgmRW62.gif)
De data word opgeslagen in de local storage. Zodra de gebruiker de website verlaat, word deze ingeladen, en word al deze data weer laten zien. Alles werkt zoals behoren.

**Javascript uit:**
![Javascript uit](https://i.imgur.com/Zf3Hlp5.gif)
Zodra JavaScript uit staat werkt Local Storage niet meer. In plaats hiervan word de data in een JSON file opgeslagen.

## Drag and Drop:
**Javascript aan:**
![Javascript aan](https://i.imgur.com/LKqkpnu.gif)
De data word opgeslagen in de local storage. Zodra de gebruiker de website verlaat, word deze ingeladen, en word al deze data weer laten zien.

**Javascript uit:**


<!-- </p>
</details><br> -->
<details>
<summary>Desktop: Opera GX</summary>
<p>

## localStorage:
**Javascript aan:**
![Javascript aan](https://i.imgur.com/gNBOZFm.gif)
De data word opgeslagen in de local storage. Zodra de gebruiker de website verlaat, word deze ingeladen, en word al deze data weer laten zien. Alles werkt zoals behoren.

**Javascript uit:**
![Javascript uit](https://i.imgur.com/yMWrzPo.gif)
Zodra JavaScript uit staat werkt Local Storage niet meer. In plaats hiervan word de data in een JSON file opgeslagen.

## Drag and Drop:
**Javascript aan:**
![Javascript aan](https://i.imgur.com/LgyTVPC.gif)
De data word opgeslagen in de local storage. Zodra de gebruiker de website verlaat, word deze ingeladen, en word al deze data weer laten zien.

**Javascript uit:**

</p>
</details><br>
<details>
<summary>Mobiel: Android Chrome (Apparaat: OnePlus 8 Pro)</summary>
<p>

## localStorage:
**Javascript aan:**
Helaas werd dit gifje iets te lang, dus ik heb de video op YouTube gezet, die is [hier](https://www.youtube.com/watch?v=DJdvBs_TdE4) te zien.
De data word opgeslagen in de local storage. Zodra de gebruiker de website verlaat, word deze ingeladen, en word al deze data weer laten zien. Alles werkt zoals behoren.

**Javascript uit:**
Helaas werd dit gifje iets te lang, dus ik heb de video op YouTube gezet, die is [hier](https://www.youtube.com/watch?v=ttPWKWAAfNk) te zien.
Zodra JavaScript uit staat werkt Local Storage niet meer. In plaats hiervan word de data in een JSON file opgeslagen.

## Drag and Drop:
**Javascript aan:**
Helaas werd dit gifje iets te lang, dus ik heb de video op YouTube gezet, die is [hier](https://www.youtube.com/watch?v=liWlOTJg5LA) te zien.
De data word opgeslagen in de local storage. Zodra de gebruiker de website verlaat, word deze ingeladen, en word al deze data weer laten zien.

**Javascript uit:**

</p>
</details><br>
<details>
<summary>Mobiel: Samsung Browser (Apparaat: Samsung Galaxy S9)</summary>
<p>

## localStorage:
**Javascript aan:**
Helaas werd dit gifje iets te lang, dus ik heb de video op YouTube gezet, die is [hier](https://www.youtube.com/watch?v=0edcQubjHm0) te zien.
De data word opgeslagen in de local storage. Zodra de gebruiker de website verlaat, word deze ingeladen, en word al deze data weer laten zien. Alles werkt zoals behoren.

**Javascript uit:**
Helaas werd dit gifje iets te lang, dus ik heb de video op YouTube gezet, die is [hier](https://www.youtube.com/watch?v=etfF2vKd9l0) te zien.
Zodra JavaScript uit staat werkt Local Storage niet meer. In plaats hiervan word de data in een JSON file opgeslagen.

## Drag and Drop:
**Javascript aan:**
Helaas werd dit gifje iets te lang, dus ik heb de video op YouTube gezet, die is [hier](https://www.youtube.com/watch?v=-ERvptKM4xE) te zien.
De data word opgeslagen in de local storage. Zodra de gebruiker de website verlaat, word deze ingeladen, en word al deze data weer laten zien.

**Javascript uit:**

</p>
</details><br>

# 🚀 Installatie
**Clone de repository:**<br>
`https://github.com/HappyPantss/browser-technologies-2021.git`

**Installeer NPM:**<br>
`npm install`
# 🔧 Gebruik
**Start de locale server op port 3000:**<br>
`npm run start`

> Gebruik `npm run dev` om live de veranderingen te zien wanneer je de code veranderd en opslaat zonder de pagina te refreshen.

**Ga naar de locale website in je browser met:**<br>
`http://localhost:3000/`