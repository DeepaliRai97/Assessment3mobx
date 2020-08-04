import { MovieSchema } from '../database/MovieSchema';
import { observable, action, computed } from 'mobx';

const Realm = require('realm');

class MovieList {

    @observable Movies = [];
    
    @action add_Movie = async (movieDetails) => {
        console.log('xyz');
        Realm.open({ schema: [MovieSchema] }).then(
            realm => {
                realm.write(() => {
                    realm.create('Movies', movieDetails);
                    console.log('Movie added successfully')
                })
            }
        ).catch(error => {
            console.log("Error while adding movie" + error);
        });
    }

    @action delete_Movie = async (name) => {
        Realm.open({ schema: [MovieSchema] }).then(
            realm => {
                realm.write(() => {
                    realm.delete('Movies', name);
                    console.log('Movie deleted successfully')
                })
            }
        ).catch(error => {
            console.log("Error while deleting movie" + error);
        });
    }

    @action updateMovie = async (name) => {
        Realm.open({ schema: [MovieSchema] }).then(
            realm => {
                realm.write(() => {
                    realm.delete('Movies', name);
                    console.log('Movie updated successfully')
                })
            }
        ).catch(error => {
            console.log("Error while updating movie" + error);
        });
    }

    @action searchMovie = async (name) => {
        Realm.open({ schema: [MovieSchema] }).then(
            realm => {
                realm.write(() => {
                    realm.delete('Movies', name);
                    console.log('Movie searched successfully')
                })
            }
        ).catch(error => {
            console.log("Error while searching movie" + error);
        });
    }

    @computed get getError() {
        return this.getError;
    }

}

export default MovieList;
