---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: true 
---

Der nächste Release von I14Y ist für den frühen Abend des 28. Januar 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software per sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben. 

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an die Interoperabilitätsstelle ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- **Permalinks für Konzepte:** Auf den Detailseiten öffentlich publizierter Konzepte wird neu ein sogenannter _International Resource Identifier (IRI)_ eingeblendet. Für diesen stabilen und eindeutigen Identifikator, auch Permalink genannt, wird der _Linked Data_-Bereich des Bundes genutzt. Der Permalink setzt sich zusammen aus dem systeminternen Identifikator und der Version des Konzepts: `https://register.ld.admin.ch/i14y/concept/{concept-identifier}/version/{version}`. Ein IRI wird erst generiert, sobald ein Konzept öffentlich publiziert wird; interne Konzepte haben keinen solchen Permalink.
- **Erweiterung des RDF-Exports:** Beschreibungen zu Datensätzen sind über die elektronische Schnittstelle (API) auch im RDF-Format erhältlich. Dies ermöglicht das automatisierte Auslesen der Inhalte eines Katalogs (sogenanntes _Harvesting_). Der RDF-Export wurde nun um eine zusätzliche Angabe zum Distributionstyp ergänzt.
– **Zusätzliche Angabe in der Graph-Ansicht:** Die Struktur eines Datensatzes wird auf I14Y grafisch dargestellt. In dieser Darstellung werden nun auch die Masseinheiten von Attributen eingeblendet, sofern die entsprechenden Angaben hinterlegt sind. 
- **Filter verbessert:** Die Auswahlmöglichkeiten in Filtern sind nun besser geordnet. Bei einigen erfolgt die Ordnung nach fachlichen Kriterien (z. B. beim Statusfilter), bei anderen in alphabetischer Reihenfolge (z. B. beim Filter nach Lebenslagen).
- **Fehlerkorrekturen:** Es wurden mehrere Fehler korrigiert. Unter anderem können grosse Codelisten wieder schneller hochgeladen werden.