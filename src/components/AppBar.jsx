import React from 'react'
import { View, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import constants from '../constants.js'

const styles = StyleSheet.create({
  AppBar: {
    flexDirection: 'row',
  },
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
  }
})


const AppBar = ({title,count}) => {
  var txtTitle = constants.app.name
  txtTitle = title === 'home' ? constants.views.home.title : txtTitle
  txtTitle = title === 'log' ? constants.views.logs.title : txtTitle
  return (
    <View style={styles.container}>
      <View style={styles.AppBar}>
        <View style={{ flex: 1}}>
          {txtTitle && <StyledText align='left' color='black' text='bold'>
            {txtTitle}
          </StyledText>}
        </View>
        <View style={{ flex: 1}}>
          {count && <StyledText align='right' color='black' >
              {count} {constants.views.logs.info}
          </StyledText>}
        </View>
      </View>
    </View>
  )
}

export default AppBar
