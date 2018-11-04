import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', }}>
    <Text>Show: </Text>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}><Text>All</Text></FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}><Text>SHOW_ACTIVE</Text></FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}><Text>Completed</Text></FilterLink>
  </View>
)

export default Footer