import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeCurrentSection} from '../state/action';

class NavBar extends Component {
    render() {
      //dispatch se agrega al conectar el componente con redux
      //lo agrega a las propiedades
      const {sections, dispatch} = this.props;
      console.log(dispatch);
      const renderSections = sections.map(
          section => <li className = 'navBar-ul__section'
                      key={ section }
                      onClick = {() => dispatch(changeCurrentSection(section))}>
                      {section}
                     </li>
      );
      return (
          <nav className = 'navBar'>
            <ul className = 'navBar-ul'>
              {renderSections}
            </ul>
          </nav>
      )
    }
}

export default connect()(NavBar);

/*
class NavBar extends Component {
    render() {
      //dispatch se agrega al conectar el componente con redux
      //lo agrega a las propiedades
      const {sections, changeSection, dispatch} = this.props;
      console.log(dispatch);
      const renderSections = sections.map(
          section => <li className = 'navBar-ul__section'
                      key={ section }
                      onClick = {() => changeSection(section)}>
                      {section}
                     </li>
      );
      return (
          <nav className = 'navBar'>
            <ul className = 'navBar-ul'>
              {renderSections}
            </ul>
          </nav>
      )
    }
}*/



/* sin redux
class NavBar extends Component {
    render() {
      const {sections, changeSection} = this.props;
      const renderSections = sections.map(
          section => <li className = 'navBar-ul__section'
                      key={ section }
                      onClick = {() => changeSection(section)}>
                      {section}
                     </li>
      );
      return (
          <nav className = 'navBar'>
            <ul className = 'navBar-ul'>
              {renderSections}
            </ul>
          </nav>
      )
    }
}

export default NavBar;
*/
