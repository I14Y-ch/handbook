---
title: Open Source Software
slug: opensource
translationKey: opensource
weight: 40
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, Open Source Software, OSS]
draft: true
---

Der Quellcode der Interoperabilitätsplattform I14Y steht als _Open Source Software_ zur Verfügung. Interessierte können den Programmcode somit prüfen. Sie können ihn auch ausführen und  eine eigene Instanz der Plattform betreiben. Sie können den Code an ihre Anforderungen anpassen oder einzelne Teile davon in ihrer eigenen Software verwenden. 

{{< alert color="success" title="Was ist Open Source Software?" >}}
Bei Open Source Software (OSS) ist der Quellcode offen zugänglich. Personen mit dem entsprechenden Knowhow können prüfen, wie die Software funktioniert. Sie können den Code kopieren, anpassen und wieder veröffentlichen, solange die Lizenzbedingungen eingehalten werden. Beispiele für Open-Source-Projekte sind das Betriebssystem Linux, der Webbrowser Firefox, die Datenbank PostgreSQL und die Programmiersprache Python.
{{< /alert >}}

Die Veröffentlichung erfolgt im Einklang mit dem Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG, Art. 9](https://www.fedlex.admin.ch/eli/cc/2023/682/de#art_9)). Dieser Artikel verlangt, dass von Bundesbehörden entwickelter Code als Open Source Software zugänglich gemacht wird, soweit keine überwiegenden rechtlichen oder sicherheitsrelevanten Gründe gegen eine Veröffentlichung sprechen. Für die praktischen Arbeiten der Publikation wurde auf die [Leitfäden Open Source Software](https://www.bk.admin.ch/de/open-source-software-oss) abgestellt, die von der Bundeskanzlei publiziert worden sind. 

## Nutzung des Angebots

Der Code der Interoperabilitätsplattform I14Y wird unter der Lizenz [MIT](https://opensource.org/licenses/MIT) veröffentlicht. Diese ist sehr permissiv: Sie erlaubt die Nutzung, Anpassung, Weitergabe und kommerzielle Verwertung des Codes ohne weitere Einschränkungen. Einzige Bedingung ist, dass die ursprünglichen Lizenzhinweise in Kopien oder abgeleiteten Versionen erhalten bleiben.

Der Quellcode wird im aktuellen Stand ohne jegliche Gewährleistung bereitgestellt. Das BFS übernimmt keine Haftung für direkte oder indirekte Schäden, Datenverluste, Betriebsunterbrüche oder Folgeschäden, die aus Installation, Betrieb, Anpassung oder Weiterverwendung der Software entstehen. Die Verantwortung für sicheren Betrieb, Konfiguration, Wartung, Compliance und Risikomanagement liegt vollständig bei den nutzenden Organisationen.

## Nutzung des Software-Angebots

<details>
<summary><strong>Kurzanleitung: Bezug und Inbetriebnahme</strong></summary>

1. Repository klonen und lokale Entwicklungsumgebung gemäss technischer Dokumentation aufsetzen.
2. Abhängigkeiten installieren und die Anwendung lokal starten.
3. Authentifizierung und Berechtigungen konfigurieren:
	- Auf der vom Bund betriebenen Plattform wird weitgehend eIAM eingesetzt.
	- Für selbst betriebene Umgebungen kann beispielsweise Keycloak verwendet werden.
4. Konfiguration an eigene Infrastruktur- und Sicherheitsanforderungen anpassen.

</details>

## Weiterentwicklung und Betriebsperspektive

Die Entwicklungsressourcen des BFS werden auf das Nachfolgeprojekt metadata.swiss fokussiert. Konzepte und einzelne Codeteile von I14Y fliessen dort ein, die Umsetzung erfolgt jedoch grundsätzlich als Rewriting.

Die Open-Source-Verfügbarkeit von I14Y ist deshalb besonders wichtig: Sie stellt sicher, dass bisherige Investitionen weiterhin nutzbar bleiben, auch wenn der funktionale Schwerpunkt in ein Nachfolgevorhaben verlagert wird. Für bestehende oder neue Betreiberinnen und Betreiber schafft dies Planungssicherheit, weil die Grundlage für Wartung, Anpassung und eigenständige Weiterentwicklung offen zugänglich bleibt.

I14Y wird funktional ab Ende 2027 nicht mehr aktiv weiterentwickelt. Pull Requests mit funktionalen Erweiterungen können ab Herbst 2027 voraussichtlich nicht mehr geprüft und integriert werden. Für grössere eigenständige Weiterentwicklungen wird empfohlen, einen eigenen Fork aufzubauen und nachhaltig zu pflegen.

## Drei typische Anwendungsbereiche

1. Referenzimplementierung für interoperable Metadatenverwaltung
Nutzung des Codes als technische Vorlage für eigene Plattformen mit vergleichbaren Anforderungen.

2. Anpassung für organisationsspezifische Fachdomänen
Übernahme und Erweiterung der Lösung für kantonale, kommunale oder institutionsspezifische Datenräume.

3. Lern- und Innovationsbasis
Analyse von Architektur und Komponenten für Ausbildung, Prototyping und Wiederverwendung in neuen Vorhaben (z. B. metadata.swiss).