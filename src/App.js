import "./App.css";
import Login from "./components/Login";
import Count from "./components/Count"
import Liker from "./components/Liker"
import FormInput from "./components/FormInput"
import TodoList from "./components/TodoList"
//working onClick, onChange, onSubmit react events
function App() {
  
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="App">
      <Login />
      {/* <Count/>
      <Liker/>
      <FormInput/> */}

      <TodoList/> 
      {/* <header className="App-header">
        <h3>React events</h3>
        <button onClick={handleClick}>Click me</button>
        <form>
          <input type='text' placeholder='Type something' onChange={handleChange}/>
        <select>
          <option value='1'>one</option>
          <option value='2'>two</option>
        </select>
        <button type='submit'>submit Form</button>
        </form>
      </header> */}
    </div>
  );
}

export default App;
