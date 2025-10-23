---
title: Toolbox
slug: i14y-toolbox
weight: 60
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, Interoperabilität, Toolbox, Hilfsprogramme, Miniapplikationen, Excel Upload, Keyword Generator, Concept Import, Swagger, SHACL, Schweiz]
draft: true
---

Die Interoperabilitätsstelle des BFS bietet in der [I14Y-Toolbox](https://toolbox.i14y.admin.ch) einfache Webanwendungen an, die das Dokumentieren von Daten in bestimmten Fällen erleichtern. Damit können beispielsweise Metadaten oder Konzepte aus Daten extrahiert, Textelemente automatisch übersetzt oder Inhalte mithilfe künstlicher Intelligenz generiert werden. So erhalten Submitter oder Local Data Stewards schnell eine erste Version eines Eintrags, den sie anschliessend prüfen, bearbeiten und auf die Plattform hochladen können.

Die Anwendungen basieren teilweise auf Skripten aus dem [I14Y-GitHub-Repository](https://github.com/i14y-ch). Der Vorteil der Toolbox: Es ist keine lokale Python-Umgebung erforderlich. Die  Skripte können direkt über das Web-Frontend genutzt werden.

Die Webanwendungen der I14Y-Toolbox sind experimentell. Sie sind nicht stabil und werden bei Bedarf weiterentwickelt. Teile des Codes sind automatisch generiert. Die Interoperabilitätsstelle übernimmt keine Verantwortung und bietet keinen Support. Das Hosting kann ausserhalb der Infrastruktur des Bundes erfolgen. Der Quellcode und die Anleitungen sind auf GitHub verfügbar und lassen sich über den Link in der jeweiligen Kachel aufrufen. Alle Anwendungen können bei Bedarf auch lokal ausgeführt werden.


{{< alert color="warning" title="Nicht geeignet für sensible Daten">}}
Einige Anwendungen ermöglichen das Hochladen von Daten, um daraus Metadaten zu generieren. Laden Sie aber keine nicht-öffentlichen oder geschützten Daten hoch.

Falls Sie eine der Anwendungen mit sensiblen Daten nutzen möchten, haben Sie zwei Möglichkeiten:
- Laden Sie den Code über den GitHub-Link herunter, prüfen Sie ihn und führen Sie ihn lokal aus.
- Arbeiten Sie mit einem gleich strukturierten Test-Datensatz statt mit den echten Daten.
{{< /alert >}}

Haben Sie Vorschläge für weitere nützliche Anwendungen? Schreiben Sie uns an [i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch). Möchten Sie eine der Anwendungen verbessern oder erweitern? Reichen Sie Ihre Änderungen als Pull-Request auf Github ein.

## Verfügbare Anwendungen

- **Excel Upload**: Importieren Sie Ihr Excel-basiertes Dateninventar einfach auf die I14Y Interoperabilitätsplattform.
- **Keyword Generator**: Erstellen Sie Schlagwörter, um Ihre Datensatzbeschreibungen auf I14Y zu verbessern.
- **Concept Import**: Importieren Sie Konzepte aus einer Tabelle auf I14Y.
- **Swagger to I14Y**: Generieren Sie aus Ihrer technischen API-Spezifikation (Swagger) eine API-Beschreibung auf I14Y.
- **Convert to SHACL**: Erstellen Sie eine SHACL-Beschreibung der Datenstruktur. Nutzen Sie dazu ihre Datensätze, z.B. in Form einer einer CSV-Datei.
- **SHACL-Editor**: Beschreiben oder bearbeiten Sie Datenstrukturen manuell mit dem SHACL-Struktureditor.
