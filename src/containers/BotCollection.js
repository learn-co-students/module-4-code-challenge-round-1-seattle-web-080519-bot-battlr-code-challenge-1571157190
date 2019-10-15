import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  
  render(){
  	return (
  	  <div className="ui four column grid">
			Collection of all bots
    		<div className="row">
				{this.props.bots.map(bot => {
					return <BotCard key={bot.id} bot={bot} 
									addBot={this.props.addBot}
									removeBot={this.props.removeBot}/>
				})}
    		  
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
