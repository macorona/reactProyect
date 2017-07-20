import React, { Component } from 'react';

class Section extends Component {
    render() {
      const {name} = this.props;
      const classSection = name === 'Section 1'
                            ? 'bg-blue'
                            : name === 'Section 2'
                            ? 'bg-green'
                            : 'bg-yellow';
      return (
          <section className={ classSection }>
            <div>{ name }</div>
          </section>
      )
    }
}

export default Section;
