---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: false 
---

Der nächste Release von I14Y ist für den frühen Abend des 25. Februar 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software per sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben. 

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an die Interoperabilitätsstelle ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

- **IRIs für alle Objekte:** Im letzten Release wurden für Konzepte sogenannte _International Resource Identifier (IRIs)_ eingeführt: stabile, eindeutige Adressen, mit denen Inhalte verlässlich verlinkt werden können. Mit diesem Release erhalten nun auch alle übrigen Objekte auf I14Y eigene IRIs, also auch die Codelisteneinträge (Codes), Datensätze, elektronischen Schnittstellen und Behördenleistungen. Die IRIs werden auf den jeweiligen Detailseiten in der Benutzeroberfläche angezeigt. Für Codelisten, die auf der Plattform LINDAS veröffentlicht wurden, verweisen diese IRIs auf die dort verfügbaren Informationen. Für Datensätze, Datendienste und Verwaltungsleistungen stehen keine Inhalte auf LINDAS selbst, aber sie verfügen trotzdem über eine stabile, maschinenlesbare Adresse. In den RDF-Exporten, zum Beispiel für opendata.swiss, ersetzen die neuen IRIs die bisher verwendeten URLs. Für normale Nutzer ändert sich dadurch wenig, die Verweise auf I14Y-Inhalte werden aber stabiler.

- **Datensätze mit Struktur filtern:** In der Katalogsuche steht neu ein Filter zur Verfügung, mit dem sich die Ergebnisliste auf Datensatzeinträge einschränken lässt, bei denen eine Struktur hinterlegt ist. So lassen sich Datensätze, die als Grundlage für Harmonisierungsarbeiten dienen können, schneller identifizieren.

- **Erster Schritt zu Mapping-Tabelle:** Um Unterschiede und Gemeinsamkeiten zwischen zwei Codelisten zu dokumentieren, führt I14Y Mapping-Tabellen ein. In einem ersten Schritt werden diese Tabellen als eigene Detailseiten in der Eingabeansicht von I14Y sichtbar. Sie können dort angezeigt, aber noch nicht bearbeitet werden. Zudem sind sie noch nicht über die Katalogsuche auffindbar. Auf diese Weise können erste Erfahrungen gesammelt werden, bevor die Funktion weiter ausgebaut und in die übrige Oberfläche integriert wird.

- **API-Nutzung im Dashboard sichtbar:** I14Y stellt Daten über eine öffentliche API und über eine Partner-API zur Verfügung. Neu zeigt das I14Y-Dashboard einfache Auswertungen zur Nutzung dieser Schnittstellen an. So wird zum Beispiel ersichtlich, wie viele Anfragen pro Tag von ausgewählten Organisationen eingehen.

- **Strengere Regeln für Identifikatoren:** Alle Objekte auf I14Y verfügen über einen  Identifikator. Damit Identifikatoren zuverlässig mit dem neuen IRI-Resolver funktionieren, werden die erlaubten Zeichen eingeschränkt. Erlaubt sind nur Buchstaben (A–Z, a–z), Ziffern (0–9) sowie die Zeichen Punkt (.), Unterstrich (_), Tilde (~), At-Zeichen (@) und Bindestrich (-). Technisch entspricht dies dem Muster `^[A-Za-z0-9._~@-]+$`. Für Benutzerinnen und Benutzer bedeutet dies: Beim Erfassen oder Anpassen von Identifikatoren können Eingabefehler auftreten, wenn unerlaubte Sonderzeichen verwendet werden. In solchen Fällen weist das System in einer Fehlermeldung darauf hin.

- **Verbesserungen bei den Suchergebnissen:** Die Suche auf I14Y wurde weiter verfeinert, damit wichtige Inhalte leichter auffindbar sind. Einträge, die als Standard oder bevorzugter Standard gekennzeichnet sind, erhalten in der Sortierung der Suchergebnisse ein höheres Gewicht und erscheinen dadurch prominenter. Ausserdem ist es nun möglich nach dem Dateneignern (_Data Owner_) zu suchen.