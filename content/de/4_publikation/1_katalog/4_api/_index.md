---
title: Datenerfassung über die elektronische Schnittstelle (API)
slug: i14y-api
weight: 50
type: docs
keywords: [I14Y, I14Y-Interoperabilitätsplattform, I14Y-IOP, Interoperabilität, API, elektronische Schnittstelle, automatisiert, Endpunkte, Swagger, Schweiz]
---

Die I14Y-Interoperabilitätsplattform bietet jetzt verschiedene elektronische Schnittstellen (APIs) für die Datenpublikation und den Abruf von Metadaten an. Diese APIs ermöglichen es Webanwendungen und spezialisierten Anwendungen, Codelisten direkt von der Plattform zu beziehen, wodurch größere oder regelmäßige Importe von Metadaten in die I14Y-IOP erleichtert werden.

## Verfügbare APIs
Es gibt jetzt öffentlich zugängliche APIs, die über die folgenden Swagger-Dokumentationsseiten aufgerufen werden können:
- Public-Version, die ohne Authentifizierung zugänglich ist, um öffentliche Daten von I14Y abzurufen: [Swagger-Dokumentation](https://apiconsole.i14y.admin.ch/public/v1/index.html)
- Partner-Version, die nur mit Authentifizierung verwendet werden kann: [Swagger-Dokumentation](https://apiconsole.i14y.admin.ch/partner/v1/index.html)

Die verfügbaren APIs sind in vier Kategorien unterteilt: Kataloge, Konzepte, Datensammlung und Öffentliche Dienste. 

Im [Github-Repository](https://github.com/I14Y-ch/tutorials) stehen zwei Schritt-für-Schritt-Anleitungen in Jupyter-Notizbüchern zur Verfügung, die dokumentieren, wie die Partner- und öffentlichen APIs mit Python und der Requests-Bibliothek genutzt werden. 

Bitte beachten Sie, dass einige APIs noch nicht öffentlich zugänglich sind. Für Informationen über diese Schnittstellen oder wenn Sie andere nicht öffentlich verfügbare APIs nutzen möchten, kontaktieren Sie bitte das [I14Y-Team](mailto:i14y@bfs.admin.ch). 

Das Angebot wird schrittweise erweitert, und weitere Informationen werden hier veröffentlicht, sobald neue I14Y-APIs verfügbar sind.