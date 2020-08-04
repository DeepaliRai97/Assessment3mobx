import React from 'react';
import Realm from 'realm';
import { TextInput,View,Button,Alert} from 'react-native';
import { inject, observer } from "mobx-react";

let realm;
@inject('user') 
@observer 

export default class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({ path: 'MovieSchema.realm' });
    this.state = {
      input_movie_id: '',
      name: '',
      generic: '',
      url: '',
    };
  }
  searchMovie = () => {
    const { input_movie_id } = this.state;
    console.log(this.state.input_movie_id);
    var Movies = realm
      .objects('Movies')
      .filtered('movie_id =' + input_movie_id);
    console.log(Movies);
    if (Movies.length > 0) {
      this.setState({
        moviename: Movies[0].moviename,
      });
      this.setState({
        generic: Movies[0].generic,
      });
      this.setState({
        url: Movies[0].url,
      });
    } else {
      alert('No movie found');
      this.setState({
        moviename: '',
      });
      this.setState({
        generic: '',
      });
      this.setState({
        url: '',
      });
    }
  };
  updateMovie = () => {
    const { input_movie_id } = this.state;
    const { moviename } = this.state;
    const { generic } = this.state;
    const { url } = this.state;
    if (input_movie_id) {
      if (moviename) {
        if (generic) {
          if (url) {
            realm.write(() => {
              var ID = this.state.input_movie_id;
              console.log('ID', ID);
              var obj = realm
                .objects('Movies')
                .filtered('movie_id =' + this.state.input_movie_id);
              console.log('obj', obj);
              if (obj.length > 0) {
                obj[0].moviename = this.state.moviename;
                obj[0].generic = this.state.generic;
                obj[0].url = this.state.url;
                Alert.alert(
                 'Movie updated successfully',
                  [
                    {
                      text: 'Ok',
                      onPress: () =>
                        this.props.navigation.navigate('AdminDashBoard'),
                    },
                  ],
                  
                );
              } else {
                alert('Movie Updation Failed');
              }
            });
          } else {
            alert('Please fill Movie url');
          }
        } else {
          alert('Please fill Movie Generic');
        }
      } else {
        alert('Please fill Movie Name');
      }
    } else {
      alert('Please fill Movie Id');
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        
            <TextInput
              placeholder="Enter Movie Id"
              onChangeText={input_movie_id => this.setState({ input_movie_id })}
            />
            <Button
              title="Search Movie"
              customClick={this.searchMovie.bind(this)}
            />
            <TextInput
              placeholder="Enter Movie Name"
              value={this.state.moviename}
              onChangeText={moviename => this.setState({ moviename })}
            />
            <TextInput
              placeholder="Enter Movie Genre"
              value={'' + this.state.generic}
              onChangeText={generic => this.setState({ generic })}
            />
            <TextInput
              value={this.state.url}
              placeholder="Enter Movie url"
              onChangeText={url => this.setState({ url })}
              style={{ textAlignVertical: 'top' }}
            />
            <Button
              title="Update Movie"
              customClick={this.updateMovie.bind(this)}
            />
         
      </View>
    );
  }
}