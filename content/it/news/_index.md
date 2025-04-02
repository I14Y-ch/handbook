---
title: News
slug: news
translationKey: news
weight: 90
type: docs
keywords: [I14Y, Piattaforma di metadati, IOP, Novità, Attualità, News]
---

{{<alert title="Per rimanere sempre aggiornati" color="success" >}}

Desiderate essere informati sulle nuove funzionalità e offerte della piattaforma di interoperabilità I14Y? Allora abbonatevi subito alla Newsmail! Facendolo, tre o quattro volte all'anno riceverete via mail un riepilogo degli ultimi sviluppi riguardanti l'IOP I14Y. Per abbonarvi gratuitamente alla Newsmail, andate sul sito del [servizio di abbonamento Newsmail dell'Ufficio federale di statistica](https://www.bfs.admin.ch/bfs/de/home/dienstleistungen/kontakt/newsmail-abonnement.html) e selezionate Piattaforma di interoperabilità I14Y. 

{{</alert>}}

## Accesso più rapido con R all’API della I14Y 
*02.04.2025*

{{< figure src="/handbook/img/news/r-konsole.png" alt="Grafik R-Konsole" width="125px" class="float-left img-news-thumb" >}}

Un pacchetto R ben ponderato facilita l’accesso all’API della piattaforma di interoperabilità I14Y. Un tutorial di accompagnamento mostra inoltre come i metadati possono essere utilizzati direttamente nella console di R. Tre domande a Félix Luginbuhl, che ha sviluppato il pacchetto R.

*Felix Luginbühl, Lei ha sviluppato una libreria in linguaggio R che facilita l’accesso all’interfaccia elettronica della piattaforma I14Y. È stato un problema o una sfida specifica a spingerla a sviluppare il suddetto pacchetto?*

Avevo bisogno di accedere a determinati dati sulla piattaforma di interoperabilità per un progetto. Sono solito lavorare con il linguaggio di programmazione R. Mi permette di rendere trasparenti e riproducibili le fasi di elaborazione e le analisi. Ho quindi creato uno script che aiuta a trovare i metadati tramite l’API. Data l’importanza della piattaforma I14Y e il crescente utilizzo del linguaggio di programmazione R in Svizzera, ho pensato che una libreria potesse essere utile all’intera community. Ecco perché ho iniziato a svilupparla a titolo volontario.

*Quale lacuna ha colmato la Sua libreria in linguaggio R?*

Grazie a questa libreria, gli utenti possono recuperare i metadati dalla piattaforma I14Y in modo semplice, analogamente a come fanno con altre fonti di dati. Non devono infatti più preoccuparsi dei dettagli tecnici delle chiamate API, poiché possono utilizzare la sintassi R che già conoscono. Attraverso il mio pacchetto R denominato «BFS», inoltre, i metadati possono essere facilmente combinati con i dati veri e propri dell’Ufficio federale di statistica. Ho messo a disposizione entrambi i pacchetti come codici open source.  

*Quali considerazioni o esperienze L’hanno spinta a fornire alla community non solo il pacchetto, ma anche un tutorial?*

Mentre sviluppavo la libreria mi è venuto in mente che potevo realizzare il tutto servendomi della console di R: ricerca nel catalogo della piattaforma 14Y, accesso ai dati e ad altri identificatori per trovare dati supplementari. Ho documentato l’intero processo e anche fornito un esempio di combinazione con una banca dati dell’Ufficio federale di statistica. Date un’occhiata alla documentazione online disponibile su   [www.felixluginbuhl.com/I14Y](https//:www.felixluginbuhl.com/I14Y). Eventuali domande e feedback sono i benvenuti!

## Come caricare in modo efficace descrizioni di set di dati sulla piattaforma I14Y
*04.03.2025*

{{< figure src="/handbook/img/news/grafik_api.png" alt="API grafica" width="125px" class="float-left img-news-thumb" >}}

Grazie a un nuovo endpoint dell’interfaccia elettronica (API), ora le descrizioni dei set di dati possono essere caricate su I14Y automaticamente. Le descrizioni di set di dati, compresi i dettagli riguardanti eventuali distribuzioni, possono essere create con una semplice richiesta POST. La voce può quindi essere controllata e messa a disposizione tramite l’interfaccia web. In alternativa, lo stato può essere modificato e pubblicato direttamente con uno script tramite una richiesta PUT.  

Le specifiche tecniche dei nuovi endpoint sono documentate nello Swagger dell’API partner. Inoltre è disponibile un tutorial con un esempio di applicazione.  

Tutte le informazioni sull’API I14Y si trovano al seguente link: [apiconsole.i14y.admin.ch](https://apiconsole.i14y.admin.ch). 

## Un codice per ogni caso: registrare i dati medici in modo omogeneo
*04.03.2025*

{{< figure src="/handbook/img/news/medical.jpg" alt="Grafica medicina digitalizzata" width="125px" class="float-left img-news-thumb" >}}

In tutti gli ospedali svizzeri, le diagnosi e i trattamenti devono essere registrati in modo omogeneo. A tale scopo vengono utilizzate le classificazioni ICD-10 (diagnosi) e CHOP (esami e trattamenti). Le ultime versioni sono descritte sulla piattaforma I14Y e gli elenchi di codici possono essere esportati in formato JSON e CSV, oltre che tramite l’API. Collegamenti diretti: [ICD-10](https://www.i14y.admin.ch/it/catalog/concepts/08dd2e54-00fb-efc5-b7cd-14f5c7d2272d/description) e [CHOP](https://www.i14y.admin.ch/it/catalog/concepts/08dd2e3a-d99e-d56f-9c1c-5a7c5733f1a6/description).

## La governance dei dati nella pratica
*04.03.2025*

{{< figure src="/handbook/img/news/lds_meetup.jpg" alt="Foto dell'incontro dei Local Data Steward" width="125px" class="float-left img-news-thumb" >}}

Alcune unità amministrative utilizzano solo la piattaforma di interoperabilità I14Y, mentre altre si affidano a un software per cataloghi installato localmente, che in futuro sarà collegato a I14Y: in un incontro organizzato dal team I14Y, i local data steward di diversi uffici federali e Cantoni hanno condiviso il loro modo di procedere nell’inventariare e armonizzare i set di dati. Hanno discusso di come promuovere l’armonizzazione dei dati e di come ognuno di loro mette in pratica la governance dei dati, dandosi consigli pratici sull’utilizzazione della piattaforma I14Y. Il team del servizio di interoperabilità ringrazia per lo scambio vivace e arricchente in attesa del prossimo incontro previsto all’inizio dell’estate. Lavora come local data steward presso un’unità amministrativa e desidera partecipare alla prossima riunione? Ci scriva!

## Bilancio dell'anno
*11.12.2024*

Il 2024 volge al termine e guardando indietro possiamo dire che è stato un anno produttivo. Siamo riusciti ad attuare alcuni progetti ambiziosi, ad esempio la creazione di un area di input sulla piattaforma I14Y per metadati OGD registrati manualmente, grazie alla quale i dati possono essere pubblicati con un clic sulle piattaforme [opendata.swiss](https://opendata.swiss) e [I14y.ch](https://i14y.admin.ch).

In novembre abbiamo reso l’interfaccia utente di I14Y più moderna e il suo utilizzo più intuitivo. La separazione tra «Catalogo» e «Concetti», precedentemente presente sulla homepage per motivi tecnici, è stata rimossa. La nuova ricerca globale consente di cercare tutti i metadati, indipendentemente dal tipo. I risultati vengono restituiti esaustivamente in registri (Set di dati, Servizi pubblici, APIs, Concetti). Vengono visualizzati anche i risultati trovati nei portali di metadati Opendata e Geocat. Inoltre, nella versione rilasciata in novembre mettiamo a disposizione delle organizzazioni partner un endpoint sul gateway API, attraverso il quale sarà possibile pubblicare le descrizioni delle collezioni di dati. Dall’inizio di quest’anno tutte le novità sono state documentate nel [Changelog](https://i14y-ch.github.io/handbook/it/changelog/) del manuale.

Il team I14Y lavora con grande impegno al costante sviluppo della piattaforma, e lo fa in stretto dialogo con i suoi utenti. Le esigenze specifiche dei nostri utenti vengono raccolte in occasione di hackathon, di incontri informali con gli amministratori dei dati a livello locale o del progetto Basel+. Nel comitato direttivo recentemente istituito vengono discussi e organizzati per priorità i nuovi requisiti. Al momento lo sviluppo della piattaforma I14Y è determinato in modo rilevante in funzione dei requisiti della legge federale concernente l’impiego di mezzi elettronici per l’adempimento dei compiti delle autorità ([LMeCA](https://www.fedlex.admin.ch/eli/cc/2023/682/it)). Le soluzioni e migliorie che ne scaturiscono vanno però a vantaggio di tutti gli utenti.

Tutte queste pietre miliari sono già state raggiunte grazie all’ampliamento del nostro team; altre sono nel mirino. Nei prossimi mesi venturi godremo del sostegno di Lien Beroggi per la durata del suo tirocinio universitario. Al termine della presente newsletter troverete una panoramica delle sue mansioni.

## Chiarita la direzione in cui si sviluppa la piattaforma I14Y
*11.12.2024*

{{< figure src="/handbook/img/news/roadmap.png" alt="Logo Roadmap" width="125px" class="float-left img-news-thumb" >}}

Sulla [roadmap](https://i14y-ch.github.io/handbook/it/piattaforma/roadmap/) pubblicata sul sito è possibile da subito seguire le novità alle quali stanno lavorando gli sviluppatori di software. Viene aggiornata trimestralmente, con una descrizione particolarmente dettagliata del periodo immediatamente seguente. Lavoriamo in modo agile. Siccome la roadmap può cambiare, vale la pena consultarla regolarmente (lattualmente disponibile unicamente in tedesco).

## Partecipare all’ulteriore sviluppo della piattaforma I14Y
*11.12.2024*

Da subito nel Repository [Feature Request](https://github.com/I14Y-ch/feature-requests/issues) su GitHub possono essere inoltrate e discusse proposte per nuove funzioni. Il servizio di interoperabilità, il comitato per la gestione dei dati a livello nazionale e il comitato direttivo assegnano un ordine di priorità alle proposte. Non vediamo l’ora di ricevere le vostre!

## Nuove console pubbliche per l'API di I14Y
*11.12.2024*

{{< figure src="/handbook/img/news/api.png" alt="Logo API" width="125px" class="float-left img-news-thumb" >}}

I14Y offre ora due console OpenAPI (Swagger) per facilitare l'accesso degli utenti all'API di I14Y. Le console sono disponibili in modo permanente e documentano chiaramente le funzioni dell'API.

- [URL della console](https://apiconsole.i14y.admin.ch/partner/v1/index.html) per i metadati interni all'organizzazione. Funzione: serve per gestire i metadati interni all'organizzazione. Utilizzo: è richiesta l'autenticazione. Gli oggetti di metadati possono essere creati e modificati tramite questa API.
- [URL della console](https://apiconsole.i14y.admin.ch/public/v1/index.html) per i metadati pubblici. Funzione: fornisce accesso in sola lettura ai metadati pubblici.
Uso: non è richiesto il login, accesso libero. Le console vengono continuamente aggiornate. Verranno aggiunti nuovi endpoint, in modo che in futuro la gestione dei metadati sarà interamente possibile tramite l'API.

## Novità nel team
*11.12.2024*

{{< figure src="/handbook/img/news/lien.jpg" alt="Ritratto Lien Beroggi" width="250px" class="float-left img-news-thumb" caption="UFS" >}}

Lien Beroggi ci supporterà per un anno con le sue conoscenze universitarie appena acquisite. Web semantico, RDF e linked data rientrano tra le tematiche su cui si focalizzerà il suo lavoro. Seguono alcune domande poste alla nostra tirocinante.

_L’interoperabilità è stato un argomento importante durante gli studi universitari?_ 
Durante i miei studi in informatica di gestione mi sono occupata di vari aspetti della gestione efficiente delle informazioni e dell’integrazione dei sistemi, tra cui lo scambio di dati tra sistemi diversi e l’importanza degli standard per una comunicazione ottimale. Ho anche frequentato corsi speciali sui dati semistrutturati, grazie ai quali ho imparato le basi dei concetti di web semantico e linked data. Ora, nella mia posizione presso il team della piattaforma I14Y, posso applicare queste conoscenze in un contesto reale in cui l’interoperabilità svolge un ruolo cruciale.

_Quali sono gli aspetti della piattaforma I14Y che ti appassionano?_ 
Gli aspetti che rendono questo tirocinio particolarmente interessante sono due. Anzitutto la possibilità di lavorare con un team dinamico a una piattaforma in continua evoluzione è molto stimolante e arricchente. Questo mi consente di apprendere attraverso l’esperienza pratica, trovando soluzioni innovative insieme ai colleghi. Il secondo aspetto interessante è l’impatto della piattaforma I14Y sulla società: interoperabilità e accessibilità dei dati sono determinanti per migliorare e semplificare le prestazioni di servizio per cittadinanza, imprese e istituzioni. I linked data, in particolare, offrono un enorme potenziale per collegare informazioni finora isolate e renderle più accessibili e utilizzabili.

_Quale obiettivo ti sei posta per i prossimi mesi?_
Nei prossimi mesi desidero approfondire la conoscenza sui linked data e l’interoperabilità, per poter fornire un contributo concreto allo sviluppo della piattaforma I14Y. Il mio obiettivo è di dare il mio apporto all’ottimizzazione dell’integrazione dei dati, in particolare per facilitare lo scambio di informazioni con altre piattaforme. Facendo progressi in questi ambiti, spero che il mio lavoro contribuisca a sviluppare ulteriormente l’efficienza e la qualità delle funzioni offerte dalla piattaforma I14Y.

## Nuovi campi di inserimento per la protezione dei dati 
*20.02.2024*

{{< figure src="/handbook/img/news/datenschutz.jpg" alt="Symbolbild Datenschutz" width="250px" class="float-left img-news-thumb" >}}

Una collezione di dati descritta sulla piattaforma I14Y contiene dati relativi a persone? E, se così fosse, i dati effettivi in questione contengono informazioni che devono essere protette, in particolare sull’orientamento politico, lo stato di salute o la confessione religiosa di un persona? Questo può essere documentato nel campo «Confidenzialità» della IOP I14Y.

Ora è possibile registrare anche il periodo di conservazione legale di una collezione di dati. Per i dati raccolti una sola volta, viene specificata la data esatta in cui devono essere cancellati. Nel caso di una collezione di dati aggiornata periodicamente, viene utilizzato un campo di testo libero per descrivere l’intervallo di tempo entro il quale il proprietario dei dati li cancellerà, ad esempio «cinque anni dopo la fine dell’anno solare in corso». 

I nuovi campi «Confidenzialità» e «Periodo di conservazione» non sono previsti dallo standard DCAT, bensì offerti quale servizio aggiuntivo. Non è pertanto obbligatorio compilarli. Una panoramica dettagliata di tutti i campi da compilare della piattaforma di interoperabilità I14Y può essere [trovata qui](https://i14y-ch.github.io/handbook/de/anhang/eingabefelder/) (pagina attualmente disponibile solo in tedesco). 

## Utenti esterni alla Confederazione meglio integrati
*20.02.2024*

Con il lancio della nuova versione, il 4 dicembre 2023, la piattaforma I14Y è collegata all’ [eIAM](https://www.eiam.swiss/)  (accessible via CH-LOGIN ou par IdP) per descrivere il profilo dei suoi utenti, oltre che all’AdmnDir, il registro del personale della Confederazione. Questa nuova possibilità consente agli utenti esterni alla Confederazione di registrarsi come responsabili di progetti e di partecipare alla manutenzione attiva dei metadati. Questa funzionalità consente una migliore collaborazione tra gli utenti all’interno e all’esterno della Confederazione sulla piattaforma di interoperabilità e uniforma l’elaborazione tra le diverse modalità di connessione. 

## Rafforzare la collaborazione con i Cantoni e i Comuni 
*20.02.2024*

La piattaforma I14Y si sta sviluppando per divenire il catalogo nazionale dei metadati della Svizzera. Sempre più Cantoni e ora anche i primi Comuni intendono utilizzare la piattaforma per inventariare i propri dati. Il Cantone di Basilea Città ha presentato all’Amministrazione Digitale Svizzera [Digitalen Verwaltung Schweiz](https://www.digitale-verwaltung-schweiz.ch/) il Projekt Basel+, che comprende le esigenze e richieste di Cantoni e Comuni nei confronti della IOP I14Y. La collaborazione con i Cantoni e i Comuni consente di individuare le esigenze comuni in relazione a un catalogo nazionale di dati. Il progetto è stato avviato dal Cantone di Basilea Città; al momento nell’organizzazione sono rappresentati anche i Cantoni di Argovia, Basilea Campagna, Turgovia, Berna e Zurigo, nonché la città di Berna. 

## Changelog – Note sulla versione rilasciata 
*20.02.2024*

La IOP 14Y è soggetta a continui sviluppi. Ad ogni nuova versione vengono aggiunte nuove funzioni e risolti bug. Le modifiche, i miglioramenti e le correzioni dei bug più importanti sono ora descritti nel manuale I14Y [Changelog im I14Y-Handbuch](https://i14y-ch.github.io/handbook/de/8_changelog/).

## IOS parteciperà al GovTech Hackathon 2024
*20.02.2024*

{{< figure src="https://opendata.ch/wordpress/files/2022/12/GoVTech_Hackthon_NL_2048x1150-1024x575.jpg" alt="Logo GovTech-Hackathon" width="250px" class="float-left img-news-thumb" >}}

Il [GovTech Hackathon](https://opendata.ch/events/govtech-hackathon-2024) sta entrando nella sua seconda fase. Il 15 e 16 marzo 2024, sviluppatori, esperti e parti interessate provenienti dall’amministrazione, dall’economia e dalla società civile si incontreranno a Zollikofen per lavorare insieme su questioni specifiche. Si ricercheranno soluzioni che rendano i servizi digitali delle autorità facili da usare, interoperabili e sostenibili. Il team I14Y interverrà all’evento e sottoporrà due sfide ai partecipanti. Un resoconto dell’hackathon sarà pubblicato sul sito web [OpenData.ch-Website publiziert](https://opendata.ch/projects/). 

## Accesso sicuro per tutti con un semplice clic
*06.12.2023*

{{< figure src="/handbook/img/news/kachel_bern.png" alt="eIAM-Kachel für den Kanton Bern" width="250px" class="float-left img-padding-right" >}}

Il Cantone di Berna intende sfruttare le possibilità offerte dall’IOP I14Y per tenere un inventario di dati interno e scambiare liste di codici all’interno del Cantone. Il presupposto è che tutti gli impiegati del Cantone possano accedere in modo semplice alle parti della piattaforma ad uso interno del Cantone. Inoltre, è importante che il Cantone non abbia grandi oneri amministrativi supplementari: i nuovi collaboratori devono essere registrati automaticamente e gli account relativi alle persone che se ne vanno devono essere cancellati automaticamente.

In stretta collaborazione con il fornitore di software Bedag, con l’ufficio preposto all’informatica e all’organizzazione del Cantone di Berna nonché con l’Ufficio federale dell’informatica e della telecomunicazione, il team I14Y ha implementato una soluzione efficace: il provider cantonale di identità elettroniche è stato collegato al sistema centrale di accesso e autorizzazione dell’Amministrazione federale (eIAM) attraverso un’interfaccia elettronica. Ora il Cantone può attivare o bloccare l’accesso alla piattaforma direttamente partendo dalla propria gestione degli utenti. Gli utenti possono accedere al loro account sull’IOP I14Y semplicemente cliccando su «Login».

Questa soluzione potrebbe essere sfruttata anche da altri Cantoni che desiderano dare accesso all’IOP I14Y ai collaboratori delle proprie amministrazioni. È anche plausibile che in futuro la soluzione elaborata possa essere utilizzata per collegare le infrastrutture informatiche cantonali ad altre piattaforme federali.

## L’importanza dei concetti
*06.12.2023*

{{< figure src="/handbook/img/news/konzepte.png" alt="I14Y-Symbol für Konzepte" width="250px" class="float-left img-news-thumb" >}}

Sull’IOP I14Y, un concetto descrive un elemento dati in modo univoco e completo. Può essere espresso sotto forma di cifre, di stringa o di lista di codici con valori predefiniti. Da questa primavera, agli utenti è consentito registrare concetti sull’IOP I14Y. Questa possibilità è sempre più utilizzata. Nel frattempo sono stati pubblicati circa 170 concetti armonizzati, per la maggior parte sotto forma di liste di codici. Sono praticamente finiti i tempi in cui ogni organizzazione doveva occuparsi delle proprie liste di codici. D’ora in poi, si potrà fruire delle liste di codici compilate dai servizi competenti semplicemente attraverso un’interfaccia elettronica.

## L’IOP I14Y agli onori
*06.12.2023*

{{< figure src="/handbook/img/news/egov-pokale.jpg" alt="Pokale des eGovernment-Wettbewerbs" width="250px" class="float-left img-news-thumb" >}}

Nella finale del 22° concorso internazionale eGovernment, l’IOP I14Y dell’UST si è piazzata al secondo posto nella categoria «miglior progetto di digitalizzazione». Nel 2023 le autorità e gli enti pubblici di Germania, Austria e Svizzera avevano inoltrato circa 80 progetti di modernizzazione e digitalizzazione delle amministrazioni. Il premio è stato ritirato a Berlino da Mathias Born e Max Zurkinden del servizio di interoperabilità, in rappresentanza dell’intero team, molto fiero di questo riconoscimento.

## Il video sull armonizzazione dei dati in Svizzera
*18.04.2023*

Come funzionano il principio «once-only» e la piattaforma di interoperabilità I14Y? Come sono collegate le due cose? Nel video di tre minuti «Con la piattaforma I14Y verso il futuro digitale della Svizzera» troverete risposte semplici e comprensibili a queste ed altre domande.

{{< youtube_custom U0CpW1bNIdU >}}

## Il manuale della piattaforma I14Y è online
*07.08.2023*

{{< figure src="/handbook/img/news/handbuch.png" alt="I14Y-Symbol Handbuch" width="250px" class="float-left img-news-thumb" >}}

Come è nato il criptico nome della piattaforma di interoperabilità I14Y? Chi può accedere a quali metadati? E come deve essere compilato un determinato campo? Troverete le risposte a queste e ad altre domande nel nuovo manuale I14Y appena pubblicato. Nella prima parte della pubblicazione online viene spiegato come la piattaforma contribuisca ad armonizzare i dati amministrativi. Nella seconda parte sono poi illustrate le singole procedure passo per passo. Il manuale è disponibile al link seguente: [handbook.i14y.admin.ch](https://handbook.i14y.admin.ch)  ed è in costante aggiornamento. Chi lo desidera può inoltre contribuire con passaggi di testo. Per sapere come, basta consultare il manuale (attualmente disponibile solo in tedesco, la traduzione seguirà a breve). 

## Novità sulla piattaforma I14Y: scheda «Concetti»
*07.08.2023*

{{< figure src="/handbook/img/news/konzepte.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Sulla piattaforma I14Y è da ora disponibile una nuova scheda intitolata [I14Y-Konzepte](https://www.i14y.admin.ch/de/concepts). A questa voce sono disponibili ad esempio liste di codici completate da descrizioni dettagliate. Il concetto descrive le informazioni contenute in un elemento dati in modo chiaro e completo. L’elemento dati può essere un numero, una stringa, una data o una lista di codici. Grazie alla funzione di ricerca, è semplice effettuare ricerche all’interno di questa offerta di concetti in rapida crescita. Per quanto possibile, nelle proprie collezioni di dati vi consigliamo di utilizzare concetti esistenti.

## Chatbot I14Y
*07.08.2023*

{{< figure src="/handbook/img/news/chatbot.png" alt="I14Y-Symbol für den Chatbot" width="250px" class="float-left img-news-thumb" >}}

Il nostro [I14Y-Chatbot](https://www.i14y.admin.ch/de/labs/chatbot) risponde a domande sull’armonizzazione dei dati in generale e sulla piattaforma di interoperabilità in particolare. L’intelligenza artificiale generativa utilizza il manuale I14Y come fonte principale. In futuro, il chatbot sarà anche in grado di rispondere a semplici domande sui metadati pubblicati sulla piattaforma II14Y. Anche se per il momento il chatbot è stato addestrato con contenuti in lingua tedesca, può fornire informazioni anche in altre lingue.

Il chatbot I14Y è un esperimento che è stato sviluppato in occasione di una giornata di gruppo. Può capitare che il chatbot abbia delle «allucinazioni» e occasionalmente può fornire informazioni false. Pertanto, vi raccomandiamo di verificare attentamente tutte le risposte.

## La piattaforma I14Y è in finale al 22° concorso eGovernment
*07.08.2023*

Quest’anno, in finale sono arrivati 18 team composti da dipendenti delle autorità pubbliche con i loro progetti sulla digitalizzazione e sulla trasformazione della pubblica amministrazione. La giuria ha già votato e ora sta a voi votare per il premio del pubblico. Partecipate alla votazione online e aiutateci a far vincere il premio del pubblico alla piattaforma I14Y! [Online-Voting](https://www.egovernment-wettbewerb.de/online-voting/online-voting.html)!

## Accesso facilitato alla piattaforma di interoperabilità I14Y grazie a eIAM
*16.02.2023*

{{< figure src="/handbook/img/news/02_eiam.jpg" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Accesso facilitato alla piattaforma di interoperabilità I14Y grazie a eIAM
Grazie a eIAM, ora la piattaforma di interoperabilità I14Y (I14Y-IOP) è accessibile ancora più facilmente per gli utenti dei Comuni, dei Cantoni, delle istituzioni e della Confederazione. Una volta effettuato l’accesso, tramite l'interfaccia dell’Amministrazione è possibile pubblicare i metadati della propria organizzazione.
eIAM è il sistema centrale di accesso e di autorizzazione dell’Amministrazione federale per le applicazioni web e per quelle mobili native. Tutti gli utenti che dispongono di un account eIAM o CH-Login possono ora accedere facilmente all’I14Y-IOP. Questa modalità di connessione consente non solo di risparmiare, ma anche di incrementare il livello di sicurezza.

Gli utenti dell’Amministrazione federale possono continuare ad accedere con la smartcard.

## Novità sull’I14Y-IOP: Dati di base degli edifici e delle abitazioni 
*16.02.2023*

{{< figure src="/handbook/img/news/03_ewg.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

I dati di base di edifici e abitazioni sono descritti nel catalogo di metadati I14Y e sono pronti per essere riutilizzati. Le descrizioni dettagliate della struttura dei dati forniscono un elenco completo dei dati disponibili nel registro, contribuiscono alla trasparenza dei dati disponibili e promuovono il riutilizzo degli standard ufficiali.
L’API utilizzata per mettere a disposizione i dati (MADD) del registro è stata pubblicata nel repository API di I14Y. 
Volete che anche i vostri metadati o le vostre API siano pubblicati sulla piattaforma di interoperabilità I14Y? Allora contattateci scrivendo all’indirizzo i14y@bfs.admin.ch.

## L'UST partecipa al GovTech Hackathon
*16.02.2023*

{{< figure src="/handbook/img/news/01-i14y.png" alt="I14Y-Symbol Konzepte" width="250px" class="float-left img-news-thumb" >}}

Il 23 e 24 marzo 2023 il settore TDT della Cancelleria federale organizza un GovTech Hackathon a Zollikofen. Sviluppatori, esperti e altre persone interessate provenienti dall’amministrazione, dall’economia e dalla società civile lavorano insieme su problemi concreti (challenges) con l’obiettivo di rendere i servizi digitali delle autorità facili da usare, interoperabili e sostenibili. Naturalmente parteciperà anche il team I14Y. Chi desidera prendere parte all’evento può iscriversi entro il 15 marzo. 





