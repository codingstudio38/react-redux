import './App.css';
import User from './User';
function App() {
  return (
    <div className="App">
      <h1>App Comonent</h1>
      <User data={{ name: 'Bidyut', age: 23 }} />
    </div>
  );
}

export default App;
