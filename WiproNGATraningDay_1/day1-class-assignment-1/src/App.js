import './App.css';
import First1 from './classComponents';
import First from './functionalcomponents';
import Student from './student';
import Student1 from './student1';

function App() {
  const handleHello = () => alert("Hello");
  const handleBye = () => alert("Bye");
  return (
    <div >
      <First1></First1>
      <First></First>
      <Student1 name="Yeshwanth" address="Mysore" scores={[98]} />
      <Student name="Yeshwanth" address="Mysore" scores={[98]}></Student>
      <button onClick={handleHello}>Say Hello</button>
      <button onClick={handleBye}>Say Bye</button>

    </div>
  );
}

export default App;
