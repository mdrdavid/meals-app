import React, { useState, useEffect } from "react";
import { View, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ImagePickerButton from "../components/ImagePickerButton";

const AdminProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    // Load products from AsyncStorage
    const loadProducts = async () => {
      const productsJson = await AsyncStorage.getItem("products");
      if (productsJson !== null) {
        setProducts(JSON.parse(productsJson));
      }
    };
    loadProducts();
  }, []);

  const saveProducts = async () => {
    // Save products to AsyncStorage
    await AsyncStorage.setItem("products", JSON.stringify(products));
  };

  const addProduct = () => {
    // Add a new product to the list
    const newProduct = {
      id: Math.random().toString(),
      name: productName,
      price: parseFloat(productPrice),
    };
    setProducts([...products, newProduct]);
    setProductName("");
    setProductPrice("");
  };

  const deleteProduct = (productId) => {
    // Remove a product from the list
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);
  };

  const renderProductItem = ({ item }) => {
    // Render a single product in the list
    return (
      <View style={styles.productItem}>
        <View style={styles.productItemDetails}>
          <TextInput
            style={styles.productItemName}
            value={item.name}
            onChangeText={(text) =>
              setProducts(
                products.map((p) =>
                  p.id === item.id ? { ...p, name: text } : p
                )
              )
            }
          />
          <TextInput
            style={styles.productItemPrice}
            value={item.price.toString()}
            onChangeText={(text) =>
              setProducts(
                products.map((p) =>
                  p.id === item.id ? { ...p, price: parseFloat(text) } : p
                )
              )
            }
            keyboardType="numeric"
          />
        </View>
        <Button title="Delete" onPress={() => deleteProduct(item.id)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
       <ImagePickerButton
        title="Select Product Image"
        onSelectImage={setProductImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Product name"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product price"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
      />
      <Button title="Add Product" onPress={addProduct} />

      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
      <ImagePickerButton title="Select Image" onSelectImage={(imageUri) => console.log("Selected image:", imageUri)} />
      <Button
        title="Save Products"
        onPress={saveProducts}
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
    marginBottom: 8,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productItemDetails: {
    flex: 1,
    marginRight: 8,
  },
  productItemImageContainer: {
    marginVertical: 8,
    alignItems: "center",
  },
  productItemImage: {
    width: 80,
    height: 80,
    // marginRight: 8,
    resizeMode: "contain",
  },
  productItemName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  productItemPrice: {
    fontSize: 14,
    color: "#666",
  },
  saveButton: {
    marginTop: 16,
  },
});

export default AdminProductsScreen;
