import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import StyledText from './StyledText.jsx'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  bar: {
    backgroundColor: theme.colors.black,
    flexDirection: 'row',
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    borderRadius: 6,
    elevation: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
  },
  barContent: {
    marginHorizontal: 18,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const NavBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const NavBar = () => {
  return (
    <View style={styles.bar}>
      <View style={styles.barContent}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <NavBarTab to='/home'>Home</NavBarTab>
          <NavBarTab to='/logs'>Logs</NavBarTab>
          <NavBarTab to='/hosts'>Hosts</NavBarTab>
        </ScrollView>
      </View>
    </View>
  )
}

export default NavBar
