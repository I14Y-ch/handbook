---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: false 
---

Der nächste Release von I14Y ist für den frühen Abend des 7. Januar 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software per sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben. 

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an die Interoperabilitätsstelle ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- **Schlüsselwörter mit Verbindung zu vordefinierten Begriffen**: Die Schlüsselwörter können neu mit eindeutigen Bezeichnungen aus kontrollierten Begriffsl­isten verknüpft werden. Technisch geschieht dies über ein zusätzliches Textfeld (`uri`). _Achtung: Dadurch ändert sich die Struktur der Daten, die von der Public- und Partner-API zurückgeliefert werden._ Diese Änderung wurde vom Steuerungsausschuss genehmigt.
- **Bessere Darstellung erlaubter Werte**: In den SHACL-Datenstrukturen können die erlaubten Werte eines Feldes definiert werden. Sobald das betreffende Feld in der Visualisierung angeklickt wird, werden die erlaubten Werte nun auch in der Seitenleiste angezeigt. Damit wird einfacher ersichtlich, welche Werte pro Feld zulässig sind.
- **Verbesserte Katalogsuche**: Die Suche im Katalog wurde weiter ausgebaut. Sie unterscheidet nicht mehr zwischen Gross- und Kleinschreibung. Und sie berücksichtigt die zusätzlichen Felder  Ansprechperson und Stellvertretung der Ansprechperson, Kontaktstelle sowie die Identifikatoren der Objekte.
- **Interne Verbesserungen und Bugfixes**