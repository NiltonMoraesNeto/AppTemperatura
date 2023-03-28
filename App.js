import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect  } from "react";
import { StyleSheet, View, LogBox, Modal, Image, TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Alert } from "react-native";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  //Alert,
  IconButton,
  CloseIcon,Spinner
} from "native-base";
import api from "./src/services/api";
import apiCep from "./src/services/apiCep";
//import { api, apiCep } from "./src/services/api";
import Temperatura from "./src/pages/Temperatura";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {

  const [inputCep, setInputCep] = useState("");
  const [cep, setCep] = useState({});
  const [cidades, setCidades] = useState([]);

  async function carregarCidadeDefault() {
    const response = await api.get(`${cep.localidade}+","+${cep.uf}`);
    setCidades(response.data.results.forecast);
  };
  
  useEffect(() => {
    //carregarCidadeDefault();
  }, []);

  async function handlePesquisar() {
    console.log("inputCep - ", inputCep);
    if (inputCep === "") {
    console.log("opaaaa - ", inputCep);
    setCidades([]);
    setCep({});

    Example();
    }

    const response = await apiCep.get(`${inputCep}/json`);
    setCep(response.data);
    carregarCidadeDefault();
  };

  const [modalVisible, setModalVisible] = useState(false);

  function Example() {
    console.log("entrou aqui poww");
    Alert.alert('Preencha o campo CEP!');
  }

    return (
  
      <NativeBaseProvider>
        {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={styles.container}>
          <Heading fontSize="xl" p="4" pb="3">
            {cep.localidade},{cep.uf}
          </Heading>
          <TextInput
        placeholder="Digite seu cep..."
        style={styles.input}
        keyboardType="numeric"
        value={inputCep}
        onChangeText={setInputCep}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handlePesquisar}>
        <Text style={styles.loginText}>Pesquisar</Text>
      </TouchableOpacity>
          
          <FlatList
          style={styles.flatList}
            data={cidades}
            keyExtractor={(item) => item.city_name}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="8"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  <Image
                    source={
                      item.description === "Chuva"
                        ? require("./src/assets/chuvatrovao.png")
                        : item.description === "Tempo limpo"
                        ? require("./src/assets/sol.png")
                        : require("./src/assets/chuva2.png")
                    }
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.date}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.weekday}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Text
                    fontSize="xs"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                  >
                    {item.description}
                  </Text>
                  <Spacer />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.min}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.max}
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            )}
            //renderItem={({ item }) => <Temperatura data={item}/>}
            //renderItem={({ item }) => <Text>{item.results.city_name}</Text>}
          />
          <StatusBar style="auto" />
        </View>
        {/* </TouchableWithoutFeedback>
    </KeyboardAvoidingView> */}
      </NativeBaseProvider>

    );
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: Platform.OS === "android" ? "13%" : "20%",
  },
  flatList: {
    width: "90%", 
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: "#F4F3F3",
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  loginButton: {
    marginTop: "1%",
    width: "90%",
    height: 42,
    backgroundColor: "#dc7c58",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#FFF",
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
