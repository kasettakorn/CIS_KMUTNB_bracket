import React, { Component } from 'react'
import Tournament from './components/TournamentBracket';
import './styles/App.css'
class App extends Component {


  render() {
    return (
      <div>
        <h1 className="heading">
            ⚽️ CIS Tournament Bracket ⚽️ 
        </h1>
        <Tournament />
      </div>
    )
  }
}

export default App
