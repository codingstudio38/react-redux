import './App.css';
import HomeContainer from './containers/HomeContainer';
// import User from './User';
import HeaderContainer from './containers/HeaderContainer'
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
