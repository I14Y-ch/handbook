---
title: Datenerfassung über die elektronische Schnittstelle (API)
slug: i14y-api
weight: 50
type: docs
keywords: [I14Y, I14Y-Interoperabilitätsplattform, I14Y-IOP, Interoperabilität, API, elektronische Schnittstelle, automatisiert, Endpunkte, Swagger, Schweiz]
---

Die I14Y-Interoperabilitätsplattform bietet elektronische Schnittstellen (APIs) an. Über diese lassen sich Metadaten abrufen und publizieren. Dank den APIs können grössere In- und Exporte einfach durchgeführt werden. Die Verwaltung der Metadaten lässt sich automatisieren. Zudem können Webseiten und Anwendungen direkt an die I14Y angebunden werden. 

Zur Verfügung stehen erste Endpunkte; weitere werden in den nächsten Monaten aufgeschaltet. Weitere Informationen werden hier veröffentlicht, sobald neue Endpunkte verfügbar sind. 

Die technische Dokumentation für die Endpunkte ist unter [I14Y-Swagger (öffentlich)](https://apiconsole.i14y.admin.ch/public/v1/index.html) und [I14Y-Swagger (Partner)](https://apiconsole.i14y.admin.ch/partner/v1/index.html) zu finden. Die öffentlichen APIs ermöglichen es anonymen Benutzern, öffentliche Daten von I14Y abzurufen, ohne dass ein Authentifizierungstoken erforderlich ist. Die Partner-APIs, die für die Verwendung durch lokale Datenverwalter konzipiert sind, erfordern für den Zugriff ein Authentifizierungstoken. Um die Partner-API nutzen zu können, gehen Sie wie folgt vor: Loggen Sie sich im internen Bereich der Plattform ein. Kopieren Sie anschliessend über das Personensymbol oben rechts das technische Token. Geben Sie dieses ihren Anfragen an die API mit. Falls Sie den Bezug der Metadaten oder die Publikation von Metadaten komplett automatisieren möchten, nehmen Sie mit dem I14Y-Team Kontakt auf.  

{{<alert title="Tutorials zur Nutzung der I14Y-API" color="success" >}}

Möchten Sie die I14Y-API nutzen? Wie Sie dabei vorgehen können, wird in frei verfügbaren Tutorials dokumentiert. Im [Github-Repository](https://github.com/I14Y-ch/tutorials) stehen zwei Schritt-für-Schritt-Anleitungen in Jupyter-Notizbüchern zur Verfügung, die dokumentieren, wie die Partner- und öffentlichen APIs mit Python und der Requests-Bibliothek genutzt werden.
{{</alert>}} 

Genügen die aktuell zur Verfügung stehenden Schnittstellen nicht, damit Sie Ihre Arbeiten erledigen können? In diesem Fall kontaktieren Sie das [I14Y-Team](mailto:i14y@bfs.admin.ch). Dieses hat Zugang zu zahlreichen weiteren Endpunkten. Da sich diese jederzeit noch ändern können, werden sie noch nicht öffentlich publiziert. 
