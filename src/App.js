
import './App.css';

//working onClick, onChange, onSubmit react events
function App() {
  const handleClick=(event)=>{
    event.preventDefault()
    alert('did you just lick me!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>React events</h3>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;
