import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Section from './components/Section';
import store from './state/store';


class App extends Component {
  //se utiliza para controlar el estado
  constructor(props) {
    super(props);

    this.state={
      name:'Marco',
      message: 'hola como estan?',
      showName: true,
      currentSection: 'Section 5',
    };
  }

  setShowName() {
    const {showName} = this.state;
    this.setState({showName: !showName});
  }

  /*changeCurrentSection(currentSection) {
    this.setState({currentSection});
  }*/

  render() {
    //const {name , message, showName, currentSection} = this.state;
    const {name , message, showName} = this.state;
    const {currentSection} = this.props;
    const sections = ['Section 1','Section 2', 'Section 3'];
    const renderShowName = showName
                  ? <p className="App-intro">
                        {`${name}, ${message}`}
                    </p>
                  : undefined;

    console.log(currentSection);
    console.log(this.props.currentSection);

    return (
        <div className="App">
            <div className="App-header">
                <NavBar sections = {sections}/>

            </div>
            <Section name={currentSection}/>

            <div onClick= {this.setShowName.bind(this)}>show Name</div>
              {renderShowName}

            <p className="App-intro">
              {`${name},${message}`}
            </p>
        </div>
    );
  }
}

export default App;
