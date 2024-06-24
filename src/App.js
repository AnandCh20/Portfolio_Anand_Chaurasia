import './App.css';
import SideBar from './components/SideBar';
import Home from './components/Home';
import PropTypes from 'prop-types';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MyContact from './components/MyContact';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="home-container">
          <Home name={props.name} />
          <Skills/>
          <Projects title={"hvhk"}/>
          <MyContact name={props.name}/>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string
};

export default App;
