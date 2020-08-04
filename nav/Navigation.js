import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserSignIn from '../src/screens/UserSignIn';
import UserSignUp from '../src/screens/UserSignUp';
import AdminSignIn from '../src/screens/AdminSignIn';
import AdminSignUp from '../src/screens/AdminSignUp';
import AdminDashBoard from '../src/screens/AdminDashBoard';
import UserDashBoard from '../src/screens/UserDashBoard';
import MovieList from '../store/MovieList';
import AddMovie from '../components/AddMovie';
import DropDown from '../src/screens/DropDown';
import DeleteMovie from '../components/DeleteMovie';
import EditMovie from '../components/EditMovie';
import GetMovie from '../components/GetMovie';
import ViewMovie from '../components/ViewMovie';
import ViewAllMovie from '../components/ViewAllMovie';

const Navigation = createStackNavigator({
	UserSignIn:UserSignIn,
	UserSignUp:UserSignUp,
	AdminSignIn:AdminSignIn,
	AdminSignUp:AdminSignUp,
	DropDown:DropDown,
	AdminDashBoard:AdminDashBoard,
	MovieList:MovieList,
	UserDashBoard:UserDashBoard,
	AddMovie:AddMovie,
	DeleteMovie:DeleteMovie,
	EditMovie:EditMovie,
	GetMovie:GetMovie,
	ViewMovie:ViewMovie,
	ViewAllMovie:ViewAllMovie,
},
{
	initialRouteName: 'DropDown',
}
);

export default createAppContainer(Navigation);