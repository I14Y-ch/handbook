---
title: Toolbox
slug: i14y-toolbox
weight: 60
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, Interoperabilität, Toolbox, Hilfsprogramme, Miniapplikationen, Excel Upload, Keyword Generator, Concept Import, Swagger, SHACL, Schweiz]
draft: true
---

Die Interoperabilitätsstelle bietet in der [I14Y Toolbox](https://toolbox.i14y.admin.ch) einfache Anwendungen an, die das Dokumentieren von Daten in bestimmten Fällen erleichtern. Beispielsweise können Metadaten oder Konzepte aus Daten extrahiert, Textelemente automatisiert übersetzt oder Inhalte mithilfe Künstlicher Intelligenz generiert werden. Dadurch erhalten Submitter oder Local Data Stewards schnell eine erste Version eines Eintrags, den sie weiter bearbeiten, prüfen und schliesslich hochladen können. 

Die Anwendungen basieren teilweise auf Skripten aus dem [I14Y GitHub-Repository](https://github.com/i14y-ch). Der Vorteil der Toolbox: Es ist keine lokale Python-Umgebung erforderlich. Die Funktionalität der Skripte kann direkt über das Web-Frontend genutzt werden.

Die Webapplikationen der I14Y Toolbox sind experimentell. Sie sind nicht stabil und werden nach Bedarf weiterentwickelt. Teile davon sind automatisch generiert. Die Interoperabilitätsstelle übernimmt keine Verantwortung und bietet keinen Support. Das Hosting kann ausserhalb der Infrastruktur des Bundes erfolgen. Der Code und die zugehörigen Anleitungen sind auf GitHub verfügbar und lassen sich direkt über den Link in der jeweiligen Kachel aufrufen. Alle Miniapplikationen der Toolbox lassen sich auch lokal ausführen.

{{< alert color="warning" title="Nicht geeignet für sensible Daten">}}
In manchen Miniapplikationen können Daten hochgeladen werden, um daraus Metadaten zu generieren. Laden Sie keine nicht-öffentlichen oder geschützten Daten hoch. 

Falls Sie die Applikation mit sensiblen Daten nutzen möchten, haben Sie zwei Möglichkeiten:
- Laden Sie den Code über den GitHub-Link herunter, prüfen Sie ihn und führen Sie ihn lokal aus.
- Arbeiten Sie mit einem gleich strukturierten Test-Datensatz statt mit den echten Daten.
{{< /alert >}}

Haben Sie Vorschläge für weitere nützliche Anwendungen? Schreiben Sie uns an [i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch). Möchten Sie eine der Miniapplikationen verbessern oder erweitern? Reichen Sie Ihre Änderungen als Pull-Request auf Github ein.

## Verfügbare Applikationen

- **Excel Upload**: Importieren Sie Ihr Excel-basiertes Dateninventar einfach auf die I14Y Interoperabilitätsplattform.
- **Keyword Generator**: Erstellen Sie Schlagwörter, um Ihre Datensatzbeschreibungen auf I14Y zu verbessern.
- **Concept Import**: Importieren Sie Konzepte aus einer Tabelle auf I14Y.
-**Swagger to I14Y**: Generieren Sie aus Ihrer technischen API-Spezifikation (Swagger) eine API-Beschreibung auf I14Y.
-**Convert to SHACL**: Erstellen Sie eine Beschreibung einer Datenstruktur im SHACL-Format. Sie können dabei von Ihren tatsächlichen Daten ausgehen.
-**SHACL-Editor**: Beschreiben oder bearbeiten Sie Datenstrukturen manuell mit dem I14Y-Struktureditor.