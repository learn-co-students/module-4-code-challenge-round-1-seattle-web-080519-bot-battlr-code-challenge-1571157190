import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots: []
  }

  componentDidMount() {
	  fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
	  .then(response => response.json())
	  .then(json => this.setState({
		  bots: json
	  }))
  };

  addBot = (bot) => {
    return this.state.myBots.includes(bot) 
    ? null 
    : this.setState({
        myBots: [...this.state.myBots, bot]
      })
  };
  removeBot = (bot) => {
    this.setState({
      myBots: this.state.myBots.filter(b => b !== bot)
    })
  };

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} removeBot={this.removeBot}/>

        <BotCollection bots={this.state.bots} addBot={this.addBot} />
      </div>
    );
  }

}

export default BotsPage;
