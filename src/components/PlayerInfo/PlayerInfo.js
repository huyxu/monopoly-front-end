import React, { Component } from "react";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  render() {
    return (
      // player__container lay o dau
      <div className="row player__container"> 
        <div className="col-6 player__inf">
          <h3 className="player__name">Huy Xu</h3>
          <ion-icon name="person-sharp" class="player__icon" />
          <h3 className="player__money">$10000</h3>
        </div>
        {/* PLAYERS MONEY */}
        <div className="col-6 players__money">
          <div>
            <span className="player__name">Huy Xu :</span>
            <span className="player__money">$-1</span>
          </div>
          <div>
            <span className="player__name">Nam Do :</span>
            <span className="player__money">$10000</span>
          </div>
          <div>
            <span className="player__name">Bui Duong :</span>
            <span className="player__money">$2</span>
          </div>
          <div>
            <span className="player__name">Another Name :</span>
            <span className="player__money">$9000</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerInfo;

// player__icon: className --> class : wtf??? => DONE
