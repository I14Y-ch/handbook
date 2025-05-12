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

```mermaid
timeline
    title Roadmap Interoperabilitätsplattform I14Y
    
    section 2024
        PI 23 (07.11.2024 - 15.01.2025)
        : Migration der Datenbank. Dadurch Beschleunigung der globalen Suche.
        : Neue API-Endpunkte für I14Y-Partner (Abrufen und Publizieren von Beschreibungen zu Datensammlungen).
        : Die Suche in Codelisten wird möglich.
        : Über die API kann die Rechtsform und das Tätigkeitsgebiet jeder Organisation abgerufen werden.
        : Die Local Data Stewards können Beschreibungen selbstständig öffentlich publizieren.
    
    section 2025
        PIs 24 (16.01.2025 - 04.03.2025)
        : Neue API-Endpunkte für I14Y-Partner (Bereich Datensammlungen und Konzepte).
        : Änderungen an Datensammlungen werden aufgezeichnet (Audit Trail).
        : Strukturen zu Datensammlungen können einfacher erfasst werden.
        : Codelisten lassen sich filtern.
        : Zusätzliche Dashboard-Auswertungen.
        : Organisationen können einfacher erstellt und verwaltet werden.
        
        PI 25 (27.03.2025 - 04.06.2025)
        : Neue API-Endpunkte für I14Y-Partner (Bereich Dataservices)
        : Optimierungen und Erweiterung der Log-Möglichkeiten (Audit Trail).
        : Verbesserung der Suchfunktion.
        
        PI 26 - 28 (05.06.2025 - 04.01.2026)
        : Automatisches Onboarding der Bundesverwaltung.
        : Einführen von Mapping-Tabellen zur Dokumentation.
        : Notifikationen bei Änderungen an Metadaten können abonniert werden.
        : Weitere Exportmöglichkeiten.
        : Öffentlich publizierte Inhalte werden als Linked Data zur Verfügung gestellt.
    
    section 2026
        PIs 29 - 33 (05.01.2026 - 31.12.2026)
        : Vorschau auf die Daten wird eingebaut.
        : Möglichkeit zur Dokumentation von Datenflüssen (Data Lineage) wird geschaffen.
        : Erweiterung der Verbindungsmöglichkeiten zu Tools.
        : Freigabe des Programmcodes (Open Source).
        : Abschluss der Projektphase.
```

### Open Source
Der Programmcode der Interoperabilitätsplattform I14Y soll unter einer [freien Lizenz](https://www.gnu.org/licenses) Lizenz veröffentlichst werden. Die Interoperabilitätsstelle publiziert den Quellcode bis spätestens Ende der Projektphase, also Ende des Jahres 2026. Dies geschieht im Einklang mit dem zukünftigen Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)). Laut Artikel 9 sollen die Bundesbehörden ihre Quellcodes -- sofern möglich -- frei zur Verfügung stellen. 

{{<card header="Gesetzesgrundlage" title="__Art. 9 Open Source Software__" footer="Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)">}}

Die diesem Gesetz unterstehenden Bundesbehörden legen, wenn es möglich und sinnvoll ist und die Rechte Dritter gewahrt werden, den Quellcode von Software offen, die sie zur Erfüllung ihrer Aufgaben entwickeln oder entwickeln lassen. Sie erlauben jeder Person, die Software zu nutzen, weiterzuentwickeln und weiterzugeben, und erheben keine Lizenzgebühren.

{{</card>}}

I14Y publiziert Quellcodes und Skripte unter dem Namen i14y-ch auf der [Plattform Github](https://github.com/i14y-ch). Bereits verfügbar ist dieses Handbuch sowie Prototypen, die an den GovTech-Hackathon 2023 und 2024 entwickelt wurden. Auf der Plattform sollen auch Beispielskripte zum Datenbezug veröffentlicht werden. 