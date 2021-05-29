import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  function handleChangeMode() {
    setDarkMode(!darkMode);
  }

	function handleAddTask(newTaskTitle: string) {
		if(newTaskTitle){
			const data = {
				id: new Date().getTime(),
				title: newTaskTitle,
				done: false
			}

      setTasks(oldState => [...oldState, data]);

    	}
  }

  function handleMarkTaskAsDone(id: number) {
		setTasks(oldState => oldState.filter(
			task => { 
				if(task.id === id) task.done = !task.done;
				return task; 
			}
		));
  }

  function handleRemoveTask(id: number) {
		setTasks(oldState => oldState.filter(
			task => task.id !== id
		));
  }

  return (
    <View style={darkMode ? styles.backgroundDark : {}}>
      <Header 
        darkMode={darkMode} 
        onPress={handleChangeMode}
      />

      <TodoInput 
        darkMode={darkMode} 
        addTask={handleAddTask} 
      />

      <MyTasksList
        darkMode={darkMode} 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundDark: {
    backgroundColor: '#10101E',
    flex: 1,
  }
});