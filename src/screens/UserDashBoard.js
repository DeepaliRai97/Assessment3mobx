import React from 'react';
import { View, Button, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class UserDashBoard extends React.Component {
    constructor(props) {
    super(props);
}
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          flexDirection: 'column'
        }}>

        <TouchableOpacity style={styles.buttonText}
          onPress={() => this.props.navigation.navigate('ViewMovie')}>
          <Text style={styles.buttonText}>ViewMovie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonText}
          onPress={() => this.props.navigation.navigate('ViewAllMovie')}>
          <Text style={styles.buttonText}>ViewAllMovie</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "column",
    color: '#ffffff',
  },
  buttonText: {
    textAlign: 'center',
    color: '#0B5149',
    fontWeight: '700',
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,

  },

});