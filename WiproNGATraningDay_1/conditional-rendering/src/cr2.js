function UserRole({ role }) {
    switch (role) {
      case "admin":
        return <h1>Welcome, Admin</h1>;
      case "editor":
        return <h1>Welcome, Editor</h1>;
      default:
        return <h1>Welcome, Guest</h1>;
    }
  }
  
  export default UserRole;
  