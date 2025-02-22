Questo progetto React Native permette di visualizzare i dati da un'API locale e gestire lo stato di diversi progetti con icone che rappresentano il loro stato (Concluso, In Corso, ecc.). L'interfaccia include una navbar per navigare tra diverse categorie di dati e una tabella dinamica che mostra le informazioni ricevute dall'API.
Funzionalità principali:

    Visualizzazione di dati da un'API locale (WP, Progetti, Docenti)
    Tabella dinamica con colonne personalizzate
    Visualizzazione delle icone per rappresentare lo stato del progetto (Concluso, In Corso)
    Navbar per la navigazione tra le sezioni
    Caricamento dei dati con gestione degli errori e indicatori di stato

Prerequisiti

Assicurati di avere i seguenti strumenti installati nel tuo sistema prima di iniziare:

    Node.js 
    Expo CLI (per facilitare lo sviluppo con React Native)
    Android Studio o Xcode (per la simulazione su dispositivi Android o iOS)

    Installazione

    Clona il repository

    Apri il terminale e digita il comando per clonare la repository:

    .. git clone https://github.com/tuo-username/progetto-react-native.git

Naviga nella cartella del progetto

Spostati nella cartella del progetto appena clonato:

  .. cd progetto-react-native

Installa le dipendenze

Usa npm  per installare le dipendenze necessarie per il progetto con il comando :

.. npm install

Avvia il server di sviluppo

Per avviare il progetto, esegui il seguente comando:

.. npm start

Questo comando avvierà il server di sviluppo e aprirà il progetto nell'app Expo. Puoi scansionare il codice QR con l'app Expo Go (disponibile su Android e iOS) per visualizzare l'app sul tuo dispositivo.

Avvia la simulazione su dispositivo Android o iOS

    Per avviare una simulazione su dispositivo Android:

 .. npm run android

Per avviare una simulazione su dispositivo iOS (solo su macOS):

.. npm run ios



Il progetto si connette a un'API locale in esecuzione sul server. Per testare correttamente le funzionalità, assicurati che il server dell'API sia in esecuzione sulla stessa rete locale e che risponda alle richieste inviate dal client.

Modifica l'URL dell'API nella funzione fetchData in App.js, sostituendo "http://localhost:5004/{table}" con l'IP del server locale.

Come Aggiungere Nuove Tabelle

Per aggiungere nuove tabelle alla tua app, assicurati che l'API restituisca i dati correttamente per ciascuna tabella. Modifica il codice della navbar per aggiungere una nuova voce e la relativa funzione di recupero dati.
Icone dello Stato

Le icone dello stato vengono visualizzate accanto ai nomi dei progetti, a seconda che il loro stato sia:

    Concluso: mostrerà un'icona di segno di spunta.
    In Corso: mostrerà un'icona "in corso".
    Altro Stato: verrà mostrato "N/A" come valore predefinito se lo stato non corrisponde a nessuna delle opzioni previste.

Le icone si trovano nella cartella assets/ e possono essere personalizzate.
