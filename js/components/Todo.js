import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <TouchableOpacity onPress={onClick}>
    <Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>{text}</Text>
  </TouchableOpacity>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo