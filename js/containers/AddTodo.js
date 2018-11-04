import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let text;


  const add = () => {
    if (!text.trim()) {
      return
    }
    dispatch(addTodo(text))
    // text = ''
  }

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'flex-end',
    }}>
      <TextInput
        ref={node => (input = node)}
        style={{ flex: 1, borderWidth: 1, paddingLeft: 5 }}
        onChangeText={(value) => (text = value)}
      />
      <TouchableOpacity style={{ flex: 1, alignItems: 'center', }} onPress={add}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  )
}

export default connect()(AddTodo)