import ResponsiveAppBar from './components/Appbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Setting from './pages/Setting/Setting';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';
import {BrowserRouter as Router,

Route,
Link,
Routes} from 'react-router-dom'

function App() {
  const user =true
  return (
   <Router>
    
      <ResponsiveAppBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={user ? <Home /> :<Register />} />
        <Route exact path='/login' element={user ? <Home /> :<Login />} />
        <Route exact path='/post/:postid' element={ <Single /> } />
        <Route exact path='/write' element={user ? <Write />:<Register />} />
        <Route exact path='/setting' element={<Setting />} />
        
   
      </Routes>
      
      </Router>
  );
}

export default App;
