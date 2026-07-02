---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: false
notification: true
---

Der nächste Release von I14Y ist für den frühen Abend des 9. Juli 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software per sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben.

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an die das Kompetenzzentrum Datenbewirtschaftung ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Organisationslogo:** Seit dem letzten Release kann für jede Organisation ein Logo oder ein Foto hinterlegt werden. Diese Bilder werden neu auf der Seite «Organisationen» angezeigt.

**Tabellarische Ansicht von Datenstrukturen:** Datenstrukturen können alternativ zum UML-Diagramm auch als Tabelle dargestellt werden. Diese Ansicht ist in bestimmten Fällen übersichtlicher und erleichtert einen schnellen Überblick über die Struktur eines Datensatzes.

**Verbesserte Navigation:** Oberhalb der Detailansicht eines Eintrags steht neu ein «Zurück»-Knopf zur Verfügung. Damit gelangen Sie direkt zurück zur Liste mit den gefilterten Suchresultaten. Bislang war dazu der Zurück-Knopf des Webbrowsers nötig.

**Mehr Informationen in Übersichtslisten:** Die Liste der Einträge enthält neu Chips zu den Themen sowie zu den Formaten der zugehörigen Distributionen.

**Erweiterung des RDF-Exports:** Der RDF-Export, der insbesondere für das Harvesting eines Datenkatalogs durch opendata.swiss genutzt wird, enthält im Bereich der Distributionen neu das Attribut `coverage`.

**Anpassung bei der API:** In der elektronischen Schnittstelle (API) wurde im Bereich der Konzepte und der Behördenleistungen bisher das Feld `identifier` verwendet, das eine Zeichenkette enthielt. Dieses Feld wird in diesem Release vollständig durch `identifiers` ersetzt, das eine Liste von Zeichenketten enthält. Bestehende Integrationen zum Lesen oder Schreiben von Konzepten oder Behördenleistungen müssen zwingend angepasst werden. Lesen Sie dazu den entsprechenden [News-Beitrag](/handbook/de/news/#breaking-change-auf-der-i14y-api).

**Bugfixes:** Fehlerhafte Resultate im Bereich «My Data» im internen Bereich der Plattform wurden korrigiert. Ausserdem wurden ein Layoutproblem auf der Seite der Codelisten-Einträge sowie mehrere Tippfehler in der Benutzeroberfläche behoben.

**Hinweis:** Die Open-Source-Veröffentlichung des I14Y-Programmcodes wurde entgegen der früheren Ankündigung auf einen späteren Zeitpunkt verschoben, da eine verbleibende Abhängigkeit nicht mit der MIT-Lizenz kompatibel ist.
