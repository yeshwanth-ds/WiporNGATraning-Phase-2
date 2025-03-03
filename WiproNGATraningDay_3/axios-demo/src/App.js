import './App.css';
import Register from './Register';
import RegisterUser from './RegisterUser';
import UserForm from './UserForm';
import UserList from './UserList';

function App() {
  return (
    <div>
      <h1>User List</h1>
      <UserList></UserList>
      <h1>Add User</h1>
      <UserForm></UserForm>
      <h1>Formik pages</h1>
      <Register></Register>
      <RegisterUser></RegisterUser>
      
    </div>
  );
}

export default App;
