import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import StyledText from './StyledText.jsx'
import theme from '../theme.js'
import Card from './card.jsx'

const LogItem = ({title,message,hostname,datetime}) => (
  <View style={styles.container}>
    <Card>
      <View style={styles.HeaderContainer}>
        <View style={{ flex: 1}}>
          <StyledText align='left' style={styles.HeaderItem}>{hostname}</StyledText>
        </View>
        <View style={{ flex: 1}}>
          <StyledText align='right' style={styles.HeaderItem}>{datetime}</StyledText>
        </View>
      </View>
      <View style={styles.Spacer} />
      <View style={styles.BodyContainer}>
        <StyledText >{title}</StyledText>
        <View style={styles.TextArea}>
          <StyledText> {message}</StyledText>
        </View>
      </View>
    </Card>
  </View>
)

const styles = StyleSheet.create({
  HeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 2,
  },
  TextArea:{
    marginTop: 5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,

    backgroundColor: '#fff',
  },
  BodyContainer:{
    paddingTop: 18
  },
  container: {
    // paddingTop: 10,
    // paddingHorizontal: 10
  },
  HeaderItem: {
    color: theme.colors.black
  },
  BodyItem: {
    color: theme.colors.black,
    paddingTop: 2,
  },
  Spacer: {
    width: '100%',
    height: 2, 
    backgroundColor: theme.colors.black,
  }
})

export default LogItem
