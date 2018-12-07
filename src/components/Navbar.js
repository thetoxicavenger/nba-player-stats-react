import React from 'react'

class Navbar extends React.Component {
  state = {
    searched: ""
  }
  _onChange = e => {
    this.setState({
      searched: e.target.value
    })
  }
  _onClick = () => {
    this.props._searchForPlayer(this.state.searched)
  }
  render() {
    return (
      <>
        <div style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', padding: '10px 5px' }}>
          <div>
            <a href="/" style={{ fontSize: '24px', color: 'white', textDecoration: 'none' }}>NBA Player Stats</a>
          </div>
          <div>
            <span>Add Player Stats...</span>
            <input
              type="text"
              value={this.state.searched}
              onChange={this._onChange}
            />
            <button
              onClick={this._onClick}
            >Add</button>
          </div>
        </div>
      </>
    )
  }
}

export default Navbar