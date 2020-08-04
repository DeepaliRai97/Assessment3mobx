import React from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import Realm from 'realm';
import { inject, observer } from "mobx-react";
let realm;

@inject('user')
@observer

export default class AddMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviename: '',
            generic: '',
            url: '',
        };
        realm = new Realm({ path: 'MovieSchema.realm' });
    }
    add_Movie = () => {
        const { moviename } = this.state;
        const { generic } = this.state;
        const { url } = this.state;
        if (moviename) {
            if (generic) {
                if (url) {
                    realm.write(() => {
                        var ID =
                            realm.objects('Movies').sorted('movie_id', true).length > 0
                                ? realm.objects('Movies').sorted('movie_id', true)[0]
                                    .movie_id + 1
                                : 1;
                        realm.create('Movies', {
                            movie_id: ID,
                            moviename: this.state.moviename,
                            generic: this.state.generic,
                            url: this.state.url,
                        });
                        Alert.alert(
                            'Success',
                            'Movie added successfully',
                            [
                                {
                                    text: 'Ok',
                                    onPress: () => this.props.navigation.navigate('AdminDashBoard'),
                                },
                            ],
                            { cancelable: false }
                        );
                    });
                } else {
                    alert('Please add url');
                }
            } else {
                alert('Please add Movie Generic');
            }
        } else {
            alert('Please add Movie Name');
        }
    };

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <TextInput
                    placeholder="Enter Movie Name"
                    onChangeText={moviename => this.setState({ moviename })}
                />
                <TextInput
                    placeholder="Enter Genre"
                    onChangeText={generic => this.setState({ generic })}
                />
                <TextInput
                    placeholder="Enter url"
                    onChangeText={url => this.setState({ url })}
                    style={{ textAlignVertical: 'top' }}
                />
                <Button
                    title="Submit"
                    onPress={this.add_Movie.bind(this)}
                />
            </View>
        );
    }
}