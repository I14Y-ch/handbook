---
title: Informationsmodell
slug: informationsmodell
translationKey: informationmodel
weight: 30
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, Interoperabilitätsplattform I14Y, Datenmodell, Informationsmodell, Katalog, DCAT, Struktur, Konzept]
---
 
Auf der Interoperabilitätsplattform I14Y können sowohl Datensätze, elektronische Schnittstellen (APIs) und Datenelemente als auch Behördenleistungen beschrieben werden. Dabei gibt es zwei Einstiegspunkte: Im Katalog-Teil werden Datensätze, elektronische Schnittstellen (APIs) und Behördenleistungen verwaltet. Unter "Konzepte" sind die Beschreibungen einzelner Konzepte zu finden. 

```mermaid 
    flowchart TD
        catalog(Katalog)
        publicservice(Behördenleistung)
        dataservice(Elektronische Schnittstellen)
        dataset(Datensatz)

        distribution(Distribution)
        concept(Konzept)
        

        catalog---|enthält|publicservice
        catalog---|enthält|dataservice
        catalog---|enthält|dataset

        dataset---|hat eine|distribution
        dataset---|referenziert \nvia Struktur/ Datenelement|concept

        dataservice---|liefert Daten zu|dataset

    style catalog fill:#Ff987a
    style catalog stroke:black
    style concept fill:#Ff987a
    style concept stroke:black

    style publicservice fill:#6CC8FF
    style publicservice stroke:black
    style dataservice fill:#6CC8FF
    style dataservice stroke:black
    style dataset fill:#6CC8FF
    style dataset stroke:black

    style distribution fill:#6CC8FF
    style distribution stroke:black
```

Die Grafik bietet eine vereinfachte Darstellung der einzelnen Teile der I14Y-Plattform. Eine ausführliche Zusammenstellung ist im [Informationsmodell I14Y](/handbook/img/i14y_informationsmodell.png) zu finden.

Um den unterschiedlichen Angeboten gerecht zu werden, bedient sich die Plattform verschiedener Informationsmodelle. So wird bei Datensätzen und APIs etwa das _Data Catalog Vocabulary (DCAT)_ mit dem Schweizer Applikationsprofil eingesetzt. Im Bereich der Behördenleistungen kommt das _Core Public Service Vocabulary (CPSV)_ zum Einsatz. 

## Datensatz

Ein Datensatz ist eine Gruppe inhaltlich zusammenhängender Datenelemente in einer einheitlichen Struktur. Sie kann in unterschiedlichsten Formen und Formaten vorliegen: etwa als CSV-Datei, als Datenbank oder gespeichert in einem verteilten System wie einer Blockchain. 

Der Datensatz kann in mehreren Formaten exportiert werden, also sogenannte _Distributionen_ enthalten. Die Distributionen müssen nicht zwingend die vollen Daten beinhalten. Der Datensatz kann zudem die Grundlage für eine elektronische Schnittstelle (API) bilden, über die sich gezielt Einzelinformationen abfragen lassen.

Datensätze lassen sich auf der Interoperabilitätsplattform I14Y detailliert beschreiben: Zusätzlich zum Katalogeintrag, der die grundlegenden Informationen wie den Titel, die Beschreibung und die herausgebende Organisation beinhaltet, können auch Informationen zur Struktur erfasst werden. Eine Struktur beinhaltet in der Regel mehrere Datenelemente. Und jedes Datenelement hat ein Konzept, das die Art des Inhalts beschreibt. Als Konzept wird also die kleinste Einheit eines Datensatzes bezeichnet, oft auch (definierte) Variable oder Attribut genannt. 

```mermaid
    flowchart TD
        dataset1(Datensatz)
        structure1(Struktur)
        dataelement1(Datenelement)
        concept1(Konzept)
        codelist(Codeliste)
        numeric(Zahl)
        string(Zeichenkette)
        date(Datum)

        dataset1---|hat eine|structure1
        structure1---|beinhaltet ein|dataelement1
        dataelement1---|hat ein|concept1
        concept1---|ist eine|codelist
        concept1---|ist eine|numeric
        concept1---|ist eine|string
        concept1---|ist ein|date

    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black

    style dataelement1 fill:#Fbb54e
    style dataelement1 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black

    style codelist stroke:#Ff8076
    style numeric stroke:#Ff8076
    style string stroke:#Ff8076
    style date stroke:#Ff8076
```

Es ist möglich, dass mehrere Datensätze dieselbe Struktur haben. Die einzelnen Konzepte wiederum sind oftmals in unterschiedlichen Strukturen eingebunden. 

```mermaid
    flowchart TD
        dataset1(Datensatz 1)
        dataset2(Datensatz 2)
        dataset3(Datensatz 3)
        structure1(Struktur 1)
        structure2(Struktur 2)
        dataelement11(Datenelement 1)
        dataelement12(Datenelement 2)
        dataelement13(Datenelement 3)
        dataelement21(Datenelement 1)
        dataelement22(Datenelement 2)
        dataelement23(Datenelement 3)
        concept1(Konzept 1)
        concept2(Konzept 2)
        concept3(Konzept 3)
        concept4(Konzept 4)

        dataset1---structure1
        structure1---dataelement11
        structure1---dataelement12
        structure1---dataelement13

        dataset2---structure2
        dataset3---structure2
        structure2---dataelement21 
        structure2---dataelement22 
        structure2---dataelement23 

        dataelement11---concept1
        dataelement12---concept2
        dataelement13---concept2
        dataelement21---concept2
        dataelement22---concept3
        dataelement23---concept4


    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black
    style dataset2 fill:#6CC8FF
    style dataset2 stroke:black
    style dataset3 fill:#6CC8FF
    style dataset3 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black
    style structure2 fill:#Bfe2ab
    style structure2 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black
    style concept2 fill:#Ff8076
    style concept2 stroke:black
    style concept3 fill:#Ff8076
    style concept3 stroke:black
    style concept4 fill:#Ff8076
    style concept4 stroke:black

    style dataelement11 fill:#Fbb54e
    style dataelement11 stroke:black
    style dataelement12 fill:#Fbb54e
    style dataelement12 stroke:black
    style dataelement13 fill:#Fbb54e
    style dataelement13 stroke:black

    style dataelement21 fill:#Fbb54e
    style dataelement21 stroke:black
    style dataelement22 fill:#Fbb54e
    style dataelement22 stroke:black
    style dataelement23 fill:#Fbb54e
    style dataelement23 stroke:black
```

Am Beispiel: Im Datensatz einer Tierklinik sind Informationen zu Hunden enthalten: der Name, das Geburtsdatum, die Rasse, die Nummer des Hundechips sowie der Name und die Adresse der Hundehalterin beziehungsweise des -halters. Bei jeder dieser Angaben handelt es sich um ein Datenelement mit einem Konzept. Der Typ des Konzepts Hundename ist eine Zeichenkette, jener beim Geburtsdatum ist ein Datum und jener bei der Rasse eine Codeliste. Diese Konzepte können auch in anderen Datensätzen gebraucht werden: thematisch eng verwandten wie der Kundendatenbank einer Tierärztin oder -- etwa im Fall des Geburtsdatums oder der Adresse -- auch bei komplett anderen Datensätzen. 

```mermaid
    flowchart TD
        dataset1(Datensatz \nTierarztpraxis 1)
        dataset2(Datensatz \nTierarztpraxis 2)
        dataset3(Datensatz \nTierarztpraxis 3)
        structure1(Aufnahmeformular Hund)
        structure2(Aufnahmeformular Vogel)
        dataelement11(Hunderasse)
        dataelement12(Fellfarbe)
        dataelement13(Geschlecht)
        dataelement21(Geschlecht)
        dataelement22(Gefiederfarbe)
        dataelement23(Vogelart)
        concept1(Hunderasse \nZeichenkette)
        concept2(Farbe \nCodeliste)
        concept3(Geschlecht \nCodeliste)
        concept4(Vogelart \nZeichenkette)

        dataset1---structure1
        structure1---dataelement11
        structure1---dataelement12
        structure1---dataelement13

        dataset2---structure2
        dataset3---structure2
        structure2---dataelement21 
        structure2---dataelement22 
        structure2---dataelement23 

        dataelement11---concept1
        dataelement12---concept2
        dataelement13---concept3
        dataelement21---concept3
        dataelement22---concept2
        dataelement23---concept4


    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black
    style dataset2 fill:#6CC8FF
    style dataset2 stroke:black
    style dataset3 fill:#6CC8FF
    style dataset3 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black
    style structure2 fill:#Bfe2ab
    style structure2 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black
    style concept2 fill:#Ff8076
    style concept2 stroke:black
    style concept3 fill:#Ff8076
    style concept3 stroke:black
    style concept4 fill:#Ff8076
    style concept4 stroke:black

    style dataelement11 fill:#Fbb54e
    style dataelement11 stroke:black
    style dataelement12 fill:#Fbb54e
    style dataelement12 stroke:black
    style dataelement13 fill:#Fbb54e
    style dataelement13 stroke:black

    style dataelement21 fill:#Fbb54e
    style dataelement21 stroke:black
    style dataelement22 fill:#Fbb54e
    style dataelement22 stroke:black
    style dataelement23 fill:#Fbb54e
    style dataelement23 stroke:black

```

Datensätze werden bei der Interoperabilitätsplattform I14Y mit dem [Datenkatalog-Vokabular (DCAT)](/handbook/de/glossar) beschrieben. DCAT ist ein standardisiertes Modell zur Beschreibung von Datenkatalogen, das vom Internet-Standardisierungsgremium [W3C](https://www.w3.org/) gepflegt wird. Auf der Plattform wird weitgehend das Applikationsprofil für die Schweiz verwendet ([DCAT-AP CH 2](https://www.dcat-ap.ch/)). DCAT gibt vor, welche Informationen zwingend erfasst werden müssen. Zudem schlägt das Vokabular weitere Möglichkeiten zur Beschreibung des Datensatzes vor.     

Um Informationen zu einem Datensatz auf der Interoperabilitätsplattform I14Y speichern zu können, müssen die Minimalanforderungen erfüllt sein, die der DCAT-Standard vorgibt. I14Y bietet einige zusätzliche Felder an, die über den aktuellen DCAT-Standard hinausgehen. Welche Felder beim Erfassen von Datensätzen mit welchen Informationen befüllt werden, wird im Kapitel [Publikation](/handbook/de/publikation/katalog/datensatz) aufgeführt.

### Struktur

Die Struktur beschreibt, wie die Inhalte eines Datensatzes organisiert sind. Jede Struktur besteht aus mindestens einem Datenelement ([siehe unten](#datenelement)). Die einzelnen Strukturen können in mehreren Datensätzen verwendet werden. Beispielsweise wird bei einer wiederkehrenden Publikation eines Registers (Versionierung) in der Regel die identische Struktur verwendet. 

Zur Beschreibung der Struktur wird bei I14Y weitgehend der DCAT-Standard mit dem Schweizer Applikationsprofil eingesetzt. 

### Datenelement

Das Datenelement ist die kleineste Beschreibungseinheit eines Datensatzes. Oft wird das Datenelement auch als Attribut bezeichnet, als (definierte) Variable oder "Spalte". Das Datenelement enthält die einzelnen Werte, etwa die AHV-Nummern, die Anzahl leerstehender Wohnungen oder Messwerte zur Wassertemperatur. Jedes Datenelement referenziert ein Konzept. 

### Konzept

Das Konzept beschreibt die im Datenelement enthaltenen Informationen eindeutig und vollständig. Bei einem Konzept kann es sich um eine Zahl, eine Zeichenkette, ein Datum oder um eine Codeliste mit vordefinierten Werten handeln. 

Zur Beschreibung der Konzepte wird bei der Interoperabilitätsplattform I14Y der Standard [ISO 11179-1:2023](https://www.iso.org/standard/78914.html) verwendet. Erfasst wird der Typ des Konzepts. Abhängig davon sind weitere Angaben wie etwa die Länge oder die möglichen Minimal- und Maximalwerte nötig. Eine Schritt-für-Schritt-Anleitung zur Erfassung eines Konzepts ist im Kapitel [Publikation](/handbook/de/publikation/konzepte) zu finden. 

## Elektronische Schnittstelle (API)

Eine elektronische Schnittstelle -- auf Englisch _Application Programm Interface (API)_ -- erlaubt es Maschinen unter anderem, gezielt einzelne Informationen aus einem Datensatz anzufordern. Dank APIs können isolierte Systeme Informationen in einer effizienten und standardisierten Weise austauschen. Damit die Entwicklerinnen und Entwickler ihre Software so programmieren können, dass sie Informationen von Fremdsystemen bezieht, müssen sie diese Schnittstellen kennen. I14Y bietet die Möglichkeit, die Schnittstellen an einem zentralen Ort zu beschreiben. 

Auf I14Y muss zusätzlich etwa zum Titel und der Beschreibung ein sogenannter Endpunkt, von wo Daten bezogen werden können, oder ein Link zur Dokumentation angegeben werden. Wenn möglich wird auch auf den Datensatz verwiesen, der der API zu Grunde liegt.

Auch APIs werden auf der Interoperabilitätsplattform I14Y weitgehend mittels des Datenkatalog-Vokabulars DCAT beschrieben. Einige Felder, die im Standard optional sind, müssen zwingend befüllt werden. So empfiehlt der DCAT-Standard lediglich, dass beim Katalogisieren einer API eine Beschreibung erfasst wird. Auf I14Y hingegen ist diese Angabe obligatorisch. Alle Felder, die der Standard vorgibt, sind auch auf der Plattform zwingend auszufüllen. 

Eine Schritt-für-Schritt-Anleitung dazu, wie elektronische Schnittstellen erfasst werden, ist im Kapitel 
[Publikation](/handbook/de/publikation/katalog/api) zu finden. 

Das untenstehende Diagramm zeigt die Beziehungen zwischen den verschiedenen Klassen, die in I14Y basierend auf dem DCAT-Standard (Katalog, Datensatz, Datenservice, Distribution) verwendet werden. Es bietet auch einen Überblick über alle Eigenschaften, die mit jeder dieser Klassen verbunden sind. Eigenschaften, die mit einem Sternchen (*) gekennzeichnet sind, wurden speziell für I14Y entwickelt. Weitere Informationen zu diesen Eigenschaften finden Sie [hier](https://i14y-ch.github.io/handbook/de/anhang/eingabefelder/).

```mermaid
classDiagram
direction TB

        Catalog --> Agent : «mandatory» dct#58;publisher [1..1]
        Dataset --> Agent: «mandatory» dct#58;publisher [1..1]
        DataService --> Agent : «mandatory» dct#58;publisher [1..1] 
        Catalog --> Dataset : «recommended» dcat#58;dataset [0..*]
        DataService -->  Dataset : «recommended» dcat#58;servesDataset [0..*]
        Dataset -->  Distribution : «recommended» dcat#58;distribution [0..*]
        Distribution -->  DataService : «optional» dcat#58;accessService [0..*]
        Catalog --> Catalog : «optional» dcat#58;catalog [0..*]
        Dataset -->  Dataset : «optional» dcat#58;previousVersion [0..1]
        Dataset -->  Dataset : «optional» dct#58;hasVersion [0..*]
        

        class Catalog {
        «mandatory»
    
        dct:title: rdfs:Literal [1..*]
        dct:description: rdfs:Literal [1..*]
      
        «recommended»  
       
        dcat:themeTaxonomy: skos:ConceptScheme [1..*]
        }

        class DataService {
        «mandatory»
        
        dct:title: rdfs:Literal [1..1]
        dct:description: rdfs:Literal [1..*]
        dct:accessRights: dct:RightsStatement [0..1]
        dcat:endpointURL: rdfs:Resource [1..*]
       
        «recommended»  
       
        dct:endpointDescription: rdfs:Resource [0..*]
        dcat:contactPoint: vcard:Kind [0..*]
        dct:license: dct:LicenseDocument [0..1]
        dcat:keyword: rdfs:Literal [0..*]
        
        «optional»
       
        dcat:theme: skos:Concept [0..*]
        dcat:landingPage: foaf:Document [0..*]
        dct:conformsTo: dcterms:Standard [0..*]
        foaf:page: foaf:Document [0..*]
        adms:versionNotes: rdfs:Literal [0..*]
        dcat:version: rdfs:Literal [0..1]
        }
        class Agent {
        «mandatory»
        foaf:name: rdfs:Literal [1..*]
        dct:identifier: rdfs:Literal [1..1]
        }


        class Dataset {
        «mandatory»
       
        dct:title: rdfs:Literal [1..*]
        dct:description: rdfs:Literal [1..*]
        dct:identifier: rdfs:Literal [1..1]
        dct:accessRights: dct:RightsStatement [1..1]
        
        «recommended»
       
        dct:issued: rdfs:Literal typed as xsd:date, xsd:dateTime [0..1]
        dct:modified: rdfs:Literal typed as xsd:date, xsd:dateTime [0..1]
        dcat:theme: skos:Concept [0..*]
        dct:keyword: rdfs:Literal [0..*]
        dcat:landingPage: foaf:Document [0..*]
        dct:spatial:  dct:Location [0..*]
        dct:temporal: dct:PeriodOfTime [0..*]
        dcat:contactPoint: vcard:Kind [0..*]
      
        «optional»
        
        dct:language: dct:LinguisticSystem [0..*]
        dct:conformsTo: dct:Standard [0..*]
        dct:accuralPeriodicity: dct:Frequency [0..1]
        dct:isReferencedBy: rdfs:Resource [0..*]
        prov:qualifiedAttribution: prov:Attribution [0..*]
        dcat:qualifiedRelation: dcat:Relationship [0..*]
        dct:relation: rdfs:Resource [0..*]
        schema:image: schema:url [0..3]
        foaf:page: foaf:Document [0..*]
        adms:versionNotes: rdfs:Literal [0..*]
        dcat:version: rdfs:Literal [0..1]
        * Data Owner: Person [0..1]
        * Responsible Person: Person [0..1]
        * Responsible person Deputy: Person [0..1]
        * Process ID: rdfs:Literal [0..1]
        * Confidentiality: confidentility level [0..1]
        * Retention period: xsd:date [0..1]
        * Retention period complement: rdfs:Literal [0..1]
        * Qualified attribution complement: rdfs:Literal [0..1]
        * GeoIV ID: External Vocabulary [0..*]
        }


        class Distribution {
        «mandatory»
        dct:title: rdfs:Literal [0..*]
        dct:description: rdfs:Literal [0..*]
        dcat:accessURL: rdfs:Resource [1..1]  
    
        «recommended»
        
        dct:modified: rdfs:Literal typed as xsd:date, xsd:dateTime [0..1]
        dct:rights: dct:RightsStatement[0..1]
        dct:license: dct:LicenseDocument [1..1]
        dct:format: dct:MediaTypeOrExtent [0..1]
        
        «optional»

        dct:identifier: rdfs:Literal [0..1]
        dct:issued: rdfs:Literal typed as xsd:date, xsd:dateTime [0..1]
        dct:language: dct:LinguisticSystem [0..*]
        dct:byteSize: rdfs:Literal typed as xsd:decimal [0..1]
        dcat:mediaType: dct:MediaType [0..1]
        dcat:packageFormat: dct:MediaType [0..1]
        spdx:checksumValue: spdx:checksumValue [0..1]
        spdx:algorithm: spdx:ChecksumAlgorithm [0..1]
        spdx:checksum: spdx:Checksum [0..1]
        dcatap:availability: skos:Concept [0..1]
        dct:coverage: dct:PeriodOfTime [0..*]
        dcat:temporalResolution: xsd:duration [0..1]
        dct:conformsTo: dct:Standard [0..*]
        foaf:page: foaf:Document [0..*]
        schema:image: schema:url [0..3]
        dcat:downloadURL: rdfs:Resource[0..*]
        }
```

## Elektronische Behördenleistung

Auf der Interoperabilitätsplattform I14Y können ausserdem elektronische Behördenleistungen beschrieben werden. So lässt sich dokumentieren, welche Web- oder Mobilapplikationen bestimmte Aufgaben vereinfachen. Erfasst werden zudem Angaben dazu, wie auf die betreffende App zugegriffen werden kann und welche Organisation sie verantwortet. Dank des zentralen Verzeichnisses sollen die elektronischen Behördenleistungen einfacher auffindbar werden. 

Um Behördenleistungen zu beschreiben, wird das _Core Public Service Vocabulary_ verwendet, das die Europäische Union definiert hat. Der Aufbau und das gesamte Vokabular sind auf der Interoperabilitätsplattform [Joinup](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/core-public-service-vocabulary/releases) der Europäischen Kommission dokumentiert. Das wiederverwendbare und ausbaufähige Vokabular gibt bestimmte Felder vor, die zwingend ausgefüllt werden müssen. Jeder Behördenleistung können Kanäle zugeordnet werden -- eine Internet-Adresse etwa oder eine Telefonnummer.

Wie bei der Erfassung einer Behördenleistung auf der Interoperabilitätsplattform I14Y vorzugehen ist, wird im Kapitel [Publikation](/handbook/de/publikation/katalog/publicservice/) detailliert beschrieben.
