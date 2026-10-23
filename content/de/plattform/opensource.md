---
title: Open-Source-Software
slug: opensource
translationKey: opensource
weight: 40
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, Open-Source-Software, OSS]
---

Der Quellcode der Interoperabilitätsplattform I14Y steht als Open-Source-Software (OSS) zur Verfügung. Das erlaubt es Interessierten, den Programmcode genau zu prüfen. Sie können die Software auch ausführen, etwa um ihre eigene I14Y-Instanz zu betreiben. Darüber hinaus können sie den Code anpassen sowie integral oder auszugsweise in ihren eigenen Projekten verwenden. 

{{< alert color="success" title="Was ist Open-Source-Software?" >}}
Bei Open-Source-Software kann der Programmcode von allen eingesehen, angepasst und weiterverwendet werden. So lassen sich beispielsweise Sicherheitsaudits durchführen. Es können neue Funktionen entwickelt werden, die gegebenenfalls ins Hauptprojekt zurückfliessen. Zudem ist es möglich, eine unabhängige Kopie, einen sogenannten _Fork_, zu erstellen. Dadurch sinkt die Abhängigkeit von einem einzelnen Softwareanbieter. Weit verbreitete Beispiele für Open-Source-Software sind das Betriebssystem Linux, der Webbrowser Firefox, die Datenbank PostgreSQL und die Programmiersprache Python.

{{< /alert >}}

Die Veröffentlichung von I14Y als Open-Source-Software erfolgt im Einklang mit dem Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG, Art. 9](https://www.fedlex.admin.ch/eli/cc/2023/682/de#art_9)). Der Open-Source-Artikel verlangt, dass von Bundesbehörden entwickelter Code zugänglich gemacht wird, soweit keine überwiegenden rechtlichen oder sicherheitsrelevanten Gründe gegen eine Veröffentlichung sprechen. Für die praktischen Arbeiten der Publikation wurde auf die [Leitfäden Open-Source-Software](https://www.bk.admin.ch/de/open-source-software-oss) abgestellt, die die Bundeskanzlei publiziert hat. 

## Nutzung des Angebots

Der Code der Interoperabilitätsplattform I14Y wird im Repository unter [https://github.com/metadata-swiss/I14Y](https://github.com/metadata-swiss/I14Y) zur Verfügung gestellt. Dort ist auch eine ausführliche technische Dokumentation zu finden. Darin wird beschrieben, wie die Software konfiguriert und in Betrieb genommen werden kann. 

Der Code der Interoperabilitätsplattform I14Y wird unter der [MIT-Lizenz](https://opensource.org/licenses/MIT) veröffentlicht. Diese ist sehr permissiv: Sie erlaubt die Nutzung, Anpassung, Weitergabe und kommerzielle Verwertung des Programmcodes ohne weitere Einschränkungen. Einzige Bedingung ist, dass die ursprünglichen Lizenzhinweise in Kopien oder abgeleiteten Versionen erhalten bleiben.

Der Quellcode wird im aktuellen Stand ohne jegliche Gewährleistung bereitgestellt: Das BFS übernimmt keine Haftung für direkte oder indirekte Schäden, Datenverluste, Betriebsunterbrüche oder Folgeschäden, die aus Installation, Betrieb, Anpassung oder Weiterverwendung der Software entstehen. Die Verantwortung für einen sicheren Betrieb, für die Konfiguration, Wartung, Compliance und für das Risikomanagement liegt vollständig bei den nutzenden Organisationen oder Personen. Das BFS leistet ausserdem keinen Support zur Installation und zum Betrieb der Plattform ausserhalb der eigenen Infrastruktur. 

Die Entwicklungsressourcen des BFS werden auf das Nachfolgeprojekt metadata.swiss fokussiert. Teile des Codes von I14Y fliessen dort ein. Dank der Publikation des Codes der aktuellen Interoperabilitätsplattform wird sichergestellt, dass die bisherigen Arbeiten sowohl verwaltungsintern als auch durch externe Akteure einfach wiederverwendet werden können. 

I14Y wird ab Ende 2027 keine neuen Funktionen mehr erhalten, die nicht für das Nachfolgeprojekt metadata.swiss relevant sind. Entsprechend können _Pull Requests_ mit funktionalen Erweiterungen ab Herbst 2027 in der Regel nicht mehr geprüft und integriert werden. Für grössere eigenständige Weiterentwicklungen wird empfohlen einen Fork zu erstellen.