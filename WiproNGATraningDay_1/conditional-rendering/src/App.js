import './App.css';
import Greeting from './cr1';
import UserRole from './cr2';
import UserStatus from './cr3';

function App() {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <Greeting isLoggedIn={false}></Greeting>
      <UserRole role="admin"></UserRole>
      <UserStatus isLoggedIn={false}></UserStatus>

    </div>
  );
}

export default App;
