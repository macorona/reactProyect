import { connect,  } from 'react-redux';
import App from './App';

function mapStateToProps(state) {
  const {currentSection} = state;
  return {
    currentSection,
  };
}

export default connect(mapStateToProps)(App);
