import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AdminServicesScreen = () => {
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceDuration, setServiceDuration] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    // Load services from AsyncStorage
    const loadServices = async () => {
      const servicesJson = await AsyncStorage.getItem("services");
      if (servicesJson !== null) {
        setServices(JSON.parse(servicesJson));
      }
    };
    loadServices();
  }, []);

  const saveServices = async () => {
    // Save services to AsyncStorage
    await AsyncStorage.setItem("services", JSON.stringify(services));
  };

  const addService = () => {
    // Add a new service to the list
    const newService = {
      id: Math.random().toString(),
      name: serviceName,
      price: parseFloat(servicePrice),
      duration: serviceDuration,
    };
    setServices([...services, newService]);
    setServiceName("");
    setServicePrice("");
    setServiceDuration("");
  };

  const deleteService = (serviceId) => {
    // Remove a service from the list
    const updatedServices = services.filter((s) => s.id !== serviceId);
    setServices(updatedServices);
  };

  const renderServiceItem = ({ item }) => {
    // Render a single service in the list
    return (
      <View style={styles.serviceItem}>
        <View style={styles.serviceItemDetails}>
          <TextInput
            style={styles.serviceItemName}
            value={item.name}
            onChangeText={(text) =>
              setServices(
                services.map((s) =>
                  s.id === item.id ? { ...s, name: text } : s
                )
              )
            }
          />
          <TextInput
            style={styles.serviceItemPrice}
            value={item.price.toString()}
            onChangeText={(text) =>
              setServices(
                services.map((s) =>
                  s.id === item.id ? { ...s, price: parseFloat(text) } : s
                )
              )
            }
            keyboardType="numeric"
          />
          <TextInput
            style={styles.serviceItemDuration}
            value={item.duration}
            onChangeText={(text) =>
              setServices(
                services.map((s) =>
                  s.id === item.id ? { ...s, duration: text } : s
                )
              )
            }
          />
        </View>
        <Button title="Delete" onPress={() => deleteService(item.id)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Service name"
        value={serviceName}
        onChangeText={setServiceName}
      />
      <TextInput
        style={styles.input}
        placeholder="Service price"
        value={servicePrice}
        onChangeText={setServicePrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Service duration"
        value={serviceDuration}
        onChangeText={setServiceDuration}
      />
      <Button title="Add Service" onPress={addService} />
      <FlatList
        data={services}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
      />

      <Button
        title="Save Products"
        onPress={saveServices}
        style={styles.saveButton}
      />
      
      <Button
        title="Go to Subscriptions"
        onPress={() => navigation.navigate("AdminSubscriptions")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  serviceItemDetails: {
    flex: 1,
    marginRight: 8,
  },
  serviceItemName: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  serviceItemPrice: {
    fontWeight: "bold",
    color: "green",
    marginBottom: 4,
  },
  serviceItemDuration: {
    marginBottom: 4,
  },
});

export default AdminServicesScreen;
