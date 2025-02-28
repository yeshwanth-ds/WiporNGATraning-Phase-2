
import './App.css';
import Login from './Login';
import LoginFunc from './LoginFunc';
import Welcome from './Welcome';
import WelcomeFunc from './WelcomeFunc';

function App() {
  const userDetails = {
    name: "Yeshwanth",
    address: "Mysore"
  };
  return (
    <div>
      <h1> Class component</h1>
      <Login bname="User" {...userDetails}></Login>
      <Welcome bname="User" {...userDetails}></Welcome>
      <h1>Functional component</h1>
      <LoginFunc bname="User" {...userDetails}></LoginFunc>
      <WelcomeFunc bname="User" {...userDetails}></WelcomeFunc>
      
    </div>
  );
}

export default App;
