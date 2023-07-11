---
title: Glossar
slug: glossar
weight: 70
type: docs
---

{{ .TableOfContents }}
 
## Data Catalog Vocabulary (DCAT) 
Das _Data Catalog Vocabulary (DCAT)_ ist eine normierte Art und Weise, wie Datensammlungen und -dienste beschrieben werden. Durch die vereinheitlichte Terminologie soll der Datenaustausch im Internet vereinfacht werden. Zudem können so beschriebene Datensammlungen einfacher aufgefunden, ausgelesen und archiviert werden. DCAT baut auf dem _Resource Description Framework (RDF)_ auf, das von der Normierungsbehörde _World Wide Web Consortium (W3C)_ gepflegt wird.   

Der Standard beinhaltet so genannte Anwendungsprofile. Diese lassen sich an die eigenen Bedürfnisse anpassen. Das Schweizer Anwendungsprofil [DCAT-AP CH](https://www.dcat-ap.ch/) baut auf dem Profil der Europäischen Union auf, trägt aber gleichzeitig den Eigenheiten der Schweizer Datenräume Rechnung. Entwickelt wird es von der Fachgruppe "Open Gouvernement Data" des Standardisierungsgremiums [eCH](/handbook/de/7_glossar/#ech).

Das DCAT-Vokabular besteht aus Klassen und Eigenschaften. Eine __Klasse__ kann etwa eine Organisation sein, eine Person, ein Datensammlung oder eine Website. Jede Klasse hat __Eigenschaften__, die sie beschreiben -- etwa einen Titel, Stichworte zum Inhalt oder die Internet-Adresse. 

Komplexe Eigenschaften können selber Klassen sein. Ob es sich bei einem Element um eine Klasse oder um die Eigenschaft einer Klasse handelt, wird bei DCAT mit der Gross- und Kleinschreibung deutlich gemacht: Ein Klasse beginnt stets mit einem Grossbuchstaben. Die Klasse für den Herausgeber etwa lautet `dcat:Publisher`. Soll hingegen in einen Eintrag zu einer Datensammlung beschrieben werden, wer diese publiziert hat, wird die Kleinschreibung verwendet: `dcat:publisher`. So wird deutlich gemacht, dass es sich beim entsprechenden Eintrag um eine Eigenschaft handelt.

DCAT sieht vier Hauptklassen vor: Die Klasse __Katalog__ (`dcat:Catalog`) beschreibt eine Sammlung, die Datensammlungen wie auch elektronische Schnittstellen (APIs) enthalten kann. __Dataset__ (`dcat:Dataset`) hingegen beinhaltet Informationen zu einer einzelnen Datensammlung. Mit der Klasse __Data Service__ (`dcat:Dataservice`) werden elektronische Schnittstellen beschrieben, über die Daten abgerufen werden können. Eine __Distribution__ (`dcat:Distribution`) beschreibt eine spezifische Repräsentation der Datensammlung, etwa einen Export in der Form einer CSV-Datei. 

Auf der I14Y-Interoperabilitätsplattform werden auch elektronische Behördenleistungen beschrieben. Deshalb wurde DCAT um die Klasse __Public Service__ (`dcat:Publicservice`) erweitert. Für diese Einträge wird das [Core Public Service Vocabulary Application Profile](https://joinup.ec.europa.eu/collection/semic-support-centre/solution/core-public-service-vocabulary-application-profile) der Europäischen Union verwendet. 

## Datenelement
Vergleiche Kapitel [Abschnitt zum Datenelement](/handbook/de/2_rollen_prozesse/informationsmodell#datenelement) im Kapitel Rollen und Prozesse. 

## Datentyp
Der Datentyp klasifiziert ein Datenelement. Er gibt an, welche Art von Werten darin enthalten sein dürfen. Mithilfe des Datentypen wird sichergestellt, dass Daten von einem Programm korrekt verarbeitet und interpretiert werden. Beispiele für Datentypen sind: Ganzzahlen (engl. _integer_), Gleitkommazahlen (_floating point_), Boolesche Werte (_boolean_) oder Zeichenketten (_string_). Auf der I14Y-Interoperabilitätsplattform definiert das Konzept den Datentyp (vgl. Abschnitt zum [Konzept](/handbook/de/2_rollen_prozesse/informationsmodell#konzept)).

## Elektronische Schnittstelle (API)
Eine elektronische Schnittstelle ermöglicht es verschiedenen Systemen und Anwendungen miteinander zu kommunizieren. Und das selbst dann, wenn die Systeme nicht direkt miteinander verhängt sind. Über elektronische Schnittstellen können etwa Informationen aus einem Datensammlung abgefragt werden, ohne dass die gesamte Datensammlung heruntergeladen werden muss. In der Fachsprache werden elektronische Schnittstellen oft als _Application Programming Interface (API)_ bezeichnet, also als elektronische Schnittstellen für Anwendungen. Sie werden in der modernen Software-Entwicklung sehr oft eingesetzt, um einzelne Teilsysteme zu verbinden oder um Daten von einem anderen System zu beziehen. 

## Datensammlung
Eine Datensammlung ist eine Zusammenstellung von Daten, die von einer Quelle veröffentlicht oder kuratiert wird und durch eine übergreifende Idee verbunden sind. Im Gegensatz zu einer elektronische Schnittstelle wird von einer Datensammlung erwartet, dass sie [→ Distributionen](#distribution) hat, also in einem oder mehreren Formaten zur Verfügung steht. Viele [→ elektronischen Schnittstellen](#elektronische-schnittstelle-api) greifen auf Datensammlungen zurück. Weitere Details zur Struktur einer Datensammlung auf der I14Y-Interoperabilitätsplattform sind in der Beschreibung des [Informationsmodell](/handbook/de/2_rollen_prozesse/informationsmodell#datensammlung) zu finden. 

## Distribution 
Eine Distribution ist ein Auszug aus einer [→ Datensammlung](#datensammlung). Diese Exporte können in unterschiedlichen Formaten vorliegen. Oftmals werden Auszüge etwa sowohl als CSV- als auch als JSON-Datei zur Verfügung gestellt. Eine Distribution muss nicht die gesamte Datensammlung enthalten. Die einzelnen Exporte können sich etwa in Bezug auf die räumliche oder zeitliche Auflösung unterscheiden. So kann etwa eine Datei mit den kantonalen Werten angeboten werden -- und zusätzlich eine mit den kommunalen. Oder ein Export bildet das laufende Jahr ab, während der andere auch die Werte der vorhergeheneden Jahre beinhaltet.  

## eCH 
Der gemeinnützige Verein eCH fördert, entwickelt und verabschiedet Standards im Bereich E-Government. In den zahlreichen Arbeitsgruppen von eCH arbeiten sowohl Vertreterinnen und Vertreter des Bundes und der Kantone als auch der der Privatwirtschaft und der Wissenschaft mit. eCH ist das wichtigste Normierungsgremium im Bereich eGovernment in der Schweiz. Weitere Informationen wie auch die Dokumente zu den verabschiedeten Standards sind auf der Website [ech.ch](https://ech.ch) zu finden. 

## Enterprise Identity Managment (EIAM) 
Systeme zum _Enterprise Identity Management (EIAM)_ werden verwendet, um Identitäten und Zugriffsrechte innerhalb eines Unternehmens oder einer Organisation zu verwalten und zu schützen. Sie stellen also sicher, dass einzig die vorgesehenen Personen eine bestimmte Internet-Plattform oder Anwendung nutzen können. Dabei regeln sie auch, wer Lese-, Schreib- und wer Administrationsrechte hat. Die I14Y-Interoperabilitätsplattform nutzt das EIAM-System der Bundesverwaltung. Weitere Informationen sind unter [Kontenverwaltung](/handbook/de/2_rollen_prozesse/kontenverwaltung) zusammengestellt.

## Geocat 
[Geocat](https://geocat.ch) ist ein Katalog für Metadaten für Geoinformationen in der Schweiz und im Fürstentum Liechtenstein. Darin erfassen Bundesämter, Kantone, Gemeinden, Forschungsinstutute und Unternehmen Informationen zu ihren Geodaten, also von Datensätzen mit starkem geografischem Bezug, von Karten wie auch Luftbildern. Betrieben wird der Dienst vom Bundesamt für Landestopografie swisstopo. Weitere Informationen sind im Abschnitt zu den [verschiedenen Plattformen](/handbook/de/2_rollen_prozesse/plattformen) zu finden.  

## Internationale Organisation für Normung (ISO)
Die Internationale Organisation für Normung (ISO) ist eine Vereinigung von Normierungsorganisationen. Sie erarbeitet internationale Normen in zahlreichen Bereichen -- mit Ausnahme der Elektrotechnik und der Kommunikationstechnologie. Bei der ISO handelt es sich um einen Verein nach schweizerischem Recht. Der Sitz ist in Genf. Nationale Standardisierungsvorhaben im Bereich eGovernment treibt meistens der [→ Verein eCH](#ech) voran.

## Interoperabilität
Interoperabilität ist die Fähigkeit unabhängiger, heterogener Systeme, möglichst nahtlos zusammenzuarbeiten, um Informationen auf effiziente Art und Weise auszutauschen, ohne dass dazu im Einzelfall gesonderte Absprachen nötig sind.

## Interoperabilitätsstelle (IOS)
Die Interoperabilitätsstelle (IOS) des Bundesamts für Statistik stellt die Instrumente zur Harmonisierung, Standardisierung und Mehrfachverwendung von Daten bereit. Als technisches Werkzeug dazu entwickelt und betreut sie die I14Y-Interoperabilitätsplattform. Die Interoperabilitätsstelle koordiniert die Standardisierung und Harmonisierung von Daten innerhalb der einzelnen Themenbereiche (z.B. Energie, Gesundheit, Mobilität, Landwirtschaft). Das BFS nimmt dabei die Aufgaben des _Swiss Data Stewards_ wahr. 

## Linked Data 
Linked Data sind Daten, die dank eines Identifikators (_Uniform Resource Identifier_) direkt miteinander verknüpft werden können. Sofern die Daten frei verfügbar sind, wird auch von _Linked Open Data_ gesprochen. Die Daten können verteilt sein. Sie lassen sich über normale Web-Transferprotokoll abrufen. Dank dem standardisierten Aufbau lassen sie wie eine einzige grosse Datenbank benutzen. Dazu wird die Abfragesprache _Sparql_ eingesetzt. Linked Open Data ist ein von Tim Berners-Lee, dem Erfinder des World Wide Webs, entwickeltes Konzept. Das Ziel ist der Aufbau eines semantischen Webs, bei dem dank strukturierten und verknüpfbaren Datenangeboten die maschinelle Kommunikation vereinfacht wird. Die Plattform Lindas ist die wichtigste Anbieterin von Linked Data im Bereich der öffentlichen Verwaltung in der Schweiz. Weitere Informationen sind im [Abschnitt zu Lindas](/handbook/de/2_rollen_prozesse/plattformen) zu finden.

## Metadaten
Metadaten beschreiben die Daten. Sie beinhalten etwa Informationen zur Semantik (zur Bedeutung, zum Inhalt und zur Qualität) einer Datensammlung. Zudem beschreiben sie die Syntax (also die Form und die Struktur) der verwendeten Attribute (Variablen). Zur Sicherstellung einer standardisierten und qualitätsgesicherten Datenerfassung und -verwendung werden oftmals Nomenklaturen und Register verwendet, etwa das Gemeindeverzeichnis, die Nomenklatur der Berufe (ISCO) oder der Wirtschaftszweige (NOGA). Auf der I14Y-Interoperabilitätsplattform können solche Metadaten verwaltet und publiziert werden.  

## Nationale Datenbewirtschaftung (NaDB)
Das Programm Nationale Datenbewirtschaftung hat es zum Ziel, die Datenbewirtschaftung der öffentlichen Hand durch die Mehrfachnutzung von Daten einfacher und effizienter zu gestalten. Es wurde vom Bundesrat initiiert und im Oktober 2019 gestartet. Beteiligt am Programm NaDB sind alle Departemente des Bundes, die Bundeskanzlei, alle Bereiche des Statistiksystems Schweiz, Vertreter von Kantonen, die Sozialpartner sowie private Organisationen und Verbände. Die Verantwortung für die Umsetzung des Programms NaDB liegt beim Bundesamt für Statistik. Technisches Kernstück ist die I14Y-Interoperabilitätsplattform. Weitere Informationen sind auf der [Website des Projekts](https://www.bfs.admin.ch/bfs/de/home/nadb/nadb.html) zu finden. 

## Nomenklatur
Eine Nomenklatur ist eine für bestimmte Bereiche verbindliche Sammlung von Benennungen aus einem bestimmten Themen- oder Anwendungsgebiet. Beispiele für Nomenklaturen sind ein Gemeindeverzeichnis oder ein Länderverzeichnis. Eine Nomenklatur erhält Codes und beschreibende Textteile, allenfalls in verschiedenen Sprachen.

## Once-Only-Prinzip 
Ziel des _Once-Only_-Prinzips ist es, dass Bürgerinnen und Bürger sowie Unternehmen ihre Daten nur noch einmal der öffentlichen Verwaltung zur Verfügung stellen müssen. Die einzelnen Amtsstellen der unterschiedlichen Ebenen tauschen dann die Informationen selbstständig aus -- sofern dies explizit so vorgesehen und sinnvoll ist. Das _Once-Only_-Prinzip soll den Aufwand reduzieren, bei den Bürgerinnen und Bürgern, den Unternehmen wie auch innerhalb der Verwaltung. Die Umsetzung des _Once-Only-Prinzips ist ein zentrales Ziel des Programms für eine nationale Datenbewirtschaftung (siehe [Einleitung](/handbook/de/)).

## SDMX 
Der _Statistical Data and Metadata EXchange (SDMX)_ ist eine Initiative zur Standardisierung des Datenaustauschs zwischen internationalen Organisationen und ihren Mitgliedsländern. Massgeblich entwickelt wurde er von der Weltbank und der Europäischen Union. _SDMX_ definiert sowohl einheitliche Datenformate als auch Metadatenstandards und Methoden zur Datenübertragung. Weitere Informationen: [sdmx.org](https://sdmx.org). Auf der I14Y-Interoperabilitätsplattform können etwa Codelisten im SDMX-Format eingelesen werden (siehe [Erfassen von Konzepten](/handbook/de/4_publikation/2_konzepte/)). 

## Stammdaten
Die Stammdaten sind grundlegende Informationen, die von der öffentlichen Verwaltung zwingend benötigt werden. Sie können Personen, Unternehmen, aber auch diverse Objekte wie etwa Gebäude oder Fahrzeuge beschreiben. Für jedes dieser Objekte muss ein abschliessender Katalog dieser Merkmale (Attribute) verfügbar sein. Die Stammdaten sind die zustandsorientierten Daten. Stammdaten bleiben im Zeitverlauf volumenmässig relativ konstant. Und sie ändern sich eher selten. Eine Sonderform von Stammdaten sind die so genannten Referenzdaten wie etwa Codes für Flughäfen oder Länder. Diese dienen der Klassifizierung von Stammdaten.

## Swagger
[Swagger](https://swagger.io/) ist eine Kollektion frei verfügbarer Hilfsmittel zur Publikation und Nutzung von elektronischen Schnittstellen (APIs). Auf der I14Y-Interoperabilitätsplattform wird insbesondere die Dokumentationsmöglichkeiten genutzt: Dank der Swagger-Weboberfläche ist rasch ersichtlich, welche Möglichkeiten die I14Y-API bietet. Zudem können die Abfragemöglichkeiten bei sämtlichen Endpunkten direkt ausprobiert werden. Weitere Informationen sind unter [Metadaten abrufen](/handbook/de/3_metadaten_abrufen/api) zu finden.

## Verwaltungsdaten 
Verwaltungsdaten sind Daten, die im Rahmen eines gesetzlichen Auftrags erhoben, erstellt, verwaltet, verarbeitet und gespeichert werden. Bei diesen kann es sich um strukturierte und unstrukturierte Daten handeln. Auf der I14Y-Interoperabilitätsplattform können die einzelnen Verwaltungsstellen Inventare ihrer Daten erstellen. Öffentlich publiziert lassen sich die harmonisierten oder standardisierten Datenangebote. 

## Validierung
Die Validierung ist ein Prozess, bei dem geprüft wird, ob ein Inhalt in ein System aufgenommen werden soll. Im Fall einer Datensammlung werden etwa das Datenformat kontrolliert, die Datenintegrität und die Wertebereiche und Nomenklaturen. Insbesondere wird geprüfgt, ob die Daten im Einklang sind mit den Metadaten und den Spezifikationen. Die Validierung basiert auf vordefinierten Validierungsregeln.
