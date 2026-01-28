---
title: Datenerfassung über die elektronische Schnittstelle (API)
slug: i14y-api
weight: 50
type: docs
translationKey: i14y-api-partner
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, Interoperabilität, API, elektronische Schnittstelle, automatisiert, Endpunkte, Swagger, Schweiz]
---

Die Interoperabilitätsplattform I14Y bietet zwei elektronische Schnittstellen (APIs) an:

- **Public API**: Ermöglicht das Abrufen von öffentlich publizierten Metadaten auf I14Y, ohne dass ein Authentifizierungstoken erforderlich ist.
- **Partner API**: Für die Verwendung durch _Local Data Stewards_ konzipiert. Ermöglicht das Abrufen und Publizieren von Metadaten. Erfordert ein Authentifizierungstoken.

Über diese APIs lassen sich Metadaten abrufen und publizieren. Dank den APIs können grössere In- und Exporte einfach durchgeführt werden. Die Verwaltung der Metadaten lässt sich automatisieren. Zudem können Webseiten und Anwendungen direkt an I14Y angebunden werden.

## API-Dokumentation

Alle Informationen zu den APIs sind unter [https://apiconsole.i14y.admin.ch](https://apiconsole.i14y.admin.ch) zu finden. Dort stehen auch technische Dokumentationen (Swagger UI) zur Verfügung, in denen die einzelnen Attribute im Detail beschrieben werden:

- [Public API - Swagger UI](https://apiconsole.i14y.admin.ch/public/v1/index.html)
- [Partner API - Swagger UI](https://apiconsole.i14y.admin.ch/partner/v1/index.html)

Weitere Informationen zu den einzelnen Feldern sind im Anhang unter [Eingabefelder](/de/anhang/eingabefelder) zu finden.

## Authentifizierung

### User-Token

Um die Partner-API nutzen zu können, benötigen Sie ein Authentifizierungstoken. Gehen Sie wie folgt vor:

1. Loggen Sie sich im [internen Bereich](https://input.i14y.admin.ch) der Plattform ein
2. Klicken Sie oben rechts auf das Personensymbol
3. Kopieren Sie das technische Token
4. Geben Sie dieses Token bei Ihren Anfragen an die API mit

### Maschine-zu-Maschine-Token (M2M-Token)

{{<alert title="Wann benötigen Sie einen M2M-Token?" color="info" >}}

Ein Maschine-zu-Maschine-Token ist nötig, wenn Sie:
- Den Bezug oder die Publikation von Metadaten vollständig automatisieren möchten.
- Skripte oder Anwendungen betreiben, die regelmässig und automatisiert auf die API zugreifen.
- Keine manuelle Eingabe des User-Tokens bei jedem API-Aufruf durchführen möchten.

**Vorgehen zur Beantragung eines M2M-Tokens:**

1. Senden Sie eine E-Mail an die [Interoperabilitätsstelle](mailto:i14y@bfs.admin.ch) mit folgenden Informationen:
   - kurze Erklärung zum Usecase
   - Name der Organisation
   - erwartetes Zugriffsvolumen (ungefähre Anzahl API-Aufrufe)

2. Die Interoperabilitätsstelle liefert Ihnen anschliessend:
   - den Namen eines technischen Nutzers
   - ein Passwort
   - einige Zeilen Code

3. Mit diesen Informationen kann Ihr Skript automatisiert ein gültiges Token beziehen.

{{</alert>}}  

## Partner-API: Endpunkte zur Publikation von Metadaten

Die Partner-API stellt verschiedene Endpunkte zur Verfügung, um Metadaten zu erstellen und zu aktualisieren. Nachfolgend eine Übersicht über die wichtigsten Endpunkte:

| Ressource | Methode | Endpunkt | Beschreibung | Erforderliche Felder |
|-----------|---------|----------|--------------|---------------------|
| **Datensätze** | POST | `/datasets` | Erstellt einen neuen DCAT-Datensatz | `accessRights`, `description`, `publisher`, `title` |
| | PUT | `/datasets/{datasetId}` | Aktualisiert einen bestehenden DCAT-Datensatz | - |
| **Datenservices** | POST | `/dataservices` | Erstellt einen neuen Datenservice | `accessRights`, `description`, `publisher`, `title` |
| | PUT | `/dataservices/{dataServiceId}` | Aktualisiert einen bestehenden Datenservice | - |
| **Behördenleistungen** | POST | `/publicservices` | Erstellt eine neue Behördenleistung | `description`, `identifier`, `name`, `publisher` |
| | PUT | `/publicservices/{publicServiceId}` | Aktualisiert eine bestehende Behördenleistung | - |
| **Konzepte** | POST | `/concepts` | Erstellt ein neues Konzept (CodeList, Date, Numeric, String) | Je nach Konzepttyp |
| | PUT | `/concepts/{conceptId}` | Aktualisiert ein bestehendes Konzept | - |
| **Katalogeinträge** | POST | `/catalogs/{catalogId}/records` | Erstellt einen neuen Katalogeintrag | - |
| | PUT | `/catalogs/{catalogId}/records/{recordId}` | Aktualisiert einen bestehenden Katalogeintrag | - |

{{<alert title="Detaillierte API-Beschreibung" color="success" >}}
Ausführliche Informationen zu den Request- und Response-Strukturen, Parametern und Beispielen finden Sie in der [Partner API - Swagger UI](https://apiconsole.i14y.admin.ch/partner/v1/index.html).
{{</alert>}}

Möchten Sie die I14Y-API nutzen? Wie Sie dabei vorgehen können, wird in frei verfügbaren Tutorials dokumentiert. Im [Github-Repository](https://github.com/I14Y-ch/tutorials) stehen zwei Schritt-für-Schritt-Anleitungen in Jupyter-Notizbüchern zur Verfügung, die dokumentieren, wie die Partner- und öffentlichen APIs mit Python und der Requests-Bibliothek genutzt werden.

Genügen die aktuell zur Verfügung stehenden Schnittstellen nicht, damit Sie Ihre Arbeiten erledigen können? In diesem Fall kontaktieren Sie das [I14Y-Team](mailto:i14y@bfs.admin.ch). Dieses hat Zugang zu zahlreichen weiteren Endpunkten. Da sich diese jederzeit noch ändern können, werden sie noch nicht öffentlich publiziert. 
