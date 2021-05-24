import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { TasksCard } from '../components/TasksCard';

interface TasksData {
    id: string;
    name: string;
}

export function Home() {
    const [newTasks, setNewTasks] = useState('')
    const [myTasks, setMyTasks] = useState<TasksData[]>([])
    const [greeting, setGreeting] = useState('')

    function handleAddNewTask() {
        const data = {
            id: String(new Date().getTime()),
            name: newTasks
        }

        setMyTasks(oldState => [...oldState, data])
    }

    function handleDeleteTask(id: string) {
        setMyTasks(oldState => oldState.filter(
            task => task.id !== id 
        ))
    }

    useEffect(() => {
        const currentHour = new Date().getHours()

        if (currentHour < 12) {
            setGreeting('Good morning 🌄')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good afternoon ⛅')
        } else {
            setGreeting('Good night 🌙')
        }

    }, [])
   
    return (
        <View style={styles.container}>
            <Text 
                style={styles.title}
            >
                Welcome Jacó
            </Text>

            <Text style={styles.greeting}>
                {greeting}
            </Text>

            <TextInput
                style={styles.input}
                placeholder="New Task"
                placeholderTextColor="#AEB3B0"
                onChangeText={setNewTasks}
            />

            <Button title="Add" onPress={handleAddNewTask}/>

            <Text style={[styles.title, { marginTop: 50 }]}>
                My Tasks
            </Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={myTasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TasksCard task={item.name} onPress={() => handleDeleteTask(item.id)}/>
                )}
                
            />
        
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#52665A',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F1F3F2',
        color: '#52665A',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greeting: {
        color: '#52665A',
        fontSize: 16
    }
})