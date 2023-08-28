---
title: Glossar
slug: glossar
weight: 70
type: docs
---

{{<table_of_contents>}}
 
## Data Catalog Vocabulary (DCAT) 
Das _Data Catalog Vocabulary (DCAT)_ ist eine normierte Art und Weise, wie Datensammlungen und -dienste beschrieben werden. Durch die vereinheitlichte Terminologie soll der Datenaustausch im Internet vereinfacht werden. Zudem können so beschriebene Datensammlungen einfacher aufgefunden, ausgelesen und archiviert werden. Das Metadatenmodell kann verwendet werden, um Datenkataloge wie auch die darin enthaltenen Datensammlungen sowie deren Bereitstellungsformen zu beschreiben. DCAT baut auf dem _Resource Description Framework (RDF)_ auf, das vom Normierungsgremium _World Wide Web Consortium (W3C)_ gepflegt wird. Weitere Informationen sind bei [W3.org](http://www.w3.org/TR/vocab-dcat) zu finden.   

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

## FAIR-Prinzipien
Die FAIR-Prinzipen postulieren, dass Daten einfach auffindbar _(**F**indable)_, zugänglich _(**A**ccessible)_, interoperabel _(**I**nteroperable)_ und mehrfachverwendbar _(**R**eusable)_ sein sollen. Die Daten sollen sowohl von Menschen als auch von Computersystemen einfach auffindbar sein. Sie sollen über ein offenes, freies und universell implementierbares Standard-Kommunikationsprotokoll zugänglich sein. Dank einer eindeutigen Lizenz ist ersichtlich, wie die Daten genutzt werden dürfen. Die Interoperabilität ist sowohl semantisch als auch syntaktisch gewährleistet. Sie setzt die Verwendung präziser kontextbezogener Metadaten voraus, hält sich in Bezug auf Inhalt und Format an die grossen internationalen Standards und verwendet möglichst standardisierte Vokabulare. Die freie, bedingte oder kostenpflichtige Mehrfachverwendung der Daten wird durch gemeinsame Standards vereinfacht. Grundlegende Informationen zu den FAIR-Prinzipien sind in diesem [Nature-Artikel](https://www.nature.com/articles/sdata201618) zu finden. 

## Geodaten
Geodaten sind raumbezogene Daten. Sie beschreiben die Ausdehnung und Eigenschaften bestimmter Räume und Objekte: etwa die Lage, die Beschaffenheit, die Nutzung und die Rechtsverhältnisse. Beispiele für Geodaten, die breit genutzt werden, sind die digitalen Strassenkarten und Routenplaner.

## Geobasisdaten
Geobasisdaten sind Geodaten, die auf einem Recht setzenden Erlass des Bundes, eines Kantons oder einer Gemeinde beruhen:
z.B. die Amtliche Vermessung, der Bauzonenplan oder das Hochmoor-Inventar.

## Geocat 
[Geocat](https://geocat.ch) ist ein Katalog für Metadaten für Geoinformationen in der Schweiz und im Fürstentum Liechtenstein. Darin erfassen Bundesämter, Kantone, Gemeinden, Forschungsinstutute und Unternehmen Informationen zu ihren Geodaten, also von Datensätzen mit starkem geografischem Bezug, von Karten wie auch Luftbildern. Betrieben wird der Dienst vom Bundesamt für Landestopografie swisstopo. Weitere Informationen sind im Abschnitt zu den [verschiedenen Plattformen](/handbook/de/2_rollen_prozesse/plattformen) zu finden.  

## Internationale Organisation für Normung (ISO)
Die Internationale Organisation für Normung (ISO) ist eine Vereinigung von Normierungsorganisationen. Sie erarbeitet internationale Normen in zahlreichen Bereichen -- mit Ausnahme der Elektrotechnik und der Kommunikationstechnologie. Bei der ISO handelt es sich um einen Verein nach schweizerischem Recht. Der Sitz ist in Genf. Nationale Standardisierungsvorhaben im Bereich eGovernment treibt meistens der [→ Verein eCH](#ech) voran.

## Interoperabilität
Interoperabilität ist die Fähigkeit unabhängiger, heterogener Systeme, möglichst nahtlos zusammenzuarbeiten. Sie sollen Informationen auf effiziente Art und Weise auszutauschen, ohne dass dazu im Einzelfall gesonderte Absprachen nötig sind. Das [European Interoperability Framework (EIF)](https://joinup.ec.europa.eu/collection/nifo-national-interoperability-framework-observatory/3-interoperability-layers) unterscheidet vier Ebenen: Die _rechtliche Interoperabilität_ stellt sicher, dass eine ausreichende gesetzliche Grundlage für die Zusammenarbeit besteht. Die _organisatorische Interoperabilität_ beschreibt, wie die Geschäftsprozesse aufeinander abgestimmt sind. Mit der _semantischen Interoperabilität_ wird angestrebt, dass beim Austausch von Informationen die Form der Daten möglichst nicht manuell verändert werden muss. Die _technische Interoperabilität_ beschreibt alle technischen Aspekte des Informationsaustausches, beinhaltet also etwa Schnittstellenspezifikationen und Übermittlungsprotokolle.

## Interoperabilitätsstelle (IOS)
Die Interoperabilitätsstelle (IOS) des Bundesamts für Statistik stellt die Instrumente zur Harmonisierung, Standardisierung und Mehrfachverwendung von Daten bereit. Als technisches Werkzeug dazu entwickelt und betreut sie die I14Y-Interoperabilitätsplattform. Die Interoperabilitätsstelle koordiniert die Standardisierung und Harmonisierung von Daten innerhalb der einzelnen Themenbereiche (z.B. Energie, Gesundheit, Mobilität, Landwirtschaft). Das BFS nimmt dabei die Aufgaben des _Swiss Data Stewards_ wahr. 

## Linked Data 
Linked Data sind Daten, die dank eines Identifikators (_Uniform Resource Identifier_) direkt miteinander verknüpft werden können. Sofern die Daten frei verfügbar sind, wird auch von _Linked Open Data_ gesprochen. Die Daten können verteilt sein. Sie lassen sich über normale Web-Transferprotokoll abrufen. Dank dem standardisierten Aufbau lassen sie wie eine einzige grosse Datenbank benutzen. Dazu wird die Abfragesprache _Sparql_ eingesetzt. Linked Open Data ist ein von Tim Berners-Lee, dem Erfinder des World Wide Webs, entwickeltes Konzept. Das Ziel ist der Aufbau eines semantischen Webs, bei dem dank strukturierten und verknüpfbaren Datenangeboten die maschinelle Kommunikation vereinfacht wird. Die Plattform Lindas ist die wichtigste Anbieterin von Linked Data im Bereich der öffentlichen Verwaltung in der Schweiz. Weitere Informationen sind im [Abschnitt zu Lindas](/handbook/de/2_rollen_prozesse/plattformen) zu finden.

## Metadaten
Metadaten sind Daten, die andere Daten definieren und beschreiben. Sie beinhalten Informationen zur Semantik einer Datensammlung -- also zur Bedeutung, zum Inhalt und zur Qualität. Zudem beschreiben sie die Syntax (die Form und die Struktur) der verwendeten Attribute (Variablen). Um sicherzustellen, dass die Daten einheitlich erfasst werden, können [→ Nomenklaturen](#nomenklatur) hinterlegt und Register angebunden werden, etwa das Gemeindeverzeichnis, die Nomenklatur der Berufe (ISCO) oder der Wirtschaftszweige (NOGA). Damit werden diese Daten zu Metadaten. Auf der I14Y-Interoperabilitätsplattform lassen sich solche Metadaten verwalten, publizieren und austauschen.  

## Nationale Datenbewirtschaftung (NaDB)
Das Programm Nationale Datenbewirtschaftung hat es zum Ziel, die Datenbewirtschaftung der öffentlichen Hand durch die Mehrfachnutzung von Daten einfacher und effizienter zu gestalten. Es wurde vom Bundesrat initiiert und im Oktober 2019 gestartet. Beteiligt am Programm sind alle Departemente des Bundes, die Bundeskanzlei, alle Bereiche des Statistiksystems Schweiz, Vertreter von Kantonen, die Sozialpartner sowie private Organisationen und Verbände. Die Verantwortung für die Umsetzung des Programms liegt beim Bundesamt für Statistik. Technisches Kernstück ist die I14Y-Interoperabilitätsplattform. Weitere Informationen sind auf der [Website des Programms](https://www.bfs.admin.ch/bfs/de/home/nadb/nadb.html) zu finden. 

## Nomenklatur
Eine Nomenklatur ist eine für bestimmte Bereiche verbindliche Sammlung von Benennungen aus einem bestimmten Themen- oder Anwendungsgebiet. Beispiele für Nomenklaturen sind ein Gemeindeverzeichnis oder ein Länderverzeichnis. Eine Nomenklatur erhält Codes und beschreibende Textteile, allenfalls in verschiedenen Sprachen.

## Once-Only-Prinzip 
Ziel des _Once-Only_-Prinzips ist es, dass Bürgerinnen und Bürger sowie Unternehmen ihre Daten nur einmal der öffentlichen Verwaltung zur Verfügung stellen müssen. Die einzelnen Amtsstellen der unterschiedlichen Ebenen tauschen dann die Informationen selbstständig aus -- sofern dies explizit so vorgesehen und sinnvoll ist. Das _Once-Only_-Prinzip soll den Aufwand reduzieren -- bei den Bürgerinnen und Bürgern, den Unternehmen wie auch innerhalb der Verwaltung. Die Umsetzung des _Once-Only-Prinzips_ ist ein zentrales Ziel des Programms Nationale Datenbewirtschaftung (NaDB).

## SDMX 
Der _Statistical Data and Metadata EXchange (SDMX)_ ist eine Initiative zur Standardisierung des Datenaustauschs zwischen internationalen Organisationen und ihren Mitgliedsländern. Massgeblich entwickelt wurde er von der Weltbank und der Europäischen Union. _SDMX_ definiert sowohl einheitliche Datenformate als auch Metadatenstandards und Methoden zur Datenübertragung. Weitere Informationen: [sdmx.org](https://sdmx.org). Auf der I14Y-Interoperabilitätsplattform können  Codelisten im SDMX-Format eingelesen werden (siehe [Erfassen von Konzepten](/handbook/de/4_publikation/2_konzepte/)). 

## Stammdaten
Die Stammdaten sind grundlegende Informationen, die von der öffentlichen Verwaltung zwingend benötigt werden. Sie können Personen, Unternehmen, aber auch diverse Objekte wie etwa Gebäude oder Fahrzeuge beschreiben. Für jedes dieser Objekte muss ein abschliessender Katalog der Merkmale (Attribute) verfügbar sein. Die Stammdaten sind zustandsorientierte Daten. Sie bleiben im Zeitverlauf volumenmässig relativ konstant. Und sie ändern sich eher selten. Eine Sonderform von Stammdaten sind die so genannten Referenzdaten wie etwa die Codes für Flughäfen oder Länder. Diese dienen der Klassifizierung von Stammdaten.

## Swagger
[Swagger](https://swagger.io/) ist eine Kollektion frei verfügbarer Hilfsmittel zur Publikation und Nutzung von elektronischen Schnittstellen (APIs). Auf der I14Y-Interoperabilitätsplattform werden insbesondere die Dokumentationsmöglichkeiten genutzt: Dank der Swagger-Weboberfläche ist rasch ersichtlich, was mit der betreffenden API möglich ist. Zudem können die Abfragemöglichkeiten bei sämtlichen Endpunkten direkt ausprobiert werden. Weitere Informationen sind unter [Metadaten abrufen](/handbook/de/3_metadaten_abrufen/api) zu finden.

## Verwaltungsdaten 
Verwaltungsdaten sind Daten, die im Rahmen eines gesetzlichen Auftrags erhoben, erstellt, verwaltet, verarbeitet und gespeichert werden. Bei diesen kann es sich um strukturierte und unstrukturierte Daten handeln. Auf der I14Y-Interoperabilitätsplattform können die einzelnen Verwaltungsstellen Inventare ihrer Daten erstellen. Öffentlich publizieren lassen sich die harmonisierten oder standardisierten Datenangebote. 

## Validierung
Die Validierung ist ein Prozess. Darin wird geprüft, ob ein bestimmter Inhalt in ein System oder ein Verzeichnis aufgenommen werden soll. Im Fall einer Datensammlung werden auf der I14Y-Interoperabilitätsplattform vor der öffentlichen Publikation etwa das Datenformat kontrolliert, die Datenintegrität sowie die Wertebereiche und Nomenklaturen. Die Validierung erfolgt durch die _Local Data Stewards_ oder die Interoperabilitätsstelle.
