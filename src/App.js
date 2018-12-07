import React from 'react';
import Navbar from './components/Navbar'
import PlayerCard from './components/PlayerCard';

import NBA from 'nba'

class App extends React.Component {
  state = {
    players: []
  }
  _searchForPlayer = name => {
    const playerInfo = NBA.findPlayer(name)
    if (playerInfo) {
      const {playerId} = playerInfo
      NBA.stats.playerInfo({
        PlayerID: playerId
      })
      .then(info => {
        const {displayFirstLast, height, weight, jersey} = info.commonPlayerInfo[0]
        const newPlayer = {
          playerId, displayFirstLast, height, weight, jersey
        }
        this.setState({
          players: [...this.state.players, newPlayer]
        })
        // here
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  render() {
    return (
      <>
        <Navbar _searchForPlayer={this._searchForPlayer} />

        {this.state.players.length > 0 && this.state.players.map(player => 
        <PlayerCard 
          key={player.playerId} 
          {...player} 
        />)}
      </>
    );
  }
}

export default App;
