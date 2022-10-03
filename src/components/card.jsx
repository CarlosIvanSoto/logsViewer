import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme';

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        { props.children }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 5,
    backgroundColor: theme.colors.white,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // marginHorizontal: 4,
    marginVertical: 8,
    marginHorizontal: 18,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  }
});