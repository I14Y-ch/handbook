---
title: Struktur beschreiben
slug: struktur
weight: 20
type: docs
translationKey: dataset-structure
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, Interoperabilität, Datensatz, Dataset, Erfassen, Erfassung, Inventar, Katalog, Struktur, Datenmodellierung, TTL, Turtle, JSON-LD, RDF]
---

Die Struktur beschreibt den Aufbau eines Datenangebots -- also welche Datenelemente (z.B. Spalten, Felder, Attribute) enthalten sind und in welcher Beziehung diese zueinander stehen. Während der zuvor erstellte Katalogeintrag primär dokumentiert, _dass_ ein Datenangebot existiert, zeigt die Struktur _wie_ es aussieht.

Das Hinterlegen der Struktur ist eine zentrale Voraussetzung für die Datenharmonisierung. Diese ermöglicht es, Datenelemente über mehrere Datenangebote hinweg zu vergleichen und -- wenn gewünscht -- auf gemeinsame Definitionen abzustützen. Ziel ist es, möglichst alle relevanten Strukturen zu erfassen. Sobald diese grundlegende Dokumentation abgeschlossen ist, können Arbeiten zur Datenharmonisierung begonnen werden.

Typische Inhalte einer Struktur umfassen Namen und Beschreibungen der Datenelemente (z.B. "Gemeindenummer", "Gemeindename", "Wohnbevölkerung_total"), Datentypen und Formate (z.B. Zahl, Text, Datum), Referenzen und Beziehungen, optionale Einschränkungen oder Regeln (z.B. Pflichtfelder, Wertebereiche) sowie Verweise auf verwendete Definitionen.

Die Struktur kann auf I14Y nicht direkt erfasst werden. Stattdessen muss sie ausserhalb der Plattform beschrieben werden. Wie Sie dabei vorgehen können, wird unter [Strukturdatei erstellen](#strukturdatei-erstellen) erläutert. Akzeptiert werden Dateien in drei Formaten: TTL (Turtle/SHACL), RDF und JSON-LD. 

Sobald die Strukturdatei bereit liegt, kann sie in I14Y einem Datensatz zuwiesen werden: Öffnen Sie dazu den betreffenden Eintrag im internen Bereich von I14Y. Wechseln Sie ins Register Struktur. Laden Sie anschliessend die Strukturdatei über die Weboberfläche hoch. Strukturen lassen sich auf I14Y noch nicht direkt im Browser editieren. Falls eine Struktur angepasst werden muss, wird sie heruntergeladen, lokal angepasst und dann wieder hochgeladen.  

<details>
<summary><strong>Formate zur Beschreibung von Strukturen</strong></summary>

**Turtle (TTL)** ist eine kompakte, menschenlesbare Serialisierungssprache für RDF-Daten, die vom World Wide Web Consortium (W3C) standardisiert wurde. In Kombination mit SHACL eignet sie sich besonders gut zur Definition von Validierungsregeln und Datenstrukturen. Dank ihrer übersichtlichen Syntax lässt sich Turtle leicht von Hand schreiben und im Code-Editor bearbeiten. Turtle ist daher das empfohlene Format auf I14Y.

**RDF (Resource Description Framework)** ist das vom W3C entwickelte Datenmodell zur Beschreibung von Ressourcen im Web und bildet die Grundlage des semantischen Web. Informationen werden als Tripel (Subjekt -- Prädikat -- Objekt) strukturiert, was RDF besonders gut für Linked-Data-Anwendungen geeignet macht. Die manuelle Bearbeitung ist jedoch weniger intuitiv als bei Turtle.

**JSON-LD** ist ein auf JSON basierendes Format zur Darstellung von Linked Data. Es ermöglicht die Einbettung semantischer Metadaten in bestehende JSON-Strukturen und wird häufig in modernen elektronischen Schnittstellen (APIs) eingesetzt. Entsprechend ist das Format den meisten Entwicklerinnen und Entwicklern vertraut. Gegenüber Turtle ist das JSON-LD jedoch weniger kompakt. Deshalb ist es aufwändiger Daten in diesem Format manuell zu editieren.

</details>

Strukturen auf I14Y bestehen aus drei Hauptobjekten: Klassen, Attributen und Assoziationen. Am Beispiel einer Tabelle zu Gemeinden: Die Klasse entspricht der Tabelle. Bei den einzelnen Spalten der Tabelle (z.B. den Spalten `Gemeindenummer` oder `Gemeindename`) handelt es sich um Attribute. Eine Assoziation hingegen beschreibt die Beziehung zwischen zwei Klassen. So lässt sich etwa zeigen, dass jede `Gemeindenummer` genau einem `Kanton` zugeordnet ist. 

<details>
<summary><strong>Klassen, Attribute und Assoziationen im Detail</strong></summary>

**Klasse:** Eine Klasse beschreibt einen Entitätstyp. In vielen Fällen entspricht sie einer Tabelle. In SHACL wird sie als `sh:NodeShape` definiert. Für den Namen einer Klasse wird `rdfs:label` verwendet; Beschreibungen werden mit `dcterms:description` oder `rdfs:comment` hinterlegt.

**Attribut:** Ein Attribut ist ein einfaches Datenelement (ein Feld oder eine Spalte) ohne Verweis auf eine andere Klasse. Es wird in SHACL als `sh:PropertyShape` modelliert. Wichtige Felder sind: `sh:path` (Pflicht), `sh:datatype`, `sh:name` (menschenlesbarer Name), Kardinalitäten (`sh:minCount`, `sh:maxCount`), Validierungsregeln (`sh:pattern`, `sh:minLength`, `sh:maxLength`) sowie `dcterms:conformsTo` (Verweis auf ein I14Y-Konzept).

**Assoziation:** Eine Assoziation ist eine Beziehung zwischen zwei Klassen. Sie wird ebenfalls als `sh:PropertyShape` modelliert, jedoch mit `sh:class` oder `sh:node` als Ziel-Klasse. In I14Y wird `sh:node` gegenüber `sh:class` bevorzugt, da `sh:node` gegen die Struktur (d.h. gegen eine andere `sh:NodeShape`) validiert, während `sh:class` lediglich den RDF-Typ prüft. Beide Varianten werden unterstützt.

Für Attribute und Assoziationen kann mit `dcterms:conformsTo` angegeben werden, dass sich das Element auf ein I14Y-Konzept abstützt. Daten, die sich auf dieselben grundlegenden Definitionen beziehen, sind (teilweise) harmonisiert.

Eine ausführliche Beschreibung aller Felder für Klassen, Attribute und Assoziationen findet sich im [Anhang](/handbook/de/anhang/eingabefelder/struktur/).

</details>

## Strukturdatei erstellen

Strukturen lassen sich auf drei verschiedene Arten produzieren: Sie können entweder direkt in einem Code-Editor modelliert werden. Alternativ lassen sich die Strukturen, wie sie auf I14Y verwendet werden, aus vorhandenen Schemata ableiten, etwa aus jenem in einer XSD-Datei. Oder die Struktur wird anhand der eigentlichen Daten erstellt.

I14Y stellt in der [Toolbox](https://toolbox.i14y.admin.ch) den **Data Structure Editor** bereit. Dieses Hilfsprogramm unterstützt Sie beim Erstellen oder Extrahieren von Strukturen. Für die Umwandlung von Schemas oder Datendateien steht in der Toolbox zudem das Hilfsprogramm **Convert to SHACL** zur Verfügung; die darin verwendeten Python-Skripte können auf [Github](https://github.com/I14Y-ch/shacl_importer_scripts) bezogen werden. 

Allenfalls können auch externe Werkzeuge hilfreich sein, wenn SHACL-Strukturen erstellt und geprüft werden müssen. Einige dieser externen Hilfsprogramme sind nachfolgend aufgelistet. 

| Werkzeug | Beschreibung |
|---|---|
| [SHACL Play!](https://shacl-play.sparna.fr/play) | Validierung, UML-Visualisierung, HTML-Dokumentation, SHACL aus RDF generieren, JSON Schema / JSON-LD exportieren |
| [SKOS Play!](https://skos-play.sparna.fr/play/convert) | Konvertierung von Excel-Vorlagen in RDF (unterstützt SKOS, SHACL, RDF) |
| [SHACL Playground](https://shacl.org/playground/) | Online-Editor und Validator |
| [SHACL Online Editor](https://www.ida.liu.se/~robke04/SHACLTutorial/) | Online-Editor mit Tutorial |
| [SHACL Validator (EU)](https://www.itb.ec.europa.eu/shacl/any/upload) | SHACL-Validierung |
| [XSD2SHACL](https://github.com/dtai-kg/XSD2SHACL) | Generiert SHACL-Shapes aus XML Schema (XSD) |
| [W3C RDF Validator](https://www.w3.org/RDF/Validator/) | Syntaxvalidierung von RDF/Turtle-Dateien |

### Hinweise zur Erstellung von SHACL-Strukturen

### Turtle-Beispiel

Das folgende Beispiel zeigt eine einfache SHACL-Struktur in Turtle-Notation mit einer Klasse, zwei Attributen und einer Assoziation:

```turtle
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix i14y: <https://www.i14y.admin.ch/resources/datasets/MY_DATASET/structure/> .

# Klasse
i14y:localUnitMasterDataType
    rdf:type sh:NodeShape ;
    rdfs:label "localUnitMasterDataType"@en,
               "Lokale Einheit Stammdaten"@de ;
    sh:closed true ;
    sh:property i14y:localId, i14y:statusDate, i14y:additionalAddress .

# Einfaches Attribut
i14y:localId
    rdf:type sh:PropertyShape ;
    sh:name "localId"@en, "Lokale ID"@de ;
    sh:path i14y:localId ;
    sh:datatype xsd:string ;
    sh:pattern "^[A-B][1-9][0-9]{7}$" ;
    sh:minLength 9 ;
    sh:maxLength 9 ;
    sh:minCount 1 ;
    sh:maxCount 1 .

i14y:statusDate
    rdf:type sh:PropertyShape ;
    sh:name "statusDate"@en ;
    sh:path i14y:statusDate ;
    sh:datatype xsd:date .

# Assoziation (Verweis auf eine andere Klasse)
i14y:additionalAddress
    rdf:type sh:PropertyShape ;
    sh:name "additionalAddress"@en ;
    sh:path i14y:additionalAddress ;
    sh:node i14y:addressType .
```

Die Struktur kann u.a. mit dem Tool [SHACL Play!](https://shacl-play.sparna.fr/play/draw) als UML-Diagramm visualisiert werden.

#### Weitere Hinweise

**Sprachmarkierungen (Language Tags)**: Für sprachabhängige String-Felder wie `sh:name` oder `rdfs:label` ist pro Sprache nur ein Wert erlaubt. Das folgende Beispiel ist ungültig und wird abgelehnt:

```turtle
sh:name "Vacances"@fr,
        "Vacances administratives & congés"@fr ;
```

**Namen und Beschreibungen**: Verschiedene Vokabulare können für Bezeichnungen und Beschreibungen verwendet werden. Auf I14Y gilt folgende Empfehlung:

| Prädikat | Verwendung |
|---|---|
| `rdfs:label` | Name einer Klasse (`sh:NodeShape`) |
| `dcterms:description` | Beschreibung einer Klasse |
| `sh:name` | Name eines Attributs (`sh:PropertyShape`) |
| `sh:description` | Beschreibung eines Attributs |

Zur Maximierung der Kompatibilität werden auf I14Y sowohl `rdfs:label` als auch `sh:name` für Namen akzeptiert.