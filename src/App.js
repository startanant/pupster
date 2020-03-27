import React, {useState} from 'react';
import NavBar from './Components/NavBar'
import AboutPage from './Components/AboutPage'
import DiscoverPage from './Components/DiscoverPage'
import SearchPage from './Components/SearchPage'


function App() {
  const [ activePage, setActivePage ] = useState( 'AboutPage' );
  
  function changePage( page ) {
    setActivePage ( page );
  }
  
  
  
  return (
    <div className="App">
      <NavBar activePage = {activePage} changePage={changePage}/>
      { activePage==='AboutPage' ? <AboutPage/> : ''}
      { activePage==='DiscoverPage' ? <DiscoverPage/> : ''}
      { activePage==='SearchPage' ? <SearchPage/> : ''}
    </div>
  );
}

export default App;
