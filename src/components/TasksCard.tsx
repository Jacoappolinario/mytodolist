import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface TasksCardProps extends TouchableOpacityProps {
    task: string;
}

export function TasksCard({ task, ...rest } : TasksCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonTasks}
            {...rest}
        >
            <Text style={styles.textTasks}>
                {task}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonTasks: {
        backgroundColor: '#F1F3F2',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textTasks: {
        color: '#52665A',
        fontSize: 22,
        fontWeight: 'bold'
    }
})