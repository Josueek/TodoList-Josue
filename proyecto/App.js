import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
    /*Aca creamos las variables useState*/
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

   
    const agregarTarea = () => {
        if (tarea.trim() !== '') {
            setTareas([...tareas, tarea]);
            setTarea('');
        }
    };

    const borrarTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

    return (


        <View style={styles.container}>

            <Text style={styles.Titulo}>
                Todo List
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese una tarea"
                value={tarea}
                onChangeText={setTarea}
            />
            <Button title="Agregar" onPress={agregarTarea} />
            {/*Para cada nuevo registro usamos FlatList para crear nuevos input con el texto ingresado*/}
            <FlatList
                data={tareas}
                renderItem={({ item, index }) => (
                    <View style={styles.tareaContainer}>

                        <TextInput
                            style={styles.inputTarea}
                            value={item}
                            editable={false}
                        />
                        <TouchableOpacity onPress={() => borrarTarea(index)} style={styles.iconContainer}>
                            <Ionicons name="close-circle-outline" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    tareaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    botonBorrar: {
        color: 'red',
    }, Titulo: {
        fontSize: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    }, inputTarea: {
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#000',
        borderEndColor: '#000'
    }

});
