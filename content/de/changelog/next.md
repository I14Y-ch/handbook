---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: false 
---

Der nächste Release von I14Y ist für den frühen Abend des 6. Mai 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software per sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben.

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an die Interoperabilitätsstelle ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Strukturen in der Benutzeroberfläche bearbeiten:** Klassen, Attribute und Assoziationen einer Datenstruktur lassen sich neu direkt in der Benutzeroberfläche bearbeiten. Alle Eigenschaften, die in der Seitenleiste angezeigt werden, sind editierbar. Beim Bearbeiten eines Attributs kann ausserdem nach einem Konzept gesucht und eine Verknüpfung zu einer bestimmten Version hergestellt werden.

**Systemmetadaten in der Partner-API:** Alle Objekte enthalten neu einen Abschnitt «system» in den JSON-Antworten der Partner-API. Darin sind das Erstellungsdatum (`createdAt`), das Datum der letzten Änderung (`modifiedAt`) sowie die Erstellungsart (`creationType`) vermerkt. Letztere gibt an, ob ein Objekt manuell über einen Browser-Token (_Manual_) oder automatisiert über ein M2M-Token (_Automated_) angelegt wurde.

**Mehrere Identifikatoren pro Konzept und Verwaltungsleistung:** Konzepte und Verwaltungsleistungen können neu mehrere Identifikatoren tragen. Dazu wurde die Eigenschaft `identifiers` als Array eingeführt. Um bestehende Integrationen nicht zu unterbrechen, wird das bisherige Feld `identifier` vorerst weiterhin ausgespielt – beide Felder erscheinen gleichzeitig in den API-Antworten. Hinweis: Das Feld `identifier` (Singular) wird in einem künftigen Release entfernt. Skripte, die dieses Feld beim Erstellen von Objekten verwenden, müssen rechtzeitig angepasst werden.

**Neue Version einer Mapping-Tabelle erstellen:** Es ist nun möglich, von einer bestehenden Mapping-Tabelle eine neue Version zu erstellen.

**Katalogsuche über die Partner-API:** Der Endpunkt für die Katalogsuche ist neu auch über die Partner-API verfügbar. Die Suche unterstützt verschiedene Parameter wie Suchbegriff und Sprache.

**Erweiterte Bearbeitungsrechte für Submitter:** Submitter können Objekte mit dem Registrierungsstatus "Initial" oder "Kandidat" bearbeiten, auch wenn diese bereits öffentlich publiziert sind. Bedingung ist aber, dass diese zuvor nicht gesperrt worden sind.

**Distributionen auf der Datensatz-Detailseite:** Zu einem Datensatz gehörende Distributionen werden neu direkt auf der Beschreibungsseite des Datensatzes angezeigt.

**Export von Codelisten ohne Annotationen:** Codelisten können neu auf Wunsch auch ohne Annotationen exportiert werden; unterstützt werden die Formate JSON und CSV.

**Technische Aktualisierungen sowie kleinere Verbesserungen und Fehlerkorrekturen**