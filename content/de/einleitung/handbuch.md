---
title: Handbuch
slug: handbuch
translationKey: handbook
description: 
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Einleitung, Interoperabilität, Mehrfachnutzung, Schweiz, Handbuch, Dokumentation, Github]
weight: 20
type: docs
---

Dieses Handbuch erläutert die wichtigsten Funktionen der Interoperabilitätsplattform I14Y (I14Y). Es beinhaltet zahlreiche Schritt-für-Schritt-Anleitungen. Zusätzlich bietet es Angaben zu technischen Details sowie Hintergrundinformationen zur Harmonisierung und Standardisierung von Daten.

In einem ersten Kapitel werden die [Rollen und Prozesse](/handbook/de/gouvernanz) in der Datenbewirtschaftung beleuchtet. Unter [Metadaten abrufen](/handbook/de/metadaten_abrufen) werden Wege zum Bezug von Informationen von I14Y. Im darauf folgenden Kapitel [Metadaten publizieren](/handbook/de/publikation) wird erläutert, wie Beschreibungen von Datensätzen, elektronischen Schnittstellen und Datenelementen auf der Plattform veröffentlicht werden. Zudem wird gezeigt, wie das Verzeichnis der Behördenleistungen befüllt wird. 

<!--Später ergänzen: Nebst den schriftlichen Anleitungen enthält dieses Handbuch auch einige Videotutorials.--> 
Das Handbuch enthält zudem ein [Glossar](/handbook/de/glossar) mit Fachbegriffen, eine [Liste mit Weblinks](/handbook/de/anhang/weblinks), eine Übersicht über die [Partnerorganisationen](/handbook/de/partner) sowie ein [Log](/handbook/de/anhang/changelog) mit den wichtigsten Änderungen, die an der Plattform vorgenommen wurden.

Die Funktionalitäten von I14Y werden laufend ausgebaut. Auch dieses Handbuch wird regelmässig überarbeitet. Haben Sie Anregungen, wie es verbessert werden könnte? Oder möchten Sie die Erfahrungen, die Sie mit dem Handbuch oder der Plattform gemacht haben, mit uns teilen? [Schreiben Sie uns](mailto:i14y@bfs.admin.ch). Dieses Handbuch wird auf der [Codeverwaltungsplattform Github](https://github.com/I14Y-ch/handbook/) gepflegt. Gerne können Sie dort einen Pull-Request mit Ihren Änderungswünschen einreichen.

{{<alert title="So reichen Sie Änderungen ein" color="success">}}

Das I14Y-Handbuch ist in einer Auszeichnungssprache -- englisch: _Markup Language_ -- verfasst. Die Software [Hugo](https://gohugo.io) wandelt die Textdaten in eine Website um. Die Inhalte dieses Handbuchs werden auf der Codeverwaltungsplattform GitHub gepflegt. Dort lassen sich Änderungsvorschläge erfassen und einreichen. Das funktioniert entweder direkt im Webbrowser oder mit dem normalen Git-Workflow.

<details>
<summary><strong>Manueller Prozess über die Website</strong></summary>

1. Erstellen Sie ein Konto auf der Codeverwaltungsplattform GitHub. Loggen Sie sich ein.
2. Öffnen Sie das [Repository mit dem Handbuch](https://github.com/I14Y-ch/handbook/). Die Textinhalte befinden sich im Verzeichnis _content_, unterteilt nach Sprache, Kapitel und Unterkapitel. Dateien mit der Endung _.md_ enthalten die eigentlichen Textinhalte sowie die Grafiken. Suchen Sie den anzupassenden Textteil. Lassen Sie sich den Rohtext anzeigen.
3. Klicken Sie zum Bearbeiten auf das Bleistiftsymbol oben rechts. Nehmen Sie die nötigen Änderungen vor. Beachten Sie dabei die [Markup-Syntax-Regeln](https://www.markdownguide.org/basic-syntax/).
4. Beschreiben Sie im Formular unter dem Text die Änderung kurz. Reichen Sie den Vorschlag anschliessend mit einem Klick auf den Knopf ein. Ihr Vorschlag wird zeitnah vom I14Y-Team geprüft und allenfalls ins Handbuch integriert.

</details>

<details>
<summary><strong>Git-Workflow (empfohlen für grössere Änderungen)</strong></summary>

1. Installieren Sie Git und klonen Sie das Repository: `git clone https://github.com/I14Y-ch/handbook.git`.
2. Erstellen Sie einen Branch für Ihre Änderung: `git checkout -b mein-änderungsvorschlag`.
3. Passen Sie die gewünschte Datei im Verzeichnis _content_ an. Nutzen Sie bei Bedarf die [Markup-Syntax-Regeln](https://www.markdownguide.org/basic-syntax/).
4. Prüfen Sie Ihre Änderungen, speichern Sie sie und erstellen Sie einen Commit:
	- `git status`
	- `git add <datei>`
	- `git commit -m "Änderung: kurzer Titel"`
5. Pushen Sie den Branch auf GitHub: `git push -u origin mein-änderungsvorschlag`.
6. Erstellen Sie auf der GitHub-Website einen Pull Request. Beschreiben Sie kurz, was geändert wurde und warum. Ihr Vorschlag wird zeitnah vom I14Y-Team geprüft und allenfalls ins Handbuch integriert.

</details>

{{</alert>}}
