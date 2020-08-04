import React from 'react';
import { Button, Text, View, Alert } from 'react-native';
import { inject, observer } from "mobx-react";
import { TextInput, TouchableOpacity } from 'react-native';
import Realm from 'realm';

let realm;

@inject('user')
@observer

export default class DeleteMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_movie_id: '',
    };
    realm = new Realm({ path: 'MovieSchema.realm' });
  }

  delete_Movie = () => {
    const { input_movie_id } = this.state;
    realm.write(() => {
      var ID = this.state.input_movie_id;
      if (
        realm.objects('Movies').filtered('movie_id =' + input_movie_id)
          .length > 0
      ) {
        realm.delete(
          realm.objects('Movies').filtered('movie_id =' + input_movie_id)
        );
        var Movies = realm.objects('Movies');
        console.log(Movies);
        Alert.alert(
          'Movie deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => this.props.navigation.navigate('AdminDashBoard'),
            },
          ],

        );
      } else {
        alert('Please insert a valid Movie Id');
      }
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <TextInput
          placeholder="Enter Movie Id"
          onChangeText={input_movie_id => this.setState({ input_movie_id })}
        />
        <TouchableOpacity onPress={this.delete_Movie.bind(this)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}