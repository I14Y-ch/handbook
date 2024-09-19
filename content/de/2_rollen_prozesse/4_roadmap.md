---
title: Roadmap
slug: roadmap
weight: 40
type: docs
keywords: [I14Y, I14Y-Interoperabilitätsplattform, Systemarchitektur, Technik, Datenbank, Entwicklung, Roadmap, Agile Release Train (ART)]
draft: false
---

Die I14Y wird im Auftrag des Bundes von der Interoperabilitätsstelle in Zusammenarbeit mit dem Bundesamt für Informatik entwickelt. Die Projektphase läuft bis Ende 2026. Anschliessend übernimmt das Bundesamt für Statistik den Betrieb der I14Y als Daueraufgabe. 

Während der Projektphase, also bis Ende 2026, wird der Funktionsumfang der I14Y laufend erweitert. Wünsche für neue Funktionen können bei der Interoperabilitätsstelle eingereicht werden. Die Interoperabilitätsstelle erarbeitet die Detail-Spezifikation. Sie priorisiert sie in Zusammenarbeit mit dem Steuerungsausschuss sowie dem Ausschuss Nationale Datenbewirtschaftung (NaDB). Und sie koordiniert die Entwicklungs- und Implementierungsarbeiten. 

{{<alert title="Ihre Anregungen sind willkommen" color="success">}}
Sollten Sie eine Verbesserungsmöglichkeit oder einen Fehler auf der I14Y-Interoperabilitätsplattform entdecken, ist die Interoperabilitätsstelle dankbar um einen Hinweis. Sie erreichen das Team per [E-Mail](mailto:i14y@bfs.admin.ch). Bitte beschreiben Sie die gewünschte Funktion möglichst genau. In einer späteren Phase werden weitere Kanäle für Rückmeldungen angeboten. 

{{</alert>}}

Die I14Y wird in einem so genannten Agile Release Train (ART) entwickelt. Entsprechend werden die Funktionen laufend spezifiziert, entwickelt und implementiert. Welche Funktionen für welchem Abschnitt der Entwicklung vorgesehen sind, ist in der untenstehenden Roadmap dokumentiert; für Detailangaben zu einzelnen Funktionalitäten kontaktieren Sie die Interoperabilitätsstelle. Die Schwerpunkte können sich ändern -- etwa wenn andere Anforderungen hoch priorisiert werden. Die Roadmap wird jeweils vor dem Beginn einer neuen Entwicklungsperiode (*Program Increment*, kurz PI) aktualisiert. 

```mermaid
timeline
    section 2024
        PI 22<br>29.08. – 06.11.2024
            : Eine globale Suche für Katalog-Inhalte und Datenkonzepte wird geschaffen. Neu lassen sich auch die Einträge von Codelisten durchsuchen. 
            : Codelisten können optional offen gelassen werden. Damit wird es möglich publizierten Codelisten neue Einträge anzufügen, ohne dass eine neue Version erstellt werden muss.
            : Grafische Verbesserungen durch die Migration auf die Version 11 des Designsystems Oblique. Links zu Github und LinkedIn werden ergänzt. 
            : Codelisten sollen sich auch als Excel-Datei exportieren lassen.
            : Auf dem API-Gateway für I14Y-Partner werden zusätzliche Endpunkte fürs Erfassen und Beziehen von Beschreibungen von Datensammlungen zur Verfügung gestellt.
        PI 23<br>07.11. – 15.01.2025
            : Die Änderungen an Beschreibungen von Datensammlungen und -konzepten werden aufgezeichnet (Audit Trail).
            : Optimierungen Backend im Bereich Konzepte und Prozesse
            : Filtermöglichkeiten für Codelisten werden ausgebaut.
            : Im I14Y-Dashboard werden zusätzliche Auswertungsmöglichkeiten geschaffen.
            : Auf dem API-Gateway für I14Y-Partner werden zusätzliche Endpunkte zur Verfügung gestellt.
    section 2025
        PIs 24 – 28
            : Automatisches Onboarding für Mitarbeitende der Bundesverwaltung wird ermöglicht.
            : Die Unterschiede zwischen Datensammlungen lassen sich mittels Mapping-Tabellen dokumentieren. 
            : Eine Funktion zum Abonnieren von Datensammlungen und -konzepten wird geschaffen.
            : Die Möglichkeiten zum Reporting werden verbessert.
            : Zusätzliche Möglichkeiten zur Dokumentation des Datenflusses werden geschaffen (Data Lineage).
            : Sämtliche öffentlich publizierten Inhalte stehen als Linked-Data zur Verfügung.
    section 2026      
        PIs 29 – 33
            : Eine Vorschau auf die eigentlichen Daten wird eingebunden.
            : Die Verbindungsmöglichkeiten zu anderen Tools werden erweitert.
            : Der komplette Programmcode wird freigegeben (Open Source).
            : Die Projektphase wird abgeschlossen. 
```

### Open Source
Der Programmcode der I14Y-Interoperabilitätsplattform soll unter einer [freien Lizenz](https://www.gnu.org/licenses) Lizenz veröffentlichst werden. Die Interoperabilitätsstelle publiziert den Quellcode bis spätestens Ende der Projektphase, also Ende des Jahres 2026. Dies geschieht im Einklang mit dem zukünftigen Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)). Laut Artikel 9 sollen die Bundesbehörden ihre Quellcodes -- sofern möglich -- frei zur Verfügung stellen. 

{{<card header="Gesetzesgrundlage" title="__Art. 9 Open Source Software__" footer="Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)">}}

Die diesem Gesetz unterstehenden Bundesbehörden legen, wenn es möglich und sinnvoll ist und die Rechte Dritter gewahrt werden, den Quellcode von Software offen, die sie zur Erfüllung ihrer Aufgaben entwickeln oder entwickeln lassen. Sie erlauben jeder Person, die Software zu nutzen, weiterzuentwickeln und weiterzugeben, und erheben keine Lizenzgebühren.

{{</card>}}

Die I14Y-IOP publiziert Quellcodes und Skripte unter dem Namen i14y-ch auf der [Plattform Github](https://github.com/i14y-ch). Bereits verfügbar ist dieses Handbuch sowie Prototypen, die an den GovTech-Hackathon 2023 und 2024 entwickelt wurden. Auf der Plattform sollen auch Beispielskripte zum Datenbezug veröffentlicht werden. 