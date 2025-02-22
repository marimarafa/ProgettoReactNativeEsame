Questo progetto React Native permette di visualizzare i dati da un'API locale e gestire lo stato di diversi progetti.
L'interfaccia include una navbar per navigare tra diverse categorie di dati e una tabella dinamica che mostra le informazioni ricevute dall'API.

Funzionalità principali:
    1.Visualizzazione di dati da un'API locale (WP, Progetti, Docenti).
    2.Tabella dinamica con colonne personalizzate.
    3.Visualizzazione delle icone per rappresentare lo stato del progetto (Concluso, In Corso).
    4.Navbar per la navigazione tra le sezioni.
    5.Caricamento dei dati con gestione degli errori e indicatori di stato.
    6.Possibilità di tornare alla home con il tasto "Home" nella navbar.
    
Prerequisiti
Assicurati di avere i seguenti strumenti installati nel tuo sistema prima di iniziare:

Node.js
Expo CLI (per facilitare lo sviluppo con React Native)
Android Studio o Xcode (per la simulazione su dispositivi Android o iOS)
Installazione
1. Clona il repository
Apri il terminale e digita il comando per clonare la repository:
    bash
    Copia
    Modifica
    git clone https://github.com/tuo-username/progetto-react-native.git 
2. Naviga nella cartella del progetto
Spostati nella cartella del progetto appena clonato:
    bash
    Copia
    Modifica
    cd progetto-react-native
3. Installa le dipendenze
Usa npm per installare le dipendenze necessarie per il progetto con il comando:
    bash
    Copia
    Modifica
    npm install
4. Avvia il server di sviluppo
Per avviare il progetto, esegui il seguente comando:  
    bash
    Copia
    Modifica
    npm start
Questo comando avvierà il server di sviluppo e aprirà il progetto nell'app Expo. Puoi scansionare il codice QR con l'app Expo Go (disponibile su Android e iOS) per visualizzare l'app sul tuo dispositivo.

5. Avvia la simulazione su dispositivo Android o iOS
Per avviare una simulazione su dispositivo Android:
    bash
    Copia
    Modifica
    npm run android
Per avviare una simulazione su dispositivo iOS :
    bash
    Copia
    Modifica
    npm run ios
Per avviare una simulazione direttamente dal sito web:
    bash
    Copia
    Modifica
    npm run web
   
Connessione all'API:
Il progetto si connette a un'API locale in esecuzione sul server. Per testare correttamente le funzionalità, assicurati che il server dell'API sia in esecuzione sulla stessa rete locale e che risponda alle richieste inviate dal client.

Modifica l'URL dell'API nella funzione fetchData in App.js, sostituendo:

    javascript
    Copia
    Modifica
    const url = `http://localhost:5004/${table}`;
 con l'IP del server locale, ad esempio: 
    javascript
    Copia
    Modifica
    const url = `http://192.168.x.x:5004/${table}`;

Icone dello Stato:
Le icone dello stato vengono visualizzate accanto ai nomi dei progetti, a seconda che il loro stato sia:  
    Concluso: mostrerà un'icona di segno di spunta.
    In Corso: mostrerà un'icona "in corso".
    Altro Stato: verrà mostrato "N/A" come valore predefinito se lo stato non corrisponde a nessuna delle opzioni previste.
