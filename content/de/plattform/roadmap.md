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
    
        Q4 2025 (12.09.2025 - 12.2025)
        : Die Plattform wird in die öffentliche Cloud migriert. 1️⃣
        : Komplexe Strukturen von Datensätzen lassen sich über die Weboberfläche editieren.1️⃣
        : URIs/Permalinks werden für alle Objekte eingeführt.1️⃣
        : Wiederverwendung von Konzepten 1️⃣
        : Zusätzliche Arbeiten an den Strukturen – Anpassung an die EMBAG-Vorgaben 1️⃣
        : ⭐ Einführen von Mapping-Tabellen zur Dokumentation von Unterschieden zwischen Konzepten.1️⃣
        : Einführung von Log-Möglichkeiten (Audit Trail) 2️⃣
        : ⭐ Ein Toolbox mit weiteren Import- und Exportmöglichkeiten wird zur Verfügung gestellt Phase II. 2️⃣
        : Verbesserung der Benutzeroberfläche gemass Feedback der Nutzer 3️⃣ 

    section 2026
        Q1-Q4 2026 (05.12.2025 - 31.12.2026 / tbd)
        : Harmonisierungstools - EMBAG-Vorgaben 1️⃣
        : Co-Entwicklung regeln 1️⃣
        : Freigabe des Programmcodes (Open Source). 1️⃣
        : Abschluss der Projektphase. 1️⃣
        : Handbuch, Anleitung. Etc 1️⃣
        : Änderungen an Objekten werden aufgezeichnet (Audit Trail) 2️⃣
        : ⭐ Notifikationen bei Änderungen an Metadaten können abonniert werden. 2️⃣
        : DCAT Quality Dashboard 2️⃣
        : Anpassung an DCAT AP v3 2️⃣
        : Zusätzliche Dashboard-Auswertungen 3️⃣       
        : Automatisches Onboarding der Bundesverwaltung. 3️⃣
        : Verbesserung des Benutzer-Dashboards 3️⃣ 
        : Vorschau auf die Daten wird eingebaut. 3️⃣
        : Erweiterung der Verbindungsmöglichkeiten zu Tools.3️⃣
        : ⭐ Möglichkeit zur Dokumentation von Datenflüssen (Data Lineage) wird geschaffen 3️⃣ 

{{< /mermaid >}}

*⭐ Mit einem Stern gekennzeichnete Einträge sind Vorschläge des Projekts DVS BS+.*

*1️⃣2️⃣3️⃣ Die Zahlen stehen für die Priorität der Features im Entwicklungsplan.*

### Open Source
Der Programmcode der Interoperabilitätsplattform I14Y soll unter einer [freien Lizenz](https://www.gnu.org/licenses) Lizenz veröffentlichst werden. Die Interoperabilitätsstelle publiziert den Quellcode bis spätestens Ende der Projektphase, also bis Ende des Jahres 2026. Dies geschieht im Einklang mit dem zukünftigen Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)). Laut Artikel 9 sollen die Bundesbehörden ihre Quellcodes -- sofern möglich -- frei zur Verfügung stellen. 

{{<card header="Gesetzesgrundlage" title="__Art. 9 Open Source Software__" footer="Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)">}}

Die diesem Gesetz unterstehenden Bundesbehörden legen, wenn es möglich und sinnvoll ist und die Rechte Dritter gewahrt werden, den Quellcode von Software offen, die sie zur Erfüllung ihrer Aufgaben entwickeln oder entwickeln lassen. Sie erlauben jeder Person, die Software zu nutzen, weiterzuentwickeln und weiterzugeben, und erheben keine Lizenzgebühren.

{{</card>}}

I14Y publiziert Quellcodes und Skripte unter dem Namen i14y-ch auf der [Plattform Github](https://github.com/i14y-ch). Bereits verfügbar ist dieses Handbuch sowie Prototypen, die an den GovTech-Hackathon 2023 und 2024 entwickelt wurden. Auf der Plattform sollen auch Beispielskripte zum Datenbezug veröffentlicht werden.
