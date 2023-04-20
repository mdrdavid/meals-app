import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminSubscriptionsScreen = () => {
    const [subscriptions, setSubscriptions] = useState([]);
    const [subscriptionName, setSubscriptionName] = useState('');
    const [subscriptionPrice, setSubscriptionPrice] = useState('');
    const [subscriptionInterval, setSubscriptionInterval] = useState('');
    const navigation = useNavigation();
    
    useEffect(() => {
    // Load subscriptions from AsyncStorage
    const loadSubscriptions = async () => {
    const subscriptionsJson = await AsyncStorage.getItem('subscriptions');
    if (subscriptionsJson !== null) {
    setSubscriptions(JSON.parse(subscriptionsJson));
    }
    };
    loadSubscriptions();
    }, []);
    
    const saveSubscriptions = async () => {
    // Save subscriptions to AsyncStorage
    await AsyncStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    };
    
    const addSubscription = () => {
    // Add a new subscription to the list
    const newSubscription = {
    id: Math.random().toString(),
    name: subscriptionName,
    price: parseFloat(subscriptionPrice),
    interval: subscriptionInterval,
    };
    setSubscriptions([...subscriptions, newSubscription]);
    setSubscriptionName('');
    setSubscriptionPrice('');
    setSubscriptionInterval('');
    };
    
    const deleteSubscription = (subscriptionId) => {
    // Remove a subscription from the list
    const updatedSubscriptions = subscriptions.filter((s) => s.id !== subscriptionId);
    setSubscriptions(updatedSubscriptions);
    };
    
    const renderSubscriptionItem = ({ item }) => {
    // Render a single subscription in the list
    return (
    <View style={styles.subscriptionItem}>
    <View style={styles.subscriptionItemDetails}>
    <TextInput
    style={styles.subscriptionItemName}
    value={item.name}
    onChangeText={(text) =>
    setSubscriptions(
    subscriptions.map((s) =>
    s.id === item.id ? { ...s, name: text } : s
    )
    )
    }
    />
    <TextInput
    style={styles.subscriptionItemPrice}
    value={item.price.toString()}
    onChangeText={(text) =>
    setSubscriptions(
    subscriptions.map((s) =>
    s.id === item.id ? { ...s, price: parseFloat(text) } : s
    )
    )
    }
    keyboardType="numeric"
    />
    <TextInput
    style={styles.subscriptionItemInterval}
    value={item.interval}
    onChangeText={(text) =>
    setSubscriptions(
    subscriptions.map((s) =>
    s.id === item.id ? { ...s, interval: text } : s
    )
    )
    }
    />
    </View>
    <Button title="Delete" onPress={() => deleteSubscription(item.id)} />
    </View>
    );
    };
    
    return (
    <View style={styles.container}>
    <TextInput
         style={styles.input}
         placeholder="Subscription name"
         value={subscriptionName}
         onChangeText={setSubscriptionName}
       />
    <TextInput
         style={styles.input}
         placeholder="Subscription price"
         value={subscriptionPrice}
         onChangeText={setSubscriptionPrice}
         keyboardType="numeric"
       />
    <TextInput
         style={styles.input}
         placeholder="Subscription interval"
         value={subscriptionInterval}
         onChangeText={setSubscriptionInterval}
       />
    <Button title="Add subscription" onPress={addSubscription} />
    <FlatList
    data={subscriptions}
    keyExtractor={(item) => item.id}
    renderItem={renderSubscriptionItem}
    />

<Button
        title="Go to Services"
        onPress={() => navigation.navigate("AdminServicesScreen")}
      />
      <Button
        title="Go to Products"
        onPress={() => navigation.navigate("AdminProductsScreen")}
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
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        },
        subscriptionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        },
        subscriptionItemDetails: {
        flex: 1,
        marginRight: 8,
        },
        subscriptionItemName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 4,
        },
        subscriptionItemPrice: {
        fontSize: 14,
        color: '#666',
        },
        subscriptionItemInterval: {
        fontSize: 14,
        color: '#666',
        },
        saveButton: {
        marginTop: 16,
        },
        });
        export default AdminSubscriptionsScreen