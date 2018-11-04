import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
  <TouchableOpacity
    onPress={onClick}
    disabled={active}
    style={{
      marginLeft: 4,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 4,
      padding: 4,
    }}
  >
    {children}
  </TouchableOpacity>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link