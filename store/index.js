//import movies from "./movies";
import AdminDashBoard from "./MovieList";
class store {
    user: AdminDashBoard;
    constructor() {
        //  movies: new movies(),
        this.user = new AdminDashBoard(this);
    }
}
export default new store();




