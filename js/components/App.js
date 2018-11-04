import React from 'react'
import { Text, View, SafeAreaView, } from 'react-native';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, }}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </SafeAreaView>
)

export default App