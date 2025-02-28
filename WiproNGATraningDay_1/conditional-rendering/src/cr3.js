function UserStatus({ isLoggedIn }) {
    return (
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>
    );
  }
  
  export default UserStatus;
  