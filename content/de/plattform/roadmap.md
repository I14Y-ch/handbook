---
title: Roadmap
slug: roadmap
translationKey: roadmap
weight: 30
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, Systemarchitektur, Technik, Datenbank, Entwicklung, Roadmap, Agile Release Train (ART)]
---

Die I14Y wird im Auftrag des Bundes von der Interoperabilitätsstelle in Zusammenarbeit mit dem Bundesamt für Informatik entwickelt. Die Projektphase läuft bis Ende 2026. Anschliessend übernimmt das Bundesamt für Statistik den Betrieb der I14Y als Daueraufgabe. 

Während der Projektphase wird der Funktionsumfang der I14Y laufend erweitert. Wünsche für neue Funktionen können bei der Interoperabilitätsstelle eingereicht werden. Diese erarbeitet dann die Detail-Spezifikation. Sie priorisiert die Entwicklungswünsche in Zusammenarbeit mit dem Steuerungsausschuss sowie dem Ausschuss Nationale Datenbewirtschaftung (NaDB). Und sie koordiniert die Entwicklungs- und Implementierungsarbeiten. 

{{<alert title="Ihre Anregungen sind willkommen" color="success">}}
Sollten Sie eine Verbesserungsmöglichkeit oder einen Fehler auf der Interoperabilitätsplattform I14Y entdecken, ist die Interoperabilitätsstelle dankbar um einen Hinweis. Vorschläge für neue Funktionen können Sie entweder im [Repository Feature Requests](https://github.com/I14Y-ch/feature-requests/issues) auf Github einreichen. Oder Sie kontaktieren das I14Y-Team per [E-Mail](mailto:i14y@bfs.admin.ch). Bitte beschreiben Sie in beiden Fällen die gewünschte Funktion möglichst genau. Auf Github lassen sich die Vorschläge für gewünschte Funktionen auch kommentieren.   

{{</alert>}}

Die I14Y wird in einem so genannten Agile Release Train (ART) entwickelt. Die Funktionen werden laufend spezifiziert, entwickelt und implementiert. Welche Funktionen für welchem Abschnitt der Entwicklung vorgesehen sind, ist in der untenstehenden Roadmap dokumentiert; für Detailangaben zu einzelnen Funktionalitäten kontaktieren Sie die Interoperabilitätsstelle. Die Schwerpunkte können sich ändern -- etwa wenn andere Anforderungen hoch priorisiert werden. Die Roadmap wird jeweils vor dem Beginn einer neuen Entwicklungsperiode (*Program Increment*, kurz PI) aktualisiert. Die nächsten Abschnitte werden detailliert beschrieben, für spätere Phasen werden allgemeinere Ziele angegeben.  

{{< mermaid width="650px" >}}
timeline
    title Roadmap Interoperabilitätsplattform I14Y
    
    section 2025
        PI 25 (27.03.2025 - 04.06.2025)
        : Migration aller Daten in eine zentrale Datenbank. Dadurch wird die globale Suche beschleunigt.
        : Ein Inhaltsverzeichnis zur Navigation auf Detailseiten wird eingeführt.
        : Bestehende Konzepte können über die API aktualisiert werden.
        : Ein neuer Endpunkt erlaubt es gefilterte Listen von Konzepten abzurufen.
        : Auf Übersichtsseiten wird angezeigt, wie offen die Daten zugänglich sind. 
        : Komplexe Strukturen von Datensätzen können in den Formaten RDF/TTL hochgeladen und dargestellt werden. 
        : Datensätze können über die Weboberfläche heruntergeladen und hochgeladen werden.
        : Die Metadaten der Organisationen werden mit zusätzlichen Informationen angereichert und dargestellt.
        : Eine Suche in den Einträgen der Codelisten wird eingeführt.
        : Die Suche wird verbessert.
        
        PI 26 - 27 (05.06.2025 - 09.12.2025)
        : Die Plattform wird in die öffentliche Cloud migriert.
        : Komplexe Strukturen von Datensätzen lassen sich über die Weboberfläche erfassen und editieren.
        : URIs/Permalinks werden für alle Objekte eingeführt.
        : Neue Endpunkte zu Dataservices und Public services auf der Partner-API werden eingeführt.
        : ⭐ Einführung von Log-Möglichkeiten (Audit Trail)
        : ⭐ Änderungen an Objekten werden aufgezeichnet (Audit Trail)
        : Einführen von Mapping-Tabellen zur Dokumentation von Unterschieden zwischen Konzepten.
        : ⭐ Notifikationen bei Änderungen an Metadaten können abonniert werden.
        : Ein Toolbox mit weiteren Import- und Exportmöglichkeiten wird zur Verfügung gestellt.
        : ⭐ Zusätzliche Dashboard-Auswertungen
  
    section 2026
        PIs 29 - 31 (10.12.2025 - 31.12.2026)
        : Vorschau auf die Daten wird eingebaut.
        : Automatisches Onboarding der Bundesverwaltung.
        : ⭐ Möglichkeit zur Dokumentation von Datenflüssen (Data Lineage) wird geschaffen
        : Erweiterung der Verbindungsmöglichkeiten zu Tools.
        : Freigabe des Programmcodes (Open Source).
        : Abschluss der Projektphase.
{{< /mermaid >}}

*⭐ Mit einem Stern gekennzeichnete Einträge sind Vorschläge des Projekts DVS BS+.*


### Open Source
Der Programmcode der Interoperabilitätsplattform I14Y soll unter einer [freien Lizenz](https://www.gnu.org/licenses) Lizenz veröffentlichst werden. Die Interoperabilitätsstelle publiziert den Quellcode bis spätestens Ende der Projektphase, also bis Ende des Jahres 2026. Dies geschieht im Einklang mit dem zukünftigen Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)). Laut Artikel 9 sollen die Bundesbehörden ihre Quellcodes -- sofern möglich -- frei zur Verfügung stellen. 

{{<card header="Gesetzesgrundlage" title="__Art. 9 Open Source Software__" footer="Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)">}}

Die diesem Gesetz unterstehenden Bundesbehörden legen, wenn es möglich und sinnvoll ist und die Rechte Dritter gewahrt werden, den Quellcode von Software offen, die sie zur Erfüllung ihrer Aufgaben entwickeln oder entwickeln lassen. Sie erlauben jeder Person, die Software zu nutzen, weiterzuentwickeln und weiterzugeben, und erheben keine Lizenzgebühren.

{{</card>}}

I14Y publiziert Quellcodes und Skripte unter dem Namen i14y-ch auf der [Plattform Github](https://github.com/i14y-ch). Bereits verfügbar ist dieses Handbuch sowie Prototypen, die an den GovTech-Hackathon 2023 und 2024 entwickelt wurden. Auf der Plattform sollen auch Beispielskripte zum Datenbezug veröffentlicht werden.
