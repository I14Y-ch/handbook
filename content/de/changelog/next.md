---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: false 
---

Der nächste Release von I14Y ist für den frühen Abend des 24. September 2025 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software per sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben. 

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an die Interoperabilitätsstelle ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- Auf I14Y kann zu jeder Datensatz-Beschreibung eine detaillierte technische Beschreibung der Datenstruktur hinterlegt werden. Neu lassen sich die hinterlegten Strukturen in mehreren Formaten (TTL, RDF, JSON-LD) via die öffentliche Website herunterladen. 
- Alle Metadaten eines Datensatzes lassen sich über einen neu eingeführten Knopf über die öffentliche Website exportieren.
- In Beschreibungen eingefügte Internetadressen werden automatisch als anklickbare Links angezeigt.
- Beim Abruf von Informationen über die elektronische Schnittstelle (API) werden jetzt alle Ergebnisse geliefert, sofern keine Anzahl der gewünschten Elemente pro Seite (pageSize) angegeben wird.
- Im Fussbereich der Website gibt es neu einen direkten Link zur I14Y-Toolbox mit hilfreichen Werkzeugen für das Einspielen von Metadaten.
- Der Suchindex wird nun unabhängig vom Start der Anwendung aufgebaut. Die Plattform steht dadurch bei einem Neustart schneller wieder zur Verfügung. Und die Suche ist stabiler.
- Neue interne Überwachungsadressen (Health-Checks) helfen, technische Probleme schneller zu erkennen.
- Verschiedene Fehler wurden behoben.
