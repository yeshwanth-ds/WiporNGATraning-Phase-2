import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", contact: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3000/users");
    setUsers(response.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addUser = async () => {
    await axios.post("http://localhost:3000/users/add", form);
    fetchUsers();
    setForm({ name: "", email: "", contact: "" });
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/delete/${id}`);
    fetchUsers();
  };

  const editUser = async () => {
    await axios.put(`http://localhost:3000/users/edit/${editingId}`, form);
    setEditingId(null);
    fetchUsers();
    setForm({ name: "", email: "", contact: "" });
  };

  const startEdit = (user) => {
    setEditingId(user.id);
    setForm({ name: user.name, email: user.email, contact: user.contact });
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="contact"
        value={form.contact}
        onChange={handleChange}
        placeholder="Contact"
      />
      {editingId ? (
        <button onClick={editUser}>Update User</button>
      ) : (
        <button onClick={addUser}>Add User</button>
      )}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.contact}
            <button onClick={() => startEdit(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
