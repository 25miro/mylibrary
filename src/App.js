import './App.css';
import BookDashboard from './components/BookDashboard';
import NavMenu from './components/NavMenu';
import FilterBooks from './components/FilterBooks';


function App() {
  return (
    <>
      <NavMenu />
      <FilterBooks />
      <BookDashboard />
    </>
  );
}

export default App;
