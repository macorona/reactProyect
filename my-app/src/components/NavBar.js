import React, { Component } from 'react';

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
