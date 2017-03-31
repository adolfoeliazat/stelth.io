import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        herroooooo
        {console.log('this.props.children in app', this.props.children)}
        {this.props.children}
      </div>
    )
  }
}

export default App;


