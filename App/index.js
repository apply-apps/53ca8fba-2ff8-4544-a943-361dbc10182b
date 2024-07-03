// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const tales = [
    { id: '1', title: 'The Tortoise and the Hare' },
    { id: '2', title: 'The Three Little Pigs' },
    { id: '3', title: 'Goldilocks and the Three Bears' },
];

const taleTexts = {
    '1': `
        Once upon a time, there was a speedy hare who bragged about how fast he could run. Fed up with hearing him boast, the tortoise challenged him to a race. All the animals in the forest gathered to watch.
        The hare ran down the road for a while and then paused to rest. He looked back at the tortoise and cried out, "How do you expect to win this race when you are walking at your slow, slow pace?"
        The hare stretched himself out alongside the road and fell asleep, thinking, "There is plenty of time to relax."
        The tortoise walked and walked, never ever stopping until he came to the finish line. The animals who were watching cheered so loudly for the tortoise that they woke up the hare. The hare stretched, yawned, and began to run again, but it was too late. The tortoise had already won the race.
        The moral of the story is, slow and steady wins the race.
    `,
    '2': `
        Once upon a time, there were three little pigs. One pig built a house of straw, while the second pig built his house with sticks. They built their houses very quickly and then danced and sang all day because they were lazy. The third little pig worked hard all day and built his house with bricks.
        A big bad wolf saw the two little pigs while they danced and played and thought, "What juicy tender meals they will make!" He chased the two pigs and they ran and hid in their houses. The big bad wolf went to the first house and huffed and puffed and blew the house down in minutes. The frightened little pig ran to the second pig’s house that was made of sticks. The big bad wolf now came to this house and huffed and puffed and blew the house down in hardly any time. Now, the two pigs were terrified and ran to the third pig’s house that was made of bricks.
        The big bad wolf tried to huff and puff and blow the house down, but he could not. He kept trying for hours but the house was very strong and the little pigs were safe inside. He finally decided to go down the chimney, but the third little pig boiled a big pot of water and kept it below the chimney. The wolf fell into it and the three little pigs were safe.
        The moral of the story is, work hard and always be prepared for difficult times.
    `,
    '3': `
        Once upon a time, there was a little girl named Goldilocks. She went for a walk in the forest. Pretty soon, she came upon a house. She knocked and, when no one answered, she walked right in.
        At the table in the kitchen, there were three bowls of porridge. Goldilocks was hungry. She tasted the porridge from the first bowl.
        "This porridge is too hot!" she exclaimed.
        So, she tasted the porridge from the second bowl.
        "This porridge is too cold," she said.
        So, she tasted the last bowl of porridge.
        "This porridge is just right," she said happily and she ate it all up.
    `,
};

const HomeScreen = ({ navigation }) => (
    <SafeAreaView style={homeStyles.container}>
        <Text style={homeStyles.title}>Kids Tales</Text>
        {tales.map(tale => (
            <TouchableOpacity 
                key={tale.id} 
                style={homeStyles.button} 
                onPress={() => navigation.navigate('Tale', { taleId: tale.id })}
            >
                <Text style={homeStyles.buttonText}>{tale.title}</Text>
            </TouchableOpacity>
        ))}
    </SafeAreaView>
);

const TaleScreen = ({ route }) => {
    const { taleId } = route.params;
    return (
        <ScrollView style={taleStyles.container}>
            <Text style={taleStyles.text}>{taleTexts[taleId]}</Text>
        </ScrollView>
    );
};

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale" component={TaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

const taleStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 20,
    },
    text: {
        fontSize: 18,
    },
});