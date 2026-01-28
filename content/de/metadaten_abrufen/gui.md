---
title: Über die Weboberfläche
slug: gui
weight: 10
type: docs
translationKey: metadata-retrieval-gui
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, GUI, Daten abrufen, Datenbezug, beziehen, abrufen]
---

Auf der öffentlich zugänglichen Oberfläche der Interoperabilitätsplattform I14Y sind jene Metadaten zu finden, die von den _Local Data Stewards_ oder der Interoperabilitätsstelle freigeschaltet worden sind. Um zur Übersichtsseite zu den Datensätzen, elektronischen Schnittstellen und Behördenleistungen zu gelangen, klicken Sie auf die Kachel "Katalog durchsuchen". Um zur Übersichtsseite mit den Konzepten -- zum Beispiel den Codelisten -- zu gelangen, klicken Sie auf "Konzepte".

{{<alert title="Hier finden Sie die Einträge der eigenen Organisation" color="success">}}

Falls Sie die internen Datenangebote Ihrer Organisation suchen, loggen Sie sich über den Knopf oben rechts ein. Sie werden in den privaten Bereich der Plattform weitergeleitet. Klicken Sie anschliessend auf "Katalog verwalten" oder auf "Konzepte verwalten". Nun sehen Sie -- zusätzlich zu allen öffentlich publizierten Angeboten -- die (noch) nicht veröffentlichten Einträge Ihrer eigenen Organisation. 

{{</alert>}}

**Suche:**  Dank der Suchfunktion finden Sie den gewünschten Eintrag rasch -- sofern der betreffende Suchbegriff im Titel- oder Beschreibungsfeld vorkommt oder als Schlüsselwort hinterlegt ist. Bei der Suche können Boolesche Operatoren wie _AND_ und _OR_ sowie ein Stern (\*) als Platzhalter verwendet werden. Eine Suche nach _Unternehmens*daten_ findet also auch den Metadateneintrag zu _Unternehmensstammdaten_. Sie können nach einem mehrteiligen Ausdruck suchen, indem Sie die einzelnen Worte mit Anführungszeichen gruppieren. Die Gross- und Kleinschreibung wird bei der Suche nicht berücksichtigt. 

**Filter:** Im Katalog-Bereich lässt sich die Auswahl mit diversen Filtern eingrenzen. Direkt unter dem Suchfeld kann ausgewählt werden, ob ausschliesslich Datensätze, APIs oder Behördenleistungen angezeigt werden sollen. Zusätzlich stehen in der linken Spalte zahlreiche weitere Filter zur Verfügung. So lässt sich die Suche etwa auf eine Herausgeberorganisation beschränken. Mit dem Statusfilter können die Resultate etwa auf Datenangebote eingegrenzt werden, die einem Standard entsprechen, und mit dem Filter Zugriffsrechte etwa auf öffentlich verfügbare Daten. Es ist zudem möglich, die Resultate nach dem Thema des Datenangebots zu filtern. Dank des Formatfilters kann die Auswahl auf Datensätze eingegrenzt werden, für die eine Distribution in einem spezifischen Dateiformat vorliegt. 

| Filtername | Auswahlmöglichkeiten | Bemerkung |
| --- | --- | --- |
| Herausgeber | Zur Auswahl stehen sämtliche Organisationen, die Informationen zu mindestens einem Datensatz, einer API oder einer Behördenleistung öffentlich publiziert haben. Wer eingeloggt ist, sieht zudem allfällige interne Einträge der eigenen Organisation. |
| Status | Zur Auswahl stehen sämtliche Status, die in den zur Auswahl stehenden Einträgen mindestens einmal gesetzt worden sind. Mögliche Ausprägungen: Initial, Kandidat, Registriert, Qualifiziert, Standard, Abgelöst, Zurückgezogen. Details zu den einzelnen Status sind unter [Workflow](/handbook/de/gouvernanz/arbeitsablauf) zu finden. |
| Zugriffsrechte | Diese Angabe beschreibt, ob die beschriebenen Daten ohne Einschränkungen verfügbar sind, ob sie unter gewissen Bedingungen eingesehen werden dürfen oder ob sie nicht öffentlich zugänglich sind. Zur Auswahl stehen sämtliche Informationen zu den Zugriffsrechten, die in den zur Auswahl stehenden Einträgen mindestens einmal gesetzt wurden. Mögliche Ausprägungen: Nicht öffentlich, Eingeschränkt, Öffentlich. |
| Themen | Zur Auswahl stehen thematische Klassifizierungen, die anhand der vom Normierungsgremium eCH definierten Kernaufgaben der Schweizer Behörden (siehe Dokument [E-Government-Standards](https://www.ech.ch/sites/default/files/dosvers/hauptdokument/BEST_d_DEF_2014-06-12_eCH-0122_V1-0_eGovCH-Grundlagen.pdf) auf Seite 13) erarbeitet worden sind. Die betreffende [Themenliste](https://www.i14y.admin.ch/de/concepts/08da58dc-4dc8-f9cb-b6f2-7d16b3fa0cde) steht auf I14Y als Konzept zur Verfügung. Sie kann weiterverwendet werden. |
| Formate | Angezeigt werden alle Formate, für die in den zur Verfügung stehenden Einträgen mindestens eine Distribution zur Verfügung steht. Detailinformationen zur Liste mit den Formaten sind im [Anhang unter Eingabefelder](/handbook/de/anhang/eingabefelder) zu finden. Zur Verfügung stehen die Dateiformate, die in einer [Liste der europäischen Union](https://op.europa.eu/en/web/eu-vocabularies/dataset/-/resource?uri=http://publications.europa.eu/resource/dataset/file-type#) enthalten sind. |
{.gui}

## Anzeigen der Metadaten

Ein Klick auf einen gefunden Eintrag öffnet die Detailinformationen dazu. Handelt es sich beim betreffenden Datenangebot um eine __elektronische Schnittstelle (API)__, wird ausschliesslich die Beschreibung angezeigt. Diese beinhaltet unter anderem die Adresse des Endpunkts sowie einen Link zur ausführlichen technischen Dokumentation. Im Weiteren ist ersichtlich, wer die API anbietet und welches die gesetzlichen oder technischen Grundlagen fürs betreffende Angebot sind. Oben rechts wird der Status des Eintrags auf I14Y eingeblendet. Mehr Informationen zur Status-Verwaltung sind im Teil [Rollen und Prozesse](/handbook/de/gouvernanz/arbeitsablauf) zu finden.  

![Screenshots I14Y](/handbook/img/i14y_datensatz.png) 

Bei einem __Datensatz__ werden nebst den normalen Kataloginformationen allenfalls zusätzliche Register eingeblendet. Angezeigt werden lediglich jene Register, für die Herausgeberinnen und Herausgeber Informationen erfasst haben.

__Inhalt:__ Im Register Inhalt sind Inhalte wie eine verwendete Codeliste zu finden. Sind die Werte in einer anderen Sprache gefragt, wird die entsprechende Sprache rechts oben ausgewählt. Bei einzelnen Datensätzen wie jener zur Schweizer Berufsnomenklatur stehen zusätzliche Filtermöglichkeiten zur Verfügung. 

__API:__ Übers Register API lässt sich die betreffende Codeliste exportieren. Bei verschachtelten Codelisten kann bestimmt werden, ob eine bestimmte Hierarchiestufe (einstufiger Export) oder ein mehrstufiger Export inklusive der Angaben zur Hierarchie gefragt ist. Auf Wunsch können auch Annotationen eingeschlossen werden, die zusätzliche Metadaten enthalten. Als Dateiformate stehen CSV und XLSX zur Verfügung. Sobald der Export konfiguriert ist, wird unterhalb des Eingabefeldes ein Weblink eingeblendet. Über diesen kann die Codeliste bezogen werden. Die Exportlinks bleiben stabil und eignen sich damit auch fürs maschinelle Auslesen von Codelisten. Weiterführende Möglichkeiten bieten die elektronischen Schnittstellen. Angaben dazu sind im [Kapitel zur API](/handbook/de/metadaten_abrufen/api) zu finden. 

__Distributionen:__ I14Y stellt ausschliesslich Metadaten zur Verfügung. Die Herausgeberinnen und Herausgeber der Daten können aber oft nachgefragte Exporte ihrer Daten verlinken. Diese Direktverbindungen zu den eigentlichen Daten werden im Register Distributionen eingeblendet. Ein Klick auf einen solchen Link lädt die Daten direkt von den Servern der betreffenden Organisation. Die Datenexporte können in unterschiedlichen Formen und Formaten vorliegen. Auch elektronische Schnittstellen (APIs) sind Distributionen eines Datensatzes und können hier integriert werden.  

{{<alert title="So lesen Sie CSV-Daten in Microsoft Excel ein" color="success">}}

Die Interoperabilitätsplattform I14Y bietet einen Export im maschinenlesbaren CSV-Format an. Die Werte werden mit Kommas getrennt. Als Zeichensatz wird der weit verbreitete Standard UTF-8 verwendet. 

Soll eine CSV-Datei in Microsoft Excel unter Windows eingelesen werden, ist ein Umweg nötig. Um die Datei etwa in Excel 2021 bearbeiten zu können, wird sie zuerst heruntergeladen. Nun wird eine neue Tabelle in Excel generiert. Wählen Sie dann im Menu den Punkt "Daten" aus. Klicken Sie auf "Daten abrufen", dann auf "Aus Datei" und schliesslich auf "Aus Text/CSV" an. Im Import-Fenster stellen Sie den "Dateiursprung" auf UTF-8 um. Und als Trennzeichen wählen Sie das Komma. 

{{</alert>}}