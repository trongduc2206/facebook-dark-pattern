import "./rightbar.css"
import React from 'react'
import { Users } from '../../dummyData'
import OnlineFriend from "../online/OnlineFriend"
import CloseIcon from "@mui/icons-material/Close";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="./assets/gift.png" alt="" className="birthdayImage" />
          <span className="birthdayText">
            <b>Gopal Patel</b> and <b>other friends</b> have a birthday today.
          </span>
        </div>
        <div style={{marginTop: '10px', padding: "10px", borderRadius: "8px" }} className="ads">
          <div style={{ display: "flex"}} >
            <img src="./assets/ad1.png" width="50" alt="" className="rightbarAdImg" />
            <h3 style={{ marginLeft: '10px' }}>cocacola.com</h3>
            <CloseIcon style={{ cursor:'pointer'}} className="moreIcon"/>
          </div>

          <button className="adsButton">Learn more</button>
        </div>
        <hr className="rightbarHr" />

        <p className="rightbarTitle">Contacts</p>
        <ul className="rightbarFriendList">
          {Users.filter((user) => {
            return user.id > 1
          }).map((u) => (
            <OnlineFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
