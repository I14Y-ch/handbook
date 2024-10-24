---
title: Datenerfassung über die elektronische Schnittstelle (API)
slug: i14y-api
weight: 50
type: docs
keywords: [I14Y, I14Y-Interoperabilitätsplattform, I14Y-IOP, Interoperabilität, API, elektronische Schnittstelle, automatisiert, Endpunkte, Swagger, Schweiz]
draft: True
---

Die I14Y-Interoperabilitätsplattform bietet jetzt verschiedene elektronische Schnittstellen (APIs) für die Datenpublikation und den Abruf von Metadaten an. Diese APIs ermöglichen es Webanwendungen und spezialisierten Anwendungen, Codelisten direkt von der Plattform zu beziehen, wodurch größere oder regelmäßige Importe von Metadaten in die I14Y-IOP erleichtert werden.

## Verfügbare APIs
Es gibt jetzt öffentlich zugängliche APIs, die über die folgenden Swagger-Dokumentationsseiten aufgerufen werden können:
- Abnahme-Version: [Swagger-Dokumentation](https://iop-partner-a.app.cfap02.atlantica.admin.ch/api/index.html)
- Produktions-Version: [Swagger-Dokumentation](https://iop-partner.app.cfap02.atlantica.admin.ch/api/index.html)

Die verfügbaren APIs sind in drei Kategorien unterteilt: Kataloge, Konzepte und Öffentliche Dienste. 

Außerdem steht eine Jupyter-Notebook-Dokumentation zur Verfügung, die zeigt, wie man die API mit der Python-Bibliothek requests verwendet. Diese Dokumentation ist im GitHub-Repository [Tutorials](https://github.com/I14Y-ch/tutorials) verfügbar. Das Notebook zeigt, wie man mit der Abnahme-Testumgebung der API interagiert, was es ermöglicht, alle Funktionalitäten zu testen, ohne die Produktionsumgebung zu beeinträchtigen. Die Funktionen der API und deren Funktionsweise in der Abnahme-Umgebung sind identisch mit denen in der Produktionsumgebung. Der einzige Unterschied besteht in der Umgebung selbst (Test vs. Produktion).

Bitte beachten Sie, dass einige APIs noch nicht öffentlich zugänglich sind. Für Informationen über diese Schnittstellen oder wenn Sie andere nicht öffentlich verfügbare APIs nutzen möchten, kontaktieren Sie bitte das [I14Y-Team](mailto:i14y@bfs.admin.ch). 

Das Angebot wird schrittweise erweitert, und weitere Informationen werden hier veröffentlicht, sobald neue I14Y-APIs verfügbar sind.
