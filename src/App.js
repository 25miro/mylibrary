import './App.css';
import Dashboard from './components/Dashboard';
import FilterBooks from './components/FilterBooks';
import MyBooks from './components/MyBooks';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <>
      <Dashboard />
      <NavMenu />
      {/*<FilterBooks />*/}
      <MyBooks />
    </>
  );
}

export default App;
