import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/footer.js'
class App extends Component {
  render() {
    return (
      <div id="app">
        <main className="main">
          {this.props.children}
        </main>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
