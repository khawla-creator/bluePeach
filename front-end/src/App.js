import './App.css';
import ContactUS from './components/ContactUs/ContactUS';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/Navbar';
import { Route , Switch} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import ErrorPage from './components/ErrorPage/Errorpage'; 
import Men from './components/Categories/Men/Men';
import Insoles from './components/Categories/Insoles/Insoles';
import Women from './components/Categories/Women/Women';
import DescriptionArticle from './components/DescriptionArticle/DescriptionArticle';
import Profile from './components/Profile/Profile';
import Pannier from './components/Pannier/Pannier';
import PrivateRoute from './router/PrivateRoute';
import {useDispatch} from 'react-redux';  
import {useEffect} from 'react';
import { current } from './redux/actions/userActions';
import AdminAppointment from './components/AdminPage/Appointment/AdminAppointment'
import AdminArticles from './components/AdminPage/Articles/AdminArticles'
import AdminContactUs from './components/AdminPage/ContactUs/AdminContactUs'
import AdminUsers from './components/AdminPage/Users/AdminUsers'
import AdminDashboard from './components/AdminPage/Admin/AdminDashboard'
import UpdateArticle from './components/AdminPage/Articles/UpdateArticle';
import Pathologies from './components/Pathologies/Pathologies'

function App() {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(current())},[])

  return (
    <div className="App"> 

        <Navbar/>

        
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/signup'>   
        <SignUp/>
      </Route>

      <Route path='/signin'>
        <SignIn/>
      </Route>

      <PrivateRoute path='/profile' >
      <Profile/>
      </PrivateRoute>

      <Route path='/pathologies' >
      <Pathologies/>
      </Route>

      <Route path='/Categories/Men'>
        <Men/>
      </Route>

      <Route path='/Categories/Women'>
        <Women/>
      </Route>

      <Route path='/Categories/Insoles'>
        <Insoles/>
      </Route>

      <Route path='/descriptionArticle/:name'> 
        <DescriptionArticle />
      </Route>

      <Route path='/pannier'>
        <Pannier/>
      </Route>

      <Route path= '/adminDashboard'> {/** a verifier  */}
      <AdminDashboard/>
      </Route>

      <Route path= '/adminUsers'>
      <AdminUsers/>
      </Route>   

      <Route path= '/adminAppointment'>
      <AdminAppointment/>
      </Route>

      <Route path= '/adminArticles'>
      <AdminArticles/>
      </Route>

      <Route path= '/adminContactUs'>
      <AdminContactUs/>
      </Route>

      <Route path='/updateArticle'>
        <UpdateArticle/>
      </Route>

      <Route path='/*'>
        <ErrorPage/>
      </Route>

      </Switch>
      <ContactUS/>
    </div>
  );
}

export default App;
