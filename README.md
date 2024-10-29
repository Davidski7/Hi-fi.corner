# **Projektopgave HI-FI Corner**

## Om opgaven
Denne opgave omhandler opsætning, navigation og hentning af data. Læs hele opgavebeskrivelsen grundigt igennem inden I stiller spørgsmål.

## Opgavebeskrivelse

I skal fremstille en webapplikation til en HI-FI webbutik, som præsenterer butikkens produkter inddelt efter kategori eller producent. Brugeren af sitet skal nemt og overskueligt kunne finde rundt i de forskellige produkter og kunne fremsøge produkter vha. søgeord. Der er **udelukkende** tale om præsentation af produkterne, man skal ikke kunne handle produkter på siden.

Opgaven varer ca. 2-2.5 uger og omhandler både planlægningen og produktionen af client-side produktet. Opgaven skal planlægges, der skal udarbejdes designanalyse (identifikation af komponenter/moduler). <strike>Der skal udarbejdes user-stories til de enkelte komponenter. I skal samarbejde om projektet digitalt (eksempelvis ved hjælp af GitHub Projects), men det er også et krav, at I undervejs i processen vedligeholder et fysisk kanban-board, som kan bruges fx. ved de daglige scrum-møder.</strike>

<strike>Der er afsat to dage til den indledende planlægning, hvorefter selve udførelsen af produktet afvikles i to sprints af cirka en uges varighed. I skal afholde et sprint-planning møde med jeres lærer forud for hvert sprint, ligesom der skal være et sprint-review af hvert sprint med jeres lærer.</strike>

Det arbejde der forventes udført når projektet er slut, er en funktionel offentlig tilgængelig (github pages eller lignende) client-side som henter data og billeder fra en (eller flere) JSON-datakilde(r). Applikationen skal være sat op, så den matcher det udleverede design.

Et HI-FI produkt består af et navn, en beskrivelse, en pris, et billede, samt hører til i en kategori og er knyttet til en producent. I skal selv udtænke hvordan datastrukturen stilles op i JSON.
*(billederne findes i den medfølgende .zip fil, men ved alle de andre produktdata finder I selv på noget, benyt evt https://lipsum.com/feed/html )*

### Tekniske krav
**Client-Side** skal løses vha. HTML, CSS og Javascript(React.js), som ved hjælp af fetch-api'et henter data fra en eller flere JSON filer. Jeres CSS skal være modulær, og overholde BEM konventionen, <strike>samt principperne i SMACSS.</strike> Produktet kan designes efter mobile first princippet, men ikke nødvendigvis implementeret til begge medier *(prioriter browser varianten som den primære der produceres)*.


### Planlægning
* Layoutanalyse - identificer komponenter/moduler(BEM blokke) i layoutet. <strike>Husk at analysere indefra og ud.</strike>
* <strike>User stories - skriv user stories til alle komponenter.</strike>
* <strike>Udarbejd 'definition of done' på de enkelte user-stories. Hvilke kriterier skal komponentet/modulet opfylde for at være færdigt? Hvad skal den som laver review kontrollere om er i orden?</strike>
* <strike>SPRINT PLANNING (husk at invitere jeres lærer) Prioriter jeres user-stories og estimer dem, i vælger at arbejde med i det første sprint (planning poker)</strike>

### Forslag til arbejdsprocess
* Opsæt HTML sider med navigation og dummy-data (statisk site)
* Design datastrukturer i JSON. (en test-fil med tre eller fire produkter som kan bruges i udviklingsfasen)
* Programmér funktioner til dataudtræk
* Byg alle nødvendige fetch, og udskriv data fra fetch.
* Opret datafiler (JSON)
* Dokumentér kode og funktionalitet i markdown-filer 


### Sider og indhold
* Forside
* Brand-liste
* Shop-kategorier
* Kategori-liste
* Enkelt produktvisning
 
### Forsiden 
* Forsidetekst og billeder af produkter
* Visning af ét eller flere udvalgte produkter (kan være de senest oprettede, et tilfældigt produkt eller andet du finder relevant)
 
### Produktsider
Der er flere forskellige funktioner under produkter:
* Visning af alle produkter inden for en bestemt kategori, uden produkt beskrivelse
* Visning af alle produkter der hører til en bestemt producent, uden produkt beskrivelse
* Visning af ét produkt ved klik på et produkt fra listerne
* Visning af produkter efter søgning 

Alle produkter hentes via et "API"(JSON) og udskrives med fetch, alle produkter vises med deres billede.
 
### Alle sider 
* Menu 
* Fritekst-søgefunktion til produkter og producenter (visning på produktsiden) 
* Footer med kontaktinfo 

### Github
* <strike>Projektet opsættes i et GitHub repo - husk at invitere din lærer som collaborator.</strike>
* Projektet accepteres som en GitHub assignment.
* Der skal *committes ved væsentlige ændringer eller færdiggørelse af en funktionalitet* - og altid inden fyraften.
* Alle commit tekster på GitHub skal kort beskrive ændringerne. **Der må ikke skrives ligegyldige beskrivelser!**.

### Billedfiler
Alle billeder ligger i en zippet fil fordelt i mapper.

I vælger om alle billeder skal ligge i én mappe eller om I vil bevare mappestrukturen.

Brug følgende liste, hvis I er i tvivl om hvilke kategorier de forskellige billeder tilhører:

  
**CD Afspillere**

    * creek_classic_cd.jpg
    * creek_Destiny_CD.jpg
    * creek_evo_cd.jpg
    * Exp_2010S_CD.gif


**DVD Afspillere**

    * creek_classic.jpg
    * exposure_2010S.jpg
    * parasound_d200.jpg
    * parasound_halod3.jpg

**Effektforstærkere**

    * manley_mahi.jpg
    * manley_neoclassic300b.jpg
    * manley_snapper.jpg
    * parasound_haloa23.jpg


**Forforstærkere**

    * Creek_OBH_22_Passive_Preamp.jpg
    * parasound_classic7100.jpg
    * parasound_halop3.jpg
    * Project_prebox.jpg


**Højtalere**

    * boesendorfer_vcs_wall.gif
    * epos_m5.gif
    * harbeth_hl7es2.jpg
    * harbeth_monitor30.jpg
    * harbeth_p3es2.jpg


**Int. Forstærkere**

    * creek_a50I.jpg
    * creek_classic5350SE.jpg
    * creek_destinyamp.jpg
    * manley_snapper.jpg
    * Manley_Stingray.jpg


**Pladespillere**

    * Pro_ject_Debut_3_bl.jpg
    * Pro_ject_Debut_III_red_1.jpg
    * Pro_ject_Debut_III_yellow_1.jpg
    * Pro_ject_rpm_5.jpg
    * Pro_ject_rpm10.jpg


**Rørforstærkere**

    * jolida_JD102b.jpg
    * jolida_JD202a.jpg
    * jolida_JD300b.jpg
    * jolida_JD302b.jpg
    * jolida_JD502b.jpg 
 
## EKSTRAOPGAVE
Hvis I er hurtigt færdige!

Indsæt reklmebannere på hjemmesiden. Du skal selv beslutte hvor på siden reklamebannere vil passe ind. Find et API på nettet, som lader dig fetche bannere og indsæt vilkårlige bannere på hjemmesiden.
