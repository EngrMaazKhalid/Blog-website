import ResponsiveAppBar from './components/Appbar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Setting from './pages/Setting/Setting';
import Single from './pages/Single/Single';
import Write from './pages/Write/Write';


function App() {
  return (
   <div>
      <ResponsiveAppBar />
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Setting /> */}
      {/* <Login /> */}
      <Register />
      </div>
  );
}

export default App;
