---
title: Konzepte erfassen
slug: konzepte
weight: 0
type: docs
keywords: [I14Y, I14Y-IOP, I14Y-Interoperabilitätsplattform, Konzepte, Codeliste, Codelisten, Datenelemente, Mehrfachnutzung, Publikation, publizieren, veröffentlichen]
---

![Symbolbild Konzepte pflegen](/img/i14y_konzepte.png)

Das Konzept beschreibt die im Datenelement enthaltenen Informationen eindeutig und vollständig. Bei einem Konzept kann es sich um eine Zahl, eine Zeichenkette, ein Datum oder um eine Codeliste mit vordefinierten Werten handeln (vergleiche auch Kapitel [Informationsmodell](/de/2_rollen_prozesse/informationsmodell)). 

Auf der I14Y-Interoperabilitätsplattform lassen sich Konzepte verwalten und publizieren. Die veröffentlichten Konzepte können von anderen Organisationen wiederverwendet werden. Dies ist eine zentrale Funktion der Plattform. Denn damit werden die Daten allmählich semantisch harmonisiert. So wird die Voraussetzung geschaffen, dass sich Daten -- sofern erlaubt und gewünscht -- zwischen den einzelnen Behörden einfacher austauschen lassen. 

Um die administrativen Daten zu harmonisieren, sollten -- wenn immer möglich -- Datenelemente mit bestehenden Konzepten beschrieben werden. Prüfen Sie also, ob bereits ein identisches Konzept besteht, bevor Sie ein eigenes erfassen. Und fragen Sie sich: Lässt sich das Datenangebot so anpassen, dass ein bestehendes Konzept übernommen werden kann? Diskutieren Sie im Zweifelsfall mit der Anbieterin oder dem Anbieter eines ähnlichen Konzepts, ob eine Harmonisierung Sinn macht. Falls ja, regeln Sie, welche Stelle das Konzept in Zukunft pflegen soll. Das I14Y-Team steht bei solchen Diskussionen gerne für Abklärungen und Beratungen zur Verfügung. 

Manchmal ist es nötig, ein eigenes Konzept zu erfassen. Um ein Konzept zu erfassen, klicken Sie auf der Startseite auf __Konzepte pflegen__ und dann auf __Konzept erstellen__. Die hier erfassten Konzepte können später auf einfache Weise zum Beschreiben einer Datensammlung genutzt werden. 

Ergänzen Sie mindestens die Informationen in den mit einem Stern als obligatorisch gekennzeichneten Felder: Wählen Sie einen eindeutigen __Identifikator__. Tragen Sie im Feld __Version__ die Versionsnummer des Konzepts ein (Format analog zu 1.0.0). Wählen Sie unter __Gültig von__ aus, ab welchem Datum das Konzept verfügbar war. Benennen Sie eine __verantwortliche Person__ sowie deren __Vertretung__. <!--Zur Auswahl stehen alle auf der I14Y-IOP registrierten Nutzerinnen und Nutzer. -->Sollte die gesuchten Personen fehlen, kontaktieren Sie die lokalen Datenverantwortlichen Ihrer Organisation oder das I14Y-Team. Die hier eingetragenen Namen werden den Nutzerinnen und Nutzern der eigenen Organisation angezeigt. Nach der öffentlichen Publikation eines Konzepts sind die Namen im internen Bereich der Plattform sichtbar. Auf der öffentlichen, ohne Login zugänglichen Seite werden sie nicht eingeblendet. <!-- Und sie sind auch über die auf der öffentlichen [Übersicht der elektronischen Schnittstellen](https://api.i14y.admin.ch) aufgelisteten Endpunkte nicht abrufbar. -->  

Erfassen Sie nun einen __Namen__ für den Eintrag. Bei Konzepten, die allenfalls später öffentlich publiziert werden könnten, sollte dieser selbsterklärend sein -- auch für Nutzerinnen und Nutzer ausserhalb Ihrer Organisation und für solche ohne grosse Fachkenntnisse. Das gleiche gilt für die __Beschreibung__. Damit das Konzept gut gefunden wird, macht es oftmals Sinn, in der Beschreibung nebst den Fachbegriffen zusätzlich Synonyme oder Umschreibungen einzusetzen. Sowohl beim Namen als auch bei der Beschreibung ist mindestens das Feld einer Sprache auszufüllen. 

Klicken Sie schliesslich im Feld __Eigenschaftstyp__ an, ob es sich beim betreffenden Konzept um eine Codeliste, ein Datum, einen numerischen Wert oder eine Zeichenkette handelt. Abhängig vom Typ stehen weitere Felder zur Präzisierung zur Verfügung. Einige davon müssen zwingend ausgefüllt werden.

- __Datum:__ Bei einem Datum kann optional definiert werden, in welcher Form der Wert vorliegt. So lässt sich etwa mit *DD.MM.YYYY* ein Datum in der Form von 01.12.2022 beschrieben werden, und *YYYY-MM-DD* bildet 2022-12-01 ab. Alternativ können Daten mit einem regulären Ausdruck (Regex, bevorzugt in der Variante _Basic Regular Expression BRE_) beschrieben werden. Dies macht es möglich, die Datenqualität automatisiert zu prüfen. Der Regex-Ausdruck _\d{2}\.\d{2}\.\d{4}_ etwa beschreibt Daten in der Form von _12.06.2022_. Um die Anzahl Tage und Monate prüfen zu können, sind indes komplexere Ausdrücke nötig. So beschreibt etwa der reguläre Ausdruck _(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[1,2])\.(19|20)\d{2}_ Daten zwischen dem 01.01.1900 und dem 31.12.2099.
- __Numerischer Wert:__ Zwingend zu definieren sind der mögliche Mindest- und der Höchstwert. Zudem muss angegeben werden, wie viele Dezimalstellen (Nachkommastellen) die Zahl enthält. Optional kann ein Muster hinterlegt werden, etwa wenn ein Feld zwar eigentlich numerisch sein sollte, aber Tausendertrennzeichen enthält. Verwenden Sie dazu möglichst einen regulären Ausdruck, denn dieser erlaubt es später Probleme in einer Datensammlung zu entdecken und die Qualität zu analysieren. Zwei Beispiele: _\d+_ beschreibt Zahlen mit mindestens einer und unbeschränkt vielen Vorkomma-, aber keinen Nachkommestellen. Und der _Regex_-Ausdruck _\d{2}\'\d{3}\.\d{3}_ entspricht Zahlen analog zu 14'752.211. 
- __Zeichenkette:__ Bei einer Zeichenkette muss die Mindest- und die Höchstlänge definiert werden. Zudem lässt sich auch hier ein Eingabemuster hinterlegen, möglichst in Form eines regulären Ausdrucks. Eine Schweizer Telefonnummer könnte etwa mit _\+41\s\d{2}\s\d{3}\s\d{2}\s\d{2}_ umschrieben werden, und eine E-Mail-Adresse mit _[A-Za-z0-9\-\_\.\+]{1,64}@[A-Za-z0-9\-\_\.]+\.[a-zA-Z]+_. Weitere Beispiele für Regex-Ausdrücke sind in der entsprechenden [Tabelle im Anhang](/de/6_anhang/regex) zu finden. 
- __Codeliste:__ Bei einer Codeliste muss angegeben werden, ob die einzelnen Werte in der Liste Zeichenketten oder Zahlen enthalten. Bei Listen, in denen sowohl Zeichenketten als auch Zahlen enthalten sind, ist als Typ "Zeichenkette" zu wählen. Definiert wird ausserdem die maximale Länge für die einzelnen Werte. Bei einer Zeichenkette entspricht dies der maximalen Anzahl Buchstaben, die ein einzelner Wert lang sein darf. Im Fall einer Zahl wird definiert, wie viele Vorkommastellen sie enthalten darf. Eine maximale Länge von 3 etwa beinhaltet alle Zahlen zwischen -999 bis 999 -- unabhängig davon, wie viele Nachkommastellen sie hat. Auf der I14Y-IOP können auch die Werte der Codeliste hinterlegt werden. Allerdings muss das Konzept zuerst gespeichert werden. Wie die Werte erfasst werden, wird unten beschrieben. 

Bei Bedarf können abgespeicherte Konzepte wieder geladen und editiert werden -- allerdings nur so lange, bis sie den Status "Registriert" erreicht haben. Falls später Änderungen vorgenommen oder etwa eine Codeliste aktualisiert wird, ist es zwingend nötig, über den entsprechenden Knopf oberhalb des Eintrags eine neue Version anzulegen. Mehr Informationen zum Status sind im Kapitel [Rollen und Prozesse](/de/2_rollen_prozesse/arbeitsablauf) zusammengestellt.

### Ergänzen einer Codeliste

Suchen Sie das betreffende Konzept in der Übersicht. Klicken Sie auf das Symbol für "Anzeigen" und anschliessend auf jenes für "Bearbeiten". Nun können Sie der Codeliste Einträge hinzufügen.  

__Manuelle Eingabe:__ Die Werte der Codeliste lassen sich über die Eingabemaske manuell erfassen. Dazu klickt man aufs Plus-Zeichen. Nun wird der __Wert__ eingetragen. Handelt es sich um eine hierarchische Codeliste, wird auch der __Übergeordnete Code__ erfasst. Zudem werden die entsprechenden Namen in allen relevanten Sprachen eingetragen. Optional kann zum Wert eine Beschreibung hinterlegt werden. Sobald die Eingaben erfasst sind, werden die Angaben mit einem Klick auf das Gutzeichen gespeichert. Anschliessend wird der nächste Wert der Codeliste eingetragen.

__Import einer Codeliste:__ Bei umfangreichen Codelisten ist ein Import der Werte effizienter. Die Daten müssen entweder im Format [SDMX-ML 2.0](https://sdmx.org/?page_id=16) vorliegen, das von Statistik-Software für den Datenaustausch genutzt wird, oder als CSV-Datei. Letztere muss analog zum folgenden Beispiel gegliedert sein. Die Spaltennamen müssen exakt jenen im Beispiel entsprechen. Als Trennzeichen ist ein Strichpunkt zu verwenden. Und die Datei muss in UTF-8 kodiert sein.  

```
NameDe;NameEn;NameFr;NameIt;NameRm;Value;ParentCode
Rot;Red;Rouge;Rosso;Cotschen;r;
Grün;Green;Vert;Verde;Verd;g;
Blau;Blue;Bleu;Blu;Blau;b;
```

Wenn der Import funktioniert hat, wird rechts eine entsprechende Meldung angezeigt. Die importierte Codeliste wird nach dem erneuten Öffnen des Konzepts sichtbar. 