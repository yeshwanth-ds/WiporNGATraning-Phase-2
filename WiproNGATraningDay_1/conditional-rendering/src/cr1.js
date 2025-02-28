function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
      return <h1>Welcome Back!</h1>;
    } else {
      return <h1>Please Sign In</h1>;
    }
  }
  
  export default Greeting;