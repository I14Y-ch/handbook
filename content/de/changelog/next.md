---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: false 
---

Der nächste Release von I14Y ist für den frühen Abend des 25. März 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software per sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben.

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an die Interoperabilitätsstelle ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Mapping-Tabellen:** Mit diesem Release werden auf der Interoperabilitätsplattform Mapping-Tabellen eingeführt. Sie dienen dazu, Gemeinsamkeiten und Unterschiede zwischen den Werten aus zwei Codelisten zu dokumentieren. Mapping-Tabellen sind ein vollwertiges Objekt auf I14Y: Sie sind über die Suchfunktion und über Filter auffindbar. Sie sind sowohl auf der öffentlichen Plattform als auch in der Administrationsoberfläche einsehbar. Über die Administrationsoberfläche oder die API können Mapping-Tabellen auch erstellt und bearbeitet werden; zudem steht eine Importfunktion zur Verfügung.

**Anklickbare «Konform zu»-Links:** Für jedes Datenelement kann dokumentiert werden, ob es sich auf ein grundlegendes Konzept stützt. Dazu wird in der SHACL-Struktur im Feld «Konform zu» ein Link hinterlegt. Bislang wurden diese IRIs in der Seitenliste lediglich angezeigt; neu sind sie anklickbar.

**Sortierte Versionen:** Bei versionierten Konzepten wird eine Tabelle angezeigt, die die verfügbaren Versionen des Konzepts auflistet. Die Einträge werden neu in absteigender Reihenfolge dargestellt, was die Navigation durch die Konzept-Historie vereinfacht.

**Diverse Fehlerkorrekturen**