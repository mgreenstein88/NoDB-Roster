import React, {Component} from 'react';
import Header from './Components/Header';
import axios from 'axios';
import './App.css'
import Roster from './Components/Roster';

class App extends Component {
  constructor(){
    super()

    this.state = {
      existingList: [],
    }
    
    this.newPlayers = this.newPlayers.bind(this)
    this.editPlayerName = this.editPlayerName.bind(this)
    this.deletePlayer = this.deletePlayer.bind(this)
  }

  componentDidMount(){
    axios.get('/api/players').then((res) => {
      this.setState({
        existingList: res.data,
      })
    })
  }
  newPlayers(number, name, position, age){
    const body = {number, name, position, age}
    axios.post('/api/players', body).then((res) => {
      this.setState({
        existingList: res.data,
      })
    })
  }
  editPlayerName(id, newName){
    const body = {newName}

    axios.put(`/api/players/${id}`, body).then((res) => {
      this.setState({
        existingList: res.data,
      })
    })
  }
  deletePlayer(id){
    axios.delete(`/api/players/${id}`).then((res) => {
      this.setState({
        existingList: res.data,
      })
    })
  } 
  render(){
    console.log('State', this.state)

    return (
      <div className="App">
        <Header />
        <Roster 
          existingList={this.state.existingList}
          newPlayers={this.newPlayers}
          editPlayerName={this.editPlayerName}
          deletePlayer={this.deletePlayer}
          />
      </div>
    )
  }
}

export default App;
