---
title: News
slug: news
weight: 90
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Nachrichten, News, Neuigkeiten]
---

{{<alert title="Bleiben Sie stets auf dem Laufenden" color="success" >}}

Möchten Sie über neue Funktionen und Angebote auf der Interoperabilitätsplattform I14Y informiert werden? Dann folgen Sie der I14Y auf dem sozialen Netzwerk [LinkedIn](https://www.linkedin.com/showcase/103890166/). Gerne können Sie auch das Newsmail abonnieren. Drei bis viermal pro Jahr erhalten Sie per E-Mail eine Zusammenstellung der neusten Entwicklungen bei I14Y. Um das Newsmail kostenlos zu abonnieren, besuchen Sie den [Abodienst des Bundesamts für Statistik](https://www.bfs.admin.ch/bfs/de/home/dienstleistungen/kontakt/newsmail-abonnement.html) und wählen Sie "Interoperabilitätsplattform I14Y" aus. 

{{</alert>}}

## Neuer M2M-Zugang: Metadaten automatisiert mit I14Y synchronisieren
*12.05.2025*

Bislang mussten die Metadaten der Datensätze manuell in I14Y eingegeben werden – ein aufwändiger Prozess, der Ressourcen bindet und fehleranfällig ist. Neu können die Organisationen die Metadaten ihrer Datensätze komplett automatisiert importieren und pflegen. Das ist ein grosser Meilenstein für I14Y und ein wichtiger Schritt in Richtung einer effizienten Verwaltung. Diese Möglichkeit ist sehr interessant für jene Organisationen, die bereits eigene Datenkataloge pflegen und diese mit I14Y verbinden möchten. Für die Machine-to-Machine-Kommunikation (M2M) wird ein spezieller Zugangstoken benötigt. Damit können Metadaten über die API auf I14Y erfasst und publiziert werden, ohne dass eine manuelle Arbeit nötig ist. Eine solche Anbindung ist auch dann sinnvoll und sehr interessant, wenn regelmässig Metadaten auf I14Y geschrieben und aktualisiert werden sollen.
Zu diesem Zweck stellen wir eine Beispielanwendung als technische Vorlage (Musterrepository) zur Verfügung, mit der sich die automatisierte Anbindung an I14Y einfach realisiert werden kann. Sie ermöglicht nicht nur den Import von Datensätzen, sondern auch deren automatische Aktualisierung in festgelegten Intervallen – zum Beispiel jede Nacht. So bleiben die Informationen aktuell, ohne dass man sie manuell nachführen muss. Das reduziert den Aufwand deutlich und verbessert die Datenqualität.
 
Für einmalige Importe und Exporte über die API genügt weiterhin der etablierte Prozess über das Token, das man nach dem Login per Klick auf das Personensymbol oben rechts erhält.
 
Bei Interesse oder Fragen zur M2M-Kommunikation haben, kontaktieren Sie uns am besten per Mail an i14y@bfs.admin.ch.

## Ein Tutorial für den automatischen Datenaustausch
*12.05.2025*

Wie kann man mit Python auf die öffentlichen und Partner-APIs von I14Y zugreifen? Ein neues interaktives Tutorial erklärt Schritt für Schritt, wie das geht – inklusive konkreter Beispiele für alle API-Endpunkte. Es zeigt, wie man Daten automatisiert abrufen, importieren oder aktualisieren kann.
Das Tutorial kann auf zwei Wegen genutzt werden: Lokal ausführen – einfach von GitHub herunterladen oder direkt im Browser starten – ohne Installation mit JupyterLite.

Zur erklärenden GitHub-Seite: [I14Y-ch/tutorials](https://github.com/I14Y-ch/tutorials)

Zum Tutorial: JupyterLite [JupyterLite](https://i14y-ch.github.io/tutorials/lab/index.html)

## Strukturen von Datensätzen auf I14Y beschreiben – was sich ändert
*12.05.2025*

{{< figure src="/handbook/img/news/structure.png" alt="Grafik Struktur" width="125px" class="float-left img-news-thumb" >}}

Die heutige flache Struktur der Datensätze auf I14Y wird in den nächsten Wochen schrittweise durch eine hierarchische Struktur ersetzt. Das zukünftige Modell beruht auf Linked Data – mit Klassen, Attributen und Relationen, gespeichert im RDF/TTL-Format.  
In rund drei Wochen werden im internen Katalog neue, komplexere Datenmodelle im RDF/TTL-Format eingeführt. Bestehende Strukturen bleiben vorläufig sichtbar, können aber nicht mehr bearbeitet werden. In etwa sechs Wochen ersetzen die neuen Strukturen vollständig die alten – inklusive graphischer Darstellung und klarer Verlinkung zu Konzepten. 
Wichtig: Organisationen die Beschreibungen von Datensätzen mit einer Struktur publiziert haben, brauchen nicht aktiv zu werden. Die Interoperabilitätsstelle wird die bestehenden Strukturen in die neue Form überführen. Für Änderungen in der Zeit, in der die Strukturen nicht editiert werden können, kann das I14Y-Team kontaktiert werden.

## Das BLW startet mit Beschreibung von Landwirtschaftsdaten
*12.05.2025*

{{< figure src="/handbook/img/news/landwirtschaft.jpg" alt="Grafik Landwirtschaft" width="125px" class="float-left img-news-thumb" >}}

Das Bundesamt für Landwirtschaft (BLW) hat begonnen, seine Datenelementkonzepte und Datensätze auf I14Y zu beschreiben – wir freuen uns sehr über diese Initiative!
Erfasst wurden unter anderem Konzepte zu Direktzahlungen, Düngern, Futtermitteln, Flächenkategorien, Labels, Stallsystemen und Aquakultur-Betrieben. Ergänzt werden diese durch zwei Datensätze: [Direktzahlungskultur bzw. Hauptkulturen](https://www.i14y.admin.ch/de/catalog/datasets/BLW_DS_DZ_CROP/description) und [Pflanzensorten in der Schweiz](https://www.i14y.admin.ch/de/catalog/datasets/BLW_DS_VARIETIES/description).

Die Beschreibungen helfen Fachleuten, Verwaltungsstellen und der interessierten Öffentlichkeit, landwirtschaftliche Daten leichter zu finden und besser einzuordnen.
Durch die strukturierte Beschreibung von Konzepten und Datensätzen wird nicht nur die Wiederverwendbarkeit dieser erhöht, sondern auch die Harmonisierung landwirtschaftlicher Daten vorangetrieben – ein zentraler Beitrag zur Umsetzung des Once-Only-Prinzips in der Verwaltung.

## Wertvolle Rückmeldungen aus der Praxis
*12.05.2025*

Der Blick von aussen hilft, das eigene Produkt zu verbessern. Acht aktive Local Data Stewards haben dem I14Y-Team in Nutzerinterviews Einblick in ihre Erfahrungen mit der Metadatenerfassung gegeben.
Das Fazit fällt grundsätzlich positiv aus: Die Erfassung gelingt gut, und die Möglichkeiten der Plattform werden geschätzt. Verbesserungspotenzial sehen die Befragten vor allem bei der kontextbezogenen Unterstützung beim Ausfüllen sowie bei der Filterung der eigenen Datensätze.
Einige der genannten Punkte wurden bereits aufgenommen, andere werden schrittweise in die Weiterentwicklung der Plattform einfliessen. 
Zur Erinnerung: Verbesserungsvorschläge können jederzeit über [Github](https://github.com/I14Y-ch/feature-requests) eingereicht werden.

## Effizienter Zugang zur I14Y-API mit R
*02.04.2025*

{{< figure src="/handbook/img/news/r-konsole.png" alt="Grafik R-Konsole" width="125px" class="float-left img-news-thumb" >}}

Ein durchdachtes R-Paket erleichtert den Zugriff auf die API der Interoperabilitätsplattform I14Y. Ein begleitendes Tutorial zeigt zudem, wie Metadaten direkt in der R-Konsole genutzt werden können. Drei Fragen an Félix Luginbuhl, der das R-Paket in Eigenregie entwickelt hat. 

*Félix Luginbühl, Sie haben eine R-Bibliothek entwickelt, die den Zugang zur elektronischen Schnittstelle von I14Y erleichtert. War ein bestimmtes Problem oder eine Herausforderung der Auslöser?*

Für ein Projekt benötigte ich Zugriff auf bestimmte Daten der Interoperabilitätsplattform. Normalerweise arbeite ich mit der Skriptsprache R. Sie ermöglicht es die Bearbeitungsschritte und die Analysen transparent und replizierbar zu machen. Daher habe ich ein Skript geschrieben, das die Metadaten über die API abruft. Angesichts der Bedeutung von I14Y und der zunehmenden Verbreitung der Programmiersprache R in der Schweiz dachte ich, dass eine Bibliothek für die Community nützlich sein könnte. Also machte ich mich daran, diese neue Bibliothek ehrenamtlich zu entwickeln.

*Welche Lücke schliesst Ihre R-Bibliothek?*

Dank der R-Bibliothek können Nutzerinnen und Nutzer Metadaten von I14Y abrufen – auf ähnliche simple Weise, wie sie Daten aus anderen Quellen beziehen. Dabei brauchen sie sich nicht um technische Details der API-Calls zu kümmern, sondern können die vertraute R-Syntax verwenden. Die Metadaten lassen sich zudem einfach mit den eigentlichen Daten des Bundesamts für Statistik kombinieren, wie sie sich mit meinem R-Paket namens «BFS» beziehen lassen. Beide Pakete biete ich als Opensource-Code an. 

*Welche Überlegungen oder Erfahrungen haben Sie dazu motiviert, der Community nicht nur das Paket, sondern auch ein Tutorial zur Verfügung zu stellen?*

Bei der Entwicklung der Bibliothek hatte ich vor Augen, alles direkt von der R-Konsole aus realisieren zu können: Suche im I14Y-Katalog, Zugriff auf die Daten sowie auf andere Identifikatoren, um weitere ergänzende Daten finden zu können. Ich habe den gesamten Prozess dokumentiert. Ich habe auch ein Beispiel für die Kombination mit einer Datenbank des Bundesamtes für Statistik gegeben. Werfen Sie einen Blick in die Online-Dokumentation unter [www.felixluginbuhl.com/I14Y](https://felixluginbuhl.com/I14Y). Fragen oder Feedback sind willkommen! 

## Automatisch statt manuell: Datensatzbeschreibungen effizient auf I14Y laden
*04.03.2025*

{{< figure src="/handbook/img/news/grafik_api.png" alt="Grafik API" width="125px" class="float-left img-news-thumb" >}}

Ab sofort können Beschreibungen zu Datensätzen automatisiert auf I14Y hochgeladen werden – dank eines neuen Endpunkts der elektronischen Schnittstelle (API). Mit einem einfachen POST-Request lassen sich Datensatzbeschreibungen erstellen, inklusive Angaben zu allfälligen Distributionen. Der Eintrag kann anschliessend über die Weboberfläche überprüft und freigegeben werden. Alternativ lässt sich der Status per PUT-Request direkt aus einem Skript heraus ändern und publizieren.  

Die technischen Spezifikationen zu den neuen Endpunkten sind im Swagger zur Partner-API dokumentiert. Zudem steht ein Tutorial mit Anwendungsbeispielen zur Verfügung.  

Alle Informationen zur I14Y-API sind unter [apiconsole.i14y.admin.ch](https://apiconsole.i14y.admin.ch) zu finden. 

## Ein Code für alle Fälle: Medizinische Daten strukturiert erfassen
*04.03.2025*

{{< figure src="/handbook/img/news/medical.jpg" alt="Grafik digitalisierte Medizin" width="125px" class="float-left img-news-thumb" >}}

In allen Schweizer Spitälern müssen Diagnose- und Behandlungsdaten einheitlich erfasst werden. Dafür kommen die Klassifikationen ICD-10 (Diagnosen) und CHOP (Untersuchungen & Behandlungen) zum Einsatz. Die aktuellsten Versionen sind auf I14Y beschrieben, und die Codelisten können als JSON und CSV – sowie per API – exportiert werden. Direkte Links: [ICD-10](https://www.i14y.admin.ch/de/catalog/concepts/08dd2e54-00fb-efc5-b7cd-14f5c7d2272d) und [CHOP](https://www.i14y.admin.ch/de/catalog/concepts/08dd2e3a-d99e-d56f-9c1c-5a7c5733f1a6).

## Gelebte Datengouvernanz
*04.03.2025*

{{< figure src="/handbook/img/news/lds_meetup.jpg" alt="Foto Treffen der Local Data Stewards" width="125px" class="float-left img-news-thumb" >}}

Einige Verwaltungseinheiten nutzen ausschliesslich die Interoperabilitätsplattform I14Y, während andere auf eine spezialisierte Katalogsoftware setzen, die dereinst mit I14Y verbunden werden soll: An einem vom I14Y-Team organisierten Treffen tauschten sich Local Data Stewards aus verschiedenen Bundesämtern und Kantonen über ihre Vorgehensweisen bei der Inventarisierung und Harmonisierung ihrer Datensätze aus. Sie diskutierten, wie Datenharmonisierung vorangetrieben werden kann, wie Datengouvernanz bei ihnen gelebt wird. Und sie gaben einander praktische Tipps zur Nutzung von I14Y. Wir von der Interoperabilitätsstelle bedanken uns für den regen und erkenntnisreichen Austausch – und freuen uns schon auf das nächste Treffen im Frühsommer. 

## Jahresrückblick 2024
*11.12.2024*

2024 neigt sich dem Ende zu und wir blicken auf ein produktives Jahr zurück. So konnten wir einige ambitionierte Projekte erfolgreich umsetzen – zum Beispiel die Schaffung eines Input-Bereiches auf I14Y für manuell erfasste OGD-Metadaten. Dank diesem können die Daten mit einem Klick auf den Plattformen [opendata.swiss](https://opendata.swiss) und [I14Y.ch](https://i14y.admin.ch) veröffentlicht werden.

Im November haben wir die Benutzungsoberfläche von I14Y moderner und die Bedienung intuitiver gestaltet. Die bisher technisch bedingte Trennung zwischen «Katalog» und «Konzepte» wurde auf der Website aufgehoben. Die neue globale Suche ermöglicht die Suche in allen Metadaten – unabhängig von ihrem Typ. Die Ergebnisse werden übersichtlich in Registern (Datensammlungen, Behördenleistungen, APIs, Konzepte) dargestellt. Auch die Treffer der Metadatenportale Opendata und Geocat werden angezeigt. Zudem stellen wir mit dem November-Release Partnerorganisationen einen Endpunkt auf dem API-Gateway zur Verfügung, über den sie Beschreibungen von Datensammlungen veröffentlichen können. Alle Neuerungen werden seit diesem Jahr im [Changelog](https://i14y-ch.github.io/handbook/de/changelog/) des Handbuchs dokumentiert.

Das I14Y-Team arbeitet mit grossem Engagement an der kontinuierlichen Weiterentwicklung der Plattform und steht dabei in engem Austausch mit seinen Nutzerinnen und Nutzern. An Hackathons, bei informellen Treffen mit den Local Data Stewards oder im Projekt Basel+ werden die spezifischen Bedürfnisse unserer Nutzerinnen aufgenommen. Neue Anforderungen werden im neu geschaffenen Steuerungsausschuss diskutiert und priorisiert. Die Entwicklung von I14Y wird zurzeit massgeblich durch die Anforderungen des Bundesgesetzes über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben ([EMBAG](https://www.fedlex.admin.ch/eli/cc/2023/682/de)) gesteuert. Daraus ergeben sich aber Lösungen und Verbesserungen, von denen alle Nutzer und Nutzerinnen profitieren.

All diese Meilensteine konnten dank der Verstärkung unseres Teams erreicht werden; neue werden angepeilt. In den kommenden Monaten wird uns Lien Beroggi für die Dauer ihres Hochschulpraktikums unterstützen.

## Die Entwicklungsrichtung von I14Y transparent gemacht
*11.12.2024*

{{< figure src="/handbook/img/news/roadmap.png" alt="Symbolbild Roadmap" width="125px" class="float-left img-news-thumb" >}}

An welchen Neuerungen die Softwareentwicklerin und die Entwickler arbeiten, kann ab sofort auf der öffentlich publizierten [Roadmap](https://i14y-ch.github.io/handbook/de/plattform/roadmap/) verfolgt werden. Sie wird quartalsweise aktualisiert, wobei der unmittelbar bevorstehende Zeitraum besonders detailliert dargestellt wird. Wir arbeiten agil. Die Roadmap kann sich ändern. Es lohnt sich also, regelmässig vorbeizuschauen.

## Die I14Y mitgestalten
*11.12.2024*

Vorschläge für neue Funktionen können neu im Repository [Feature Request](https://github.com/I14Y-ch/feature-requests) auf GitHub eingereicht und diskutiert werden. Die Vorschläge werden von der Interoperabilitätsstelle, dem Ausschuss Nationale Datenbewirtschaftung sowie dem Steuerungsausschuss priorisiert. Wir freuen uns auf Ihre Vorschläge.

## Neue öffentliche API-Konsolen für die I14Y-API
*11.12.2024*

{{< figure src="/handbook/img/news/api.png" alt="Symbolbild API" width="125px" class="float-left img-news-thumb" >}}

I14Y bietet neu zwei OpenAPI-Konsolen (Swagger) an, die den Nutzerinnen und Nutzern den Zugang zur I14Y-API erleichtern. Die Konsolen sind dauerhaft verfügbar und dokumentieren die API-Funktionen übersichtlich.

- [Swagger für I14Y-Partnerorganisationen](https://apiconsole.i14y.admin.ch/partner/v1/index.html): Ermöglicht die Verwaltung organisationsinterner Metadaten. Eine Authentifizierung ist erforderlich. Über diese Endpunkte können Metadaten-Objekte erstellt und geändert werden.
[Swagger für öffentliche Metadaten](https://apiconsole.i14y.admin.ch/public/v1/index.html): Mit diesen Endpunkt lassen sich öffentlich publizierte Metadaten abrufen. Ein Login ist nicht erforderlich.

Die Konsolen werden kontinuierlich erweitert. Neue Endpunkte werden hinzugefügt, so dass der Bezug und die Verwaltung von Metadaten in Zukunft vollständig über API möglich sein wird.

### Neu im Team
*11.12.2024*

{{< figure src="/handbook/img/news/lien.jpg" alt="Porträt Lien Beroggi" width="125px" class="float-left img-news-thumb" caption="Quelle: BFS" >}}

Lien Beroggi unterstützt uns ein Jahr lang mit ihrem frisch erworbenen Universitätswissen. Ihre Arbeit dreht sich rund um die Themen Semantic Web, RDF und Linked Data. Drei Fragen an unsere Hochschulpraktikantin.

_War Interoperabilität ein wichtiges Thema in deinem Studium?_
Während meines Studiums der Wirtschaftsinformatik habe ich mich mit verschiedenen Aspekten des effizienten Informationsmanagements und der Systemintegration beschäftigt, einschliesslich des Datenaustauschs zwischen verschiedenen Systemen und der Bedeutung von Standards für eine reibungslose Kommunikation. Ausserdem habe ich spezielle Kurse über semistrukturierte Daten besucht, die mir einen Einblick in das semantische Web und verknüpfte Daten (Linked Data) gegeben haben. Jetzt, in meiner Rolle bei I14Y, kann ich dieses Wissen in einem realen Kontext anwenden, in dem Interoperabilität eine entscheidende Rolle spielt.

_Was begeistert dich an der I14Y?_ 
Zwei Aspekte machen dieses Praktikum besonders interessant. Erstens die Möglichkeit, mit einem dynamischen Team an einer sich kontinuierlich weiterentwickelnden Plattform zu arbeiten. Das ist eine sehr bereichernde Erfahrung, die es mir ermöglicht, praxisnah zu lernen und gemeinsam mit den Kolleginnen und Kollegen an innovativen Lösungen zu arbeiten. Zweitens die gesellschaftlichen Auswirkungen der Arbeit von I14Y: Die Interoperabilität und Zugänglichkeit von Daten sind entscheidend für die Verbesserung und Vereinfachung von Dienstleistungen für Bürgerinnen und Bürger, Unternehmen und Institutionen. Insbesondere verknüpfte Daten bieten ein enormes Potenzial, um bisher isolierte Informationen besser zugänglich und nutzbar zu machen.

_Was möchtest du in den nächsten Monaten erreichen?_ 
In den kommenden Monaten möchte ich mein Wissen über Linked Data und Interoperabilität vertiefen, um einen konkreten Beitrag zur Entwicklung von I14Y leisten zu können. Mein Ziel ist es, bei der Optimierung der Datenintegration zu helfen, insbesondere um den Informationsaustausch mit anderen Plattformen zu vereinfachen. Durch Fortschritte in diesen Bereichen hoffe ich, dass meine Arbeit dazu beitragen wird, die Effizienz und Qualität der Funktionen, die I14Y bietet, weiterzuentwickeln.

## Visualisierung der Mehrfachnutzung von Konzepten
*21.06.2024*

{{< figure src="/handbook/img/news/konzepte.png" alt="Symbolbild Datenkonzepte" width="250px" class="float-left img-news-thumb" >}}

Datensammlungen werden auf der I14Y detailliert beschrieben: Neben dem Titel und der herausgebenden Organisation, können auch Informationen zur Struktur erfasst werden. Eine Struktur besteht in der Regel aus mehreren Datenelementen. Und jedes Datenelement basiert auf einem Konzept – zuweilen auch (definierte) Variable oder Attribut genannt.

Ein Konzept auf der I14Y beschreibt klar und eindeutig die grundlegende Bedeutung und die Eigenschaften eines Datenelements, unabhängig vom Kontext, in dem es verwendet wird.

Auf der I14Y ist es neu möglich, auf einen Blick zu erkennen, wie oft ein bestimmtes Konzept in verschiedenen Datenelementen wiederverwendet wird. Wenn die Datenelemente Teil einer öffentlichen Datensammlung sind, wird diese genannt und verlinkt. Beispielsweise wird das [Konzept der Schweizer Kantone](https://www.i14y.admin.ch/de/concepts/08d94b89-bf4d-a423-8add-dde94d0cd1f4/description) derzeit in 122 Datenelementen verwendet. Beim Konzept der Schweizer Kantone handelt es sich um eine Codeliste.    

Mehr Informationen zu Datenelementen und Konzepten finden sich im Handbuch der I14Y: [Informationsmodell](https://i14y-ch.github.io/handbook/de/gouvernanz/informationsmodell/#datenelement).


## Ein API-Gateway für die sichere Verwaltung von Metadaten 
*21.06.2024*

{{< figure src="/handbook/img/news/api.png" alt="Symbolbild API" width="125px" class="float-left img-news-thumb" >}}

Die Entwicklung unseres API-Gateways ist nahezu fertig. Auf dem [API-Gateway](https://input.i14y.admin.ch/console/partner/v1/index.html) werden die elektronischen Schnittstellen der I14Y zur Verfügung gestellt, die über längere Zeit stabil bleiben werden. Das Angebot an Endpunkten wird in den nächsten Monaten stark ausgebaut. Der Gateway kann genutzt werden, um Metadaten zu beziehen, zu editieren oder auch zu veröffentlichen. Eine Authentifizierungsfunktion stellt sicher, dass nur berechtigte Benutzerinnen und Benutzer auf die Metadaten zugreifen und diese anpassen können. Mit dem API-Gateway soll in Zukunft auf Wunsch auch ein automatisierter Zugriff auf organisationsinterne Bereiche von Maschine zu Maschine ermöglicht werden. 

## Umfragen noch einfacher erstellen
*21.06.2024*

{{< figure src="/handbook/img/news/symbolbild_hackathon_2024.jpg" alt="Code-Editor mit Programmcode" width="250px" class="float-left img-news-thumb" >}}

Wer eine Online-Befragung durchführen möchte, benötigt ein entsprechendes Tool wie zum Beispiel [Limesurvey](https://community.limesurvey.org/). Mit der frei verfügbaren, webbasierten Software lassen sich auch komplizierte Umfragen zusammenstellen. Selbstverständlich ist es möglich, bei den einzelnen Fragen Auswahlmöglichkeiten zu hinterlegen. Soll eine lange Liste eingepflegt werden, ist aber oftmals viel Handarbeit nötig. 

Dank der I14Y soll es einfacher gehen: Beim [GovTech-Hackathon](https://hack.opendata.ch/event/68) von Mitte März haben fünf findige Entwickler die [Challenge der Interoperabilitätsstelle](https://hack.opendata.ch/project/1088) angenommen und in eineinhalb Tagen ein Plugin für die beliebte Umfragesoftware entwickelt. Dieses ruft die harmonisierten Codelisten von der I14Y ab, so dass sie mit wenigen Klicks Fragen zugeordnet werden können. Das Plugin vereinfacht und beschleunigt die Arbeit derjenigen, die eine Umfrage durchführen. Gleichzeitig stellt es sicher, dass weniger Fehler gemacht und die Werte einheitlich kodiert werden. Dadurch lassen sich die Daten später einfacher mit anderen Datensätzen kombinieren. 

Der Prototyp des Plugins ist im [Github-Bereich der Interoperabilitätsstelle](https://github.com/I14Y-ch/iSurvey) zu finden. Dort kann er ausprobiert und weiterentwickelt werden.

## Die Interoperabilitätsstelle hat einen neuen Chef
*21.06.2024*

{{< figure src="/handbook/img/news/i14y_fabrice_gouzi.png" alt="Porträt Fabrice Gouzi" width="125px" class="float-left img-news-thumb" >}}

Fabrice Gouzi, diplomierter Wirtschaftsinformatiker mit einem Executive Master of Business Administration, ist seit Beginn der Entwicklung der I14Y dabei. Am 1. April 2024 hat er die Leitung der Interoperabilitätsstelle übernommen. Drei Fragen.

*Fabrice, kannst Du uns in die Zeit zurückversetzen, als Du zum ersten Mal von der Idee einer Interoperabilitätsplattform gehört hast?* 

Gerne! Um ehrlich zu sein, war das Konzept einer solchen Plattform für mich abstrakt, aber ich war mir der Notwendigkeit und des Nutzens einer Datenharmonisierung sehr bewusst und wollte Teil der spannenden Entwicklung einer solchen Plattform sein.   

*Was sind die Prioritäten für die Interoperabilitätsplattform in den kommenden Jahren?*

Auf technischer Ebene entwickeln wir die notwendigen Funktionalitäten, damit die Nutzer auf Bundes-, Kantons- und Gemeindeebene von der Plattform profitieren können. Mit unseren Partnern in Kantonen und Bund pflegen wir diesbezüglich einen sehr guten Austausch. Inhaltlich müssen wir nun die Konzepte bereitstellen, die auf nationaler Ebene weitgehend wiederverwendet werden. Das ist eine langwierige, aber unerlässliche Arbeit. 

*Welche Funktion der I14Y ist zentral für die Standardisierung von Verwaltungsdaten?*
Es ist wichtig, dass die Konzepte der Datenelemente einfach beschrieben werden können und ihre Wiederverwendung erleichtert wird, insbesondere durch maschinenlesbare Formate. Die Benutzerinnen und Benutzer der Plattform müssen unsere Roadmap kennen und ihre Bedürfnisse über ein Steuerungsausschuss, das wir derzeit einrichten, einbringen können. Persönlich weiss ich, dass das gesamte IOS-Team sehr kompetent ist. Und alle sind überzeugt vom Mehrwert, den die Interoperabilitätsplattform für die Förderung der Digitalisierung in der Schweiz und die Mehrfachnutzung von Verwaltungsdaten bringen wird.

## Neue Eingabefelder für den Datenschutz
*20.02.2024*

{{< figure src="/handbook/img/news/datenschutz.jpg" alt="Symbolbild Datenschutz" width="250px" class="float-left img-news-thumb" >}}

Enthält eine auf der I14Y-Plattform beschriebene Datensammlung personenbezogene Daten? Und falls ja: Beinhalten die eigentlichen Fachdaten schützenswerte Informationen – etwa über die politische Einstellung, den Gesundheitszustand oder die religiöse Orientierung einer Person? Auf I14Y kann dies neu im Feld «Vertraulichkeit» dokumentiert werden. 

Auch die gesetzliche Aufbewahrungsfrist einer Datensammlung kann nun erfasst werden. Bei einmalig erhobenen Daten wird das genaue Datum angegeben, an dem sie gelöscht werden muss. Bei einer periodisch aktualisierten Datensammlung wird in einem Freitextfeld beschrieben, in welchem Intervall die Daten vom Datenbesitzer gelöscht werden, z.B. «fünf Jahre nach Ablauf des jeweiligen Kalenderjahres». 

Die neuen Felder «Vertraulichkeit» und «Aufbewahrungsfrist» sind im DCAT-Standard nicht vorgesehen, sondern werden zusätzlich angeboten. Sie müssen daher nicht zwingend ausgefüllt werden. Eine detaillierte Übersicht aller Eingabefelder der Interoperabilitätsplattform I14Y finden Sie hier.

## Bundesexterne Nutzerinnen und Nutzer gut integriert
*20.02.2024*

Mit dem Release vom 4. Dezember 2023 wurde die Interoperabilitätsplattform I14Y an [eIAM](https://www.eiam.swiss/) angebunden (zugänglich via CH-LOGIN oder IdP), damit die Nutzerprofile zusätzlich zum Verzeichnis der Bundesangestellten AdminDir auch dort beschrieben werden können. Bundesexterne Nutzerinnen und Nutzer können so als Konzeptverantwortliche angemeldet werden und aktiv an der Bewirtschaftung der Metadaten mitwirken. Diese Funktion verbessert die Zusammenarbeit zwischen bundesinternen und -externen Nutzenden auf der Interoperabilitätsplattform und vereinheitlicht die verschiedenen Anmeldemöglichkeiten.

## Die Zusammenarbeit mit den Kantonen und Gemeinden stärken
*20.02.2024*

Die I14Y-Plattform entwickelt sich zum nationalen Metadatenkatalog der Schweiz. Auch immer mehr Kantone und erste Gemeinde möchten die Plattform nutzen, um ihre Datenbestände zu inventarisieren. Der Kanton Basel-Stadt hat bei der [Digitalen Verwaltung Schweiz](https://www.digitale-verwaltung-schweiz.ch/) das Projekt Basel+ eingereicht, das die Bedürfnisse und Anforderungen der Kantone und Gemeinden an I14Y aufnimmt. Die Zusammenarbeit mit den Kantonen und Gemeinden ermöglicht es, gemeinsame Bedürfnisse in Bezug auf einen nationalen Datenkatalog zu identifizieren. Initiiert wurde das Projekt vom Kanton Basel-Stadt; in der Organisation sind derzeit auch die Kantone Aargau, Basel-Landschaft, Thurgau, Bern und Zürich sowie die Stadt Bern vertreten.

## Changelog – Releasenotes
*20.02.2024*

I14Y wird kontinuierlich weiterentwickelt. Mit jedem Release kommen neue Funktionen hinzu und werden Fehler behoben. Die wichtigsten Änderungen, Verbesserungen sowie Bugfixes werden neu im [Changelog im I14Y-Handbuch](https://i14y-ch.github.io/handbook/de/8_changelog/) beschrieben.	 	 

## Das I14Y-Team nimmt am GovTech Hackathon teil
*20.02.2024*

{{< figure src="https://opendata.ch/wordpress/files/2022/12/GoVTech_Hackthon_NL_2048x1150-1024x575.jpg" alt="Logo GovTech-Hackathon" width="250px" class="float-left img-news-thumb" >}}

Der [GovTech Hackathon](https://opendata.ch/events/govtech-hackathon-2024) geht in die zweite Runde. Am 15. und 16. März 2024 treffen sich Entwicklerinnen und Entwickler, Expertinnen und Experten sowie Interessierte aus Verwaltung, Wirtschaft und der Zivilgesellschaft in Zollikofen, um zusammen an konkreten Fragestellengen zu arbeiten. Gesucht sind Lösungen, um die digitalen Behördenleistungen einfach nutzbar, interoperabel und nachhaltig zu machen. Das I14Y-Team ist mit einem Challenge mit dabei. Was am Hackathon entsteht, wird auf der [OpenData.ch-Website publiziert](https://opendata.ch/projects/).

## Sicherer Zugang für alle – mit einem Klick
*06.12.2023*

{{< figure src="/handbook/img/news/kachel_bern.png" alt="eIAM-Kachel für den Kanton Bern" width="250px" class="float-left img-padding-right" >}}

Der Kanton Bern möchte I14Y nutzen, um ein internes Dateninventar zu pflegen und innerhalb des Kantons Codelisten auszutauschen. Voraussetzung ist, dass alle Kantonsangestellten auf einfache Weise auf den kantonsinternen Bereich der Plattform zugreifen können. Zudem darf dem Kanton kein grosser administrativer Mehraufwand entstehen: Neue Mitarbeiterinnen und Mitarbeiter sollen automatisiert erfasst und die Konten von austretenden Personen gelöscht werden.

Das I14Y-Team hat in enger Zusammenarbeit mit der Software-Anbieterin Bedag, dem Amt für Informatik und Organisation des Kantons Bern sowie dem Bundesamt für Informatik eine effiziente Lösung erarbeitet: Der kantonale Identitätsanbieter (IdP) wurde über eine elektronische Schnittstelle ans Zugriffs- und Berechtigungssystem der Bundesverwaltung (eIAM) angebunden. Der Kanton kann nun direkt aus seiner Benutzerverwaltung den Zugang zur Plattform freischalten oder sperren. Die Nutzerinnen und Nutzer können sich auf I14Y mit einem einzigen Klick auf die entsprechende Login-Kachel einloggen. 

Diese Lösung könnte auch von anderen Kantonen genutzt werden, die ihren Verwaltungsmitarbeiterinnen und -mitarbeitern den Zugang zur Interoperabilitätsplattform I14Y ermöglichen möchten. Es ist auch denkbar, dass die erarbeitete Lösung in Zukunft für die Anbindung der kantonalen IT-Infrastrukturen an andere Bundesplattformen verwendet wird.

## Wir lieben Konzepte
*06.12.2023*

{{< figure src="/handbook/img/news/konzepte.png" alt="I14Y-Symbol für Konzepte" width="250px" class="float-left img-news-thumb" >}}

Ein Konzept auf I14Y beschreibt ein Datenelement eindeutig und vollständig. Es kann in Form einer Zahl, einer Zeichenkette oder um eine Codeliste mit vordefinierten Werten vorliegen. Seit diesem Frühling können unsere Nutzerinnen und Nutzer Konzepte auf I14Y erfassen. Diese Möglichkeit wird zunehmend genutzt. Inzwischen wurden etwa 170 harmonisierte Konzepte veröffentlicht -- meist in Form von Codelisten. Die Zeiten, in denen jede Organisation ihre eigenen Codelisten pflegen musste, neigen sich dem Ende zu. Fortan lassen sich die von der zuständigen Stelle gepflegten Codelisten einfach über eine elektronische Schnittstelle beziehen.

## Grosse Ehre für I14Y
*06.12.2023*

{{< figure src="/handbook/img/news/egov-pokale.jpg" alt="Pokale des eGovernment-Wettbewerbs" width="250px" class="float-left img-news-thumb" >}}

I14Y des BFS hat im Finale des internationalen 22. eGovernment-Wettbewerbs in der Kategorie [Bestes Digitalisierungsprojekt](https://www.egovernment-wettbewerb.de/gewinner/gewinner-2023.html) den 2. Platz gewonnen. Rund 80 Projekte zur Modernisierung und Digitalisierung der Verwaltung hatten Behörden und öffentliche Organisationen aus Deutschland, Österreich und der Schweiz 2023 eingereicht. Mathias Born und Max Zurkinden von der Interoperabilitätsstelle haben die Auszeichnung in Berlin entgegengenommen; das ganze I14Y-Team freut sich sehr über die Auszeichnung.

## Erklärvideo zur Datenharmonisierung in der Schweiz
*18.04.2023*

Wie funktionieren das Once-Only-Prinzip und die Interoperabilitätsplattform I14Y? Wie hängt beides zusammen? Das 3-minütige Video «Mit der I14Y in die digitale Zukunft der Schweiz» erklärt es auf leicht verständliche Art und Weise.

{{< youtube_custom U0CpW1bNIdU >}}

## Das Handbuch zur Plattform ist online 
*07.08.2023*

{{< figure src="/handbook/img/news/handbuch.png" alt="I14Y-Symbol Handbuch" width="250px" class="float-left img-news-thumb" >}}

Wie kam die Interoperabiliätsplattform zu ihrem kryptischen Namen? Wer kann auf welche Metadaten zugreifen? Und wie muss ein bestimmtes Feld befüllt werden? Antworten auf Fragen wie diese finden Sie im neu publizierten I14Y-Handbuch. In einem ersten Teil der Online-Publikation wird erklärt, wie die Plattform dazu beiträgt, die administrativen Daten zu harmonisieren. In einem zweiten Teil sind die einzelnen Arbeitsabläufe Schritt für Schritt dokumentiert. Das Handbuch steht unter [handbook.i14y.admin.ch](https://handbook.i14y.admin.ch) zur Verfügung. Es wird laufend ergänzt. Gerne können auch Sie Textpassagen beisteuern. Wie das genau funktioniert, steht im Handbuch. 

## Neu auf I14Y: Konzepte
*07.08.2023*

{{< figure src="/handbook/img/news/konzepte.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Auf I14Y gibt es eine neue Kachel: [I14Y-Konzepte](https://www.i14y.admin.ch/de/concepts). In diesem Bereich stehen Ihnen beispielsweise Codelisten zur Verfügung -- inklusive einer detaillierten Beschreibung. Das Konzept beschreibt die in einem Datenelement enthaltenen Informationen eindeutig und vollständig. Es kann sich dabei um eine Zahl, eine Zeichenkette, ein Datum oder eine Codeliste handeln. Dank der Suchfunktion lässt sich das rasch wachsende Angebot an Konzepten einfach durchsuchen. Verwenden Sie in Ihren Datensammlungen – wenn immer möglich – bestehende Konzepte.

## I14Y-Chatbot
*07.08.2023*

{{< figure src="/handbook/img/news/chatbot.png" alt="I14Y-Symbol für den Chatbot" width="250px" class="float-left img-news-thumb" >}}

Unser [I14Y-Chatbot](https://www.i14y.admin.ch/de/labs/chatbot) beantwortet Fragen zur Datenharmonisierung im Allgemeinen sowie zur Interoperabilitätsplattform im Speziellen. Die generative künstliche Intelligenz benutzt als Hauptquelle das I14Y-Handbuch. In Zukunft wird der Chatbot auch einfache Fragen zu den auf I14Y publizierten Metadaten beantworten können. Obwohl der Chatbot vorerst mit deutschsprachigen Inhalten trainiert worden ist, kann er auch in anderen Sprachen Auskunft geben.

Beim I14Y-Chatbot handelt es sich um ein Experiment, das im Rahmen eines Teamtags entwickelt worden ist. Es ist möglich, dass der Chatbot «halluziniert»: Gelegentlich könnte er falsche Informationen liefern. Prüfen Sie deshalb alle Antworten genau.	 

## I14Y ist im Finale des 22. eGovernment-Wettbewerbs
*07.08.2023*

Dieses Jahr stehen 18 Behördenteams mit ihren Projekten zur Digitalisierung und Transformation der öffentlichen Verwaltung im Finale. Die Jury hat bereits gewählt – nun kann für den Publikumspreis abgestimmt werden. Nehmen Sie am [Online-Voting](https://www.egovernment-wettbewerb.de/online-voting/online-voting.html) teil und helfen Sie I14Y, den Publikumspreis zu gewinnen!

## Dank eIAM einfacher Zugriff auf die Interoperabilitätsplattform I14Y
*16.02.2023*

{{< figure src="/handbook/img/news/02_eiam.jpg" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Dank eIAM ist die Interoperabilitätsplattform I14Y nun für die Nutzerinnen und Nutzer aus Gemeinden, Kantonen, Institutionen und der Bundesverwaltung noch besser zugänglich. Einmal eingeloggt können sie auf der Administrationsoberfläche das Datenangebot ihrer Organisation einpflegen und bearbeiten.
eIAM ist das zentrale Zugriffs- und Berechtigungssystem der Bundesverwaltung für Webapplikationen und native Mobile Apps. Alle Nutzerinnen und Nutzer, die über ein eIAM-Konto oder ein CH-Login verfügen, können sich nun ganz einfach auf I14Y einloggen. Dank dieser Anbindung werden Kosten gespart und die Sicherheit erhöht. Nutzerinnen und Nutzer aus der Bundesverwaltung können sich weiterhin mit ihrer Smartcard anmelden.

## Neu auf I14Y: Gebäude- und Wohnungsstammdaten 
*16.02.2023*

{{< figure src="/handbook/img/news/03_ewg.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Die Stammdaten zu den Gebäuden und Wohnungen sind im I14Y-Metadatenkatalog beschrieben und stehen zur Wiederverwendung bereit. Die detaillierten Beschreibungen zur Datenstruktur vervollständigen die umfassende Liste der im Register verfügbaren Daten, tragen zu deren Transparenz bei und fördern die Wiederverwendung offizieller Standards. Die bei der Bereitstellung der Daten (MADD) im Register verwendete API ist im API-Verzeichnis  verfügbar. Möchten auch Sie Ihre Metadaten oder APIs auf der Interoperabilitätsplattform I14Y publizieren? Dann kontaktieren Sie uns i14y@bfs.admin.ch.

## Das BFS nimmt am GovTech Hackathon teil  
*16.02.2023*

{{< figure src="/handbook/img/news/01-i14y.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Der Bereich DTI der Bundeskanzlei führt am 23. und 24. März 2023 einen GovTech Hackathon in Zollikofen durch. Entwicklerinnen und Entwickler, Expertinnen und Experten sowie Interessierte aus Verwaltung, Wirtschaft und Zivilgesellschaft arbeiten zusammen an konkreten Problemen (Challenges) mit dem Ziel, digitale Behördenleistungen einfach nutzbar, interoperabel und nachhaltig zu gestalten. Das I14Y-Team ist natürlich dabei. 
	 
