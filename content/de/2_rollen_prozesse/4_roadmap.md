---
title: Roadmap
slug: roadmap
weight: 40
type: docs
keywords: [I14Y, I14Y-Interoperabilitätsplattform, Systemarchitektur, Technik, Datenbank]
---

Die I14Y-Interoperabilitätsplattform wird im Auftrag des Bundes von der Interoperabilitätsstelle in Zusammenarbeit mit dem Bundesamt für Informatik entwickelt. Der Funktionsumfang wird laufend erweitert. 

Die Interoperabilitätsstelle priorisiert in den nächsten Monaten die folgenden Funktionalitäten. Die Schwerpunkte können sich kurzfristig ändern. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie detaillierte Angaben zur Weiterentwicklung der Plattform benötigen oder falls Sie Wünsche für bestimmte Funktionalitäten haben.

{{<alert title="Ihre Anregungen sind willkommen" color="success">}}
Sollten Sie eine Verbesserungsmöglichkeit oder einen Fehler auf der I14Y-Interoperabilitätsplattform entdecken, ist das Entwicklungsteam dankbar um einen Hinweis. Sie erreichen uns am besten per [E-Mail](mailto:i14y@bfs.admin.ch). In einer späteren Phase werden weitere Kanäle für Rückmeldungen angeboten. 

{{</alert>}}

## Elektronische Schnittstellen (APIs)
Die I14Y-IOP bietet bereits heute elektronische Schnittstellen (APIs) zum Abrufen, Erfassen und Bearbeiten der Metadaten auf der Plattform an. Allerdings können sich diese noch ändern. Deshalb wurden sie bislang nicht öffentlich kommuniziert. Zudem sind viele der Schnittstellen ausschliesslich aus dem Bundesnetz erreichbar. Bitte nehmen Sie mit der [Interoperabilitätsstelle](mailto:i14y@bfs.admin.ch) Kontakt auf, falls Sie jetzt bereits auf die Schnittstellen angewiesen sind.  

In den nächsten Monaten sollen stabile elektronische Schnittstellen zur Verfügung gestellt werden. Diese werden unter [api.i14y.admin.ch](https://api.i14y.admin.ch) erreichbar sein. Dort wird auch eine ausführliche Dokumentation zur Verfügung gestellt. Das Angebot wird allmählich ausgebaut. 

Über diese Schnittstellen können öffentlich publizierte Metadaten abgerufen werden. Zudem wird es möglich, ohne manuelle Eingriffe auch interne Metadaten der eigenen Organisation beziehen zu können. Dazu wird ein so genannter API-Gateway ans System angebunden. 

### Ergänzen weiterer Felder
Die I14Y-IOP plant im Katalogteil weitere Felder einzuführen, damit Datensammlungen und elektronische Schnittstellen noch detaillierter beschrieben werden können. Zudem soll damit die Interoperabilität zu anderen Datenportalen sichergestellt werden. Einige der Felder werden ausschliesslich im internen Bereich zur Verfügung stehen, andere werden das öffentliche Angebot ergänzen. 

In einem zweiten Schritt wird die Möglichkeit geschaffen, dass die einzelnen Organisationen eigene Felder definieren können, um ihre Datensammlungen und Schnittstellen für den internen Gebrauch und die Anbindung an Fachapplikationen akurater beschreiben zu können.

### Qualitätsinformationen
Die I14Y-IOP sammelt Einschätzungen zur Qualität der einzelnen Datensammlungen. Diese Angaben sollen in Zukunft auch automatisiert über eine elektronische Schnittstelle bezogen werden können. 

Später wird die Möglichkeit geschaffen auch bei den einzelnen Datenelementen Informationen zur Qualität zu hinterlegen. So könnte etwa dokumentiert werden, wie der Befüllungsgrad eines Datenelements ist. Auch diese Informationen sollen sich dereinst über die API abrufen lassen. 

### Open Source
Der Programmcode der I14Y-Interoperabilitätsplattform soll unter einer [freien Lizenz](https://www.gnu.org/licenses) Lizenz veröffentlichst werden. Dies geschieht im Einklang mit dem zukünftigen Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben (EMBAG). Laut Artikel 9 sollen die Bundesbehörden ihre Quellcodes -- sofern möglich -- frei zur Verfügung stellen. 

{{<card header="Gesetzesgrundlage" title="__Art. 9 Open Source Software__" footer="Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/de#art_9)">}}

Die diesem Gesetz unterstehenden Bundesbehörden legen, wenn es möglich und sinnvoll ist und die Rechte Dritter gewahrt werden, den Quellcode von Software offen, die sie zur Erfüllung ihrer Aufgaben entwickeln oder entwickeln lassen. Sie erlauben jeder Person, die Software zu nutzen, weiterzuentwickeln und weiterzugeben, und erheben keine Lizenzgebühren.

{{</card>}}

Die I14Y-IOP publiziert Quellcodes und Skripte unter dem Namen i14y-ch auf der [Plattform Github](https://github.com/i14y-ch). Bereits verfügbar ist dieses Handbuch sowie der Prototyp einer API, die am GovTech-Hackathon 2023 entwickelt wurde. Auf der Plattform sollen auch Beispielskripte zum Datenbezug veröffentlicht werden. Die ersten Module der I14Y-IOP werden voraussichtlich im 4. Quartal 2023 verfügbar sein. Detailinformationen zu den Nutzungsmöglichkeiten und zum weiteren Vorgehen werden zu diesem Zeitpunkt in diesem Handbuch nachgetragen.