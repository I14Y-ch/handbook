---
title: Grundlegende Tipps zur Erfassung
slug: tipps
weight: 20
type: docs
translationKey: hints
keywords: [I14Y, I14Y, Interoperabilitätsplattform I14Y, Katalog, Metadaten, erfassen, Tipps]
---

Die sorgfältige Erfassung von Metadaten ist entscheidend für die Auffindbarkeit, Verständlichkeit und Nutzbarkeit von Daten. Gut strukturierte und vollständige Metadaten ermöglichen es Nutzerinnen und Nutzern, relevante Informationen schnell zu finden und deren Kontext richtig einzuordnen. Sie bilden die Grundlage für eine effektive Datennutzung und fördern die Interoperabilität zwischen verschiedenen Systemen und Organisationen.

Die folgenden Hinweise sollen Sie dabei unterstützen, qualitativ hochwertige Metadaten zu erfassen, die sowohl fachlichen Anforderungen genügen als auch für ein breites Publikum zugänglich sind.


## Texte richtig formulieren

Titel sollen kurz und aussagekräftig sein, während Beschreibungen detaillierter sind und den Kontext, den Zweck sowie die wesentlichen Inhalte eines Objekts erklären.

Bei der Erfassung von Titeln und Beschreibungen ist darauf zu achten, dass diese sowohl für ein Fachpublikum als auch für ein breiteres Publikum verständlich sind. Die Beschreibungen sollen präzise und inhaltlich vollständig sein, sodass Fachpersonen alle relevanten Informationen erhalten. Gleichzeitig sollen sie so formuliert werden, dass auch Personen ohne Fachkenntnisse den Inhalt und Zweck zumindest im Grundsatz nachvollziehen können. Fachbegriffe können verwendet werden, sollten aber nach Möglichkeit kurz erläutert oder durch allgemein verständliche Formulierungen ergänzt werden. Abkürzungen werden in Beschreibungen einleitend ausgeschrieben bzw. erklärt. 

Auf Formatierungen der Texte ist zu verzichten; auch Markdown wird aktuell nicht unterstützt.

## Mehrsprachigkeit 

Grundsätzlich müssen Meta­­daten des Bundes in Deutsch, Französisch und Italienisch vorliegen. Beschreibungen in Rätoromanisch und Englisch sind optional. Kantone, Gemeinden und die übrigen Organisationen legen eigene Vorgaben bezüglich der Mehrsprachigkeit ihrer Einträge fest. Für die Übersetzung der Metadaten gelten die spezifischen Regeln der jeweiligen Organisationseinheit.

<!-- Die Interoperabilitätsstelle empfiehlt komplexere Beschreibungen sowie rechtlich relevante Beschreibungen und Labels durch die Sprachdienste übersetzen zu lassen. Allenfalls sind sogar die Rechtsdienste beizuziehen, um eine präzise und rechtlich korrekte Übersetzung zu gewährleisten. Für interne Beschreibungen und einfache Inhalte kann unter Umständen auch eine Übersetzung unter Zuhilfenahme von amtlichen Dokumenten sowie Übersetzungstools genügen. Wichtig ist dabei jedoch stets eine Qualitätskontrolle durch eine Person mit ausreichenden Sprachkenntnissen, um die Genauigkeit der übersetzten Inhalte sicherzustellen.

Zentrale Begriffe, die mehrmals vorkommen und von verschiedenen Nutzern gebraucht werden, sollten mit der Terminologiedatenbank der Bundesverwaltung (Termdat) abgeglichen oder mit den Sprachdiensten der Bundeskanzlei abgestimmt werden. -->

## Schlüsselwörter und kontrollierte Terminologie

Schlüsselwörter spielen eine zentrale Rolle für die Auffindbarkeit von Datensätzen. Auf I14Y werden Schlüsselwörter mit Objekten aus drei kontrollierten Terminologien verknüpft: mit der Terminologiedatenbank [TERMDAT](https://termdat.bk.admin.ch) der Eidgenossenschaft, mit dem mehrsprachigen europäischen Umwelt-Thesaurus [GEMET](https://www.eionet.europa.eu/gemet) sowie mit der kollaborativen Datenplattform [Wikidata](https://wikidata.org). 

Durch die Verwendung kontrollierter Terminologien wird eine einheitliche Begrifflichkeit gefördert. Dies verbessert nicht nur die Qualität der Metadaten, sondern auch deren Auffindbarkeit über verschiedene Systeme hinweg. Schlüsselwörter ohne Referenz zu einer kontrollierten Terminologie sollten nur in Ausnahmefällen verwendet werden. 

{{<alert title="Weshalb Schlüsselwörter wichtig sind" color="info">}}
Schlüsselwörter helfen, Datensätze besser auffindbar zu machen und ihren Kontext präziser abzustecken. Sie werden für die Suchfunktion indexiert. Einträge mit relevanten Schlüsselwörtern werden deshalb leichter gefunden werden. Zudem ermöglichen Schlüsselwörter eine bessere Kategorisierung und Vergleichbarkeit von Datensätzen. Durch die Anbindung an kontrollierte Vokabulare wie Termdat, GEMET oder Wikidata werden mittelfristig weitergehende Abfragen über _Linked Data_ möglich.
{{</alert>}}

Die Funktionalität zum Hinterlegen von URIs bei Schlüsselwörtern wurde mit dem [Software-Release vom 7. Januar 2026](https://handbook.i14y.admin.ch/de/changelog/releases/) auf I14Y eingeführt. Damit hat I14Y die Änderung bereits integriert, die die kommende [Version 3 von DCAT-AP CH](https://www.dcat-ap.ch/releases/3.0_workingdraft/dcat-ap-ch_3.0_workingdraft.html#resource-keyword) verlangt. Die _Local Data Stewards_ sind gebeten, die Schlüsselwörter ihrer Einträge im Rahmen des normalen Kontroll- und Überarbeitungszyklus zu aktualisieren und zu ergänzen. Je nach Arbeitsweise stehen unterschiedliche Möglichkeiten zur Verfügung:

### Erfassung über die Weboberfläche

Schlüsselwörter können bei der Erfassung oder beim Editieren eines Eintrags in der Weboberfläche mit einer der vorbestimmten Terminologie-Datenbank verknüpft werden. Es empfiehlt sich, Synonyme und allgemeine Begriffe zu hinterlegen. Dazu wird der betreffende Begriff in Termdat gesucht. Ist er dort verfügbar, wird der Eintrag angewählt und dann -- sofern vorhanden -- unter "Kopfdaten" die "Konzept-URI" kopiert. Dieser eindeutige Link wird ins entsprechende Feld auf I14Y eingefügt. Ist der Begriff bei Termdat nicht vorhanden, wird er in GEMET und in dritter Priorität in Wikidata gesucht. Ohne URI sollen ausschliesslich wichtige Begriff erfasst werden, die in den drei kontrollierten Vokabularen bislang nicht aufführt werden. Wenn möglich, wird in einem solchen Fall zusätzlich der Prozess zur Erfassung in der passenden Terminologiedatenbank angestossen.  

### API-Integration
Die Schlüsselwörter können auch über die I14Y-API eingespeist werden. Alle Informationen zur Nutzung der APIs sind in den [technischen Dokumentationen](https://apiconsole.i14y.admin.ch) zu finden. Schlüsselwörter werden bei einem _POST-Request_ in der folgenden Form mitgegeben: 

```json
"keywords": [
    {
        "label": {
            "de": "string",
            "en": "string",
            "fr": "string",
            "it": "string",
            "rm": "string"
        },
        "uri": "string"
    }
]
```

### Erfassung mit dem "Keyword Generator"

Die [I14Y-Toolbox](https://toolbox.i14y.admin.ch) bietet mit dem "Keyword Generator" ein Werkzeug zum Generieren, Bearbeiten und Hochladen von Schlüsselwörtern an. Das webbasierte Hilfsprogramm erlaubt es insbesondere, Schlüsselwörter von bereits publizierten Einträgen zu überarbeiten bzw. mit URIs zu ergänzen.