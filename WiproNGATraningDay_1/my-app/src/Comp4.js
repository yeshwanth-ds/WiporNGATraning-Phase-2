const users = [
    { name: "Alice", id: 101 },
    { name: "Bob", id: 102 },
    { name: "Charlie", id: 103 },
    { name: "David", id: 104 }
  ];
  
  function Comp4() {
    const listUsers = users.map(user => (
      <li key={user.id}>
        <strong>{user.name}</strong> (ID: {user.id})
      </li>
    ));
  
    return (
      <>
        <h1>Users Directory</h1>
        <p>Below is the list of registered users:</p>
        <ul>{listUsers}</ul>
      </>
    );
  }
  
  export default Comp4;
  