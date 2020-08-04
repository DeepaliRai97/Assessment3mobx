import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Realm from 'realm';
import { inject, observer } from "mobx-react";
let realm;

@inject('user')
@observer
export default class ViewMovie extends React.Component {
    constructor(props) {
        super(props);
        realm = new Realm({ path: 'MovieSchema.realm' });
        this.state = {
            input_movie_id: '',
            movieData: '',
        };
    }
    view_Movie = () => {
        const { input_movie_id } = this.state;
        console.log(this.state.input_movie_id);
        var Movies = realm
            .objects('Movies')
            .filtered('movie_id =' + input_movie_id);
        console.log(Movies);
        if (Movies.length > 0) {
            console.log(Movies[0]);
            this.setState({
                movieData: Movies[0],
            });
        } else {
            alert('No movie found');
            this.setState({
                movieData: '',
            });
        }
    };
    render() {
        return (
            <View>
                <TextInput
                    placeholder="Enter Movie Id"
                    onChangeText={input_movie_id => this.setState({ input_movie_id })}
                />
                <Button
                    title="Search Movie"
                    onPress={this.view_Movie.bind(this)}
                />
                <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
                    <Text>Movie Id: {this.state.movieData.id}</Text>
                    <Text>Movie Name: {this.state.movieData.name}</Text>
                    <Text>Movie Genre: {this.state.movieData.generic}</Text>
                    <Text>Movie IMDB: {this.state.movieData.url}</Text>
                </View>
            </View>
        );
    }
}