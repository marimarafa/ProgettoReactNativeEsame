import json
import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Carica il file JSON con i dati finti
def load_fake_db():
    try:
        # Percorso assoluto al file JSON
        json_file_path = '.\db.json'
        
        # Carica il contenuto del file JSON
        with open(json_file_path, 'r') as f:
            db_data = json.load(f)
            # Verifica se il contenuto caricato è un dizionario
            if isinstance(db_data, dict):
                return db_data
            else:
                return {"error": "Il contenuto del file JSON non è un dizionario valido."}
    except Exception as e:
        return {"error": f"Errore nel caricamento dei dati: {str(e)}"}

@app.route('/wp', methods=['GET'])
def get_wp():
    try:
        fake_db = load_fake_db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["wp"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

@app.route('/progetto', methods=['GET'])
def get_progetto():
    try:
        fake_db = load_fake_db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["progetto"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

@app.route('/docente', methods=['GET'])
def get_docente():
    try:
        fake_db = load_fake_db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["docente"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

@app.route('/studente', methods=['GET'])
def get_studente():
    try:
        fake_db = load_fake_db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["studente"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

@app.route('/assenza', methods=['GET'])
def get_assenza():
    try:
        fake_db = load_fake_db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["assenza"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

@app.route('/corso', methods=['GET'])
def get_corso():
    try:
        fake_db = load_fake_db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["corso"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

@app.route('/esame', methods=['GET'])
def get_esame():
    try:
        fake_db = load_fake_db()
        if "error" in fake_db:
            return jsonify(fake_db), 500
        return jsonify(fake_db["esame"])
    except Exception as e:
        return jsonify({"error": f"Errore nel caricamento dei dati: {str(e)}"}), 500

# Gestione degli errori
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Risorsa non trovata"}), 404

@app.errorhandler(500)
def internal_server_error(error):
    return jsonify({"error": "Errore interno del server"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5004)
    