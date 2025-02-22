import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, Image, ImageBackground } from "react-native";

const App = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = (table) => {
    setLoading(true);
    setError(null); 
    const url = `http://localhost:5004/${table}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(data.error); 
        } else {
          setTableData(data);
          setColumns(Object.keys(data[0] || {})); 
        }
      })
      .catch((error) => {
        setError("Errore nel recupero dei dati. Assicurati che il server sia attivo.");
        console.error(`Errore nel fetch ${table}:`, error);
      })
      .finally(() => setLoading(false)); 
    setSelectedTable(table);
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case "Concluso":
        return (
          <Image
            source={require('./assets/icons8-segno-di-spunta-40.png')} 
            style={styles.iconTabel}
          />
        );
      case "In corso":
        return (
          <Image
            source={require('./assets/icons8-no-48.png')} 
            style={styles.iconTabel}
          />
        );
      default:
        return (
          <Text style={styles.defaultStatus}>N/A</Text> 
        );
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      {columns.map((col) => (
        <View key={col} style={styles.cellContainer}>
          {col === "stato" ? renderStatusIcon(item[col]) : <Text style={styles.cell}>{item[col]}</Text>}
        </View>
      ))}
    </View>
  );

  const goHome = () => {
    setSelectedTable(null); 
    setTableData([]); 
    setColumns([]); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navButton} onPress={goHome}>
          <Text style={styles.buttonText}>Home</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => fetchData("wp")}>
          <Text style={styles.buttonText}>WP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => fetchData("progetto")}>
          <Text style={styles.buttonText}>Progetti</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => fetchData("docente")}>
          <Text style={styles.buttonText}>Docenti</Text>
        </TouchableOpacity>
      </View>

      <ImageBackground 
        source={require('./assets/immagine_sfondo.jpg')} 
        style={styles.backgroundImage} 
        imageStyle={styles.backgroundImageStyle}
      >
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {!selectedTable && (
          <View style={styles.welcomeContainer}>
            <View style={styles.welcomeBox}>
              <Text style={styles.welcomeText}>  Benvenuto nel sito dell' Accademia!     </Text>
              <Text style={styles.welcomeText}>  Seleziona una tabella per iniziare  </Text>
            </View>
            <View style={styles.iconContainer}>
              <Image 
                source={require('./assets/icona.png')} 
                style={styles.icon} 
              />
            </View>
          </View>
        )}

        {selectedTable && (
          <View style={styles.iconContainer}>
            <Image 
              source={require('./assets/icona.png')} 
              style={styles.icon} 
            />
          </View>
        )}

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#1d2d44" />
          </View>
        ) : (
          selectedTable && (
            <>
              <Text style={styles.title}>Dati: {selectedTable.toUpperCase()}</Text>
              <View style={styles.header}>
                {columns.map((col) => (
                  <Text key={col} style={styles.headerCell}>{col}</Text>
                ))}
              </View>
              <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.tableContent}
              />
            </>
          )
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  backgroundImageStyle: {
    opacity: 0.8,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1d2d44",
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderColor: "#444",
    zIndex: 1,
  },
  navButton: {
    backgroundColor: "#4e5b7b",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16, 
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1d2d44',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontSize: 22, 
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#F7F7F7",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#3a4750",
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff", 
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#f0ebd8",
    paddingVertical: 12,
    marginVertical: 5,
    borderRadius: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cellContainer: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
  },
  cell: {
    fontSize: 16,
    color: "#007ea7",
    paddingHorizontal: 10,
  },
  defaultStatus: {
    fontSize: 16,
    color: "#007ea7",
  },
  icon: {
    width: "100%", 
    height: undefined,
    aspectRatio: 1, 
    maxWidth: 100,
  },
  iconTabel: {
    width: 30, 
    height: 30
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    padding: 10,
    backgroundColor: "#f8d7da",
    margin: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  errorText: {
    color: "#721c24",
    fontSize: 16,
    textAlign: "center",
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  tableContent: {
    paddingBottom: 20,
  },
});

export default App;
