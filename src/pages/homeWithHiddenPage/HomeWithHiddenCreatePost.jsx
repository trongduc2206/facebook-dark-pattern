
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './hiddenCreatePost.css';
import React, { useState, useRef } from 'react'
import Home from "../home/Home";


export default function CreatePost() {
  const ref = useRef(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const changeState = () => {
    ref.current?.focus();
    setShowCreatePost(!showCreatePost);
  }
  const [showAds, setShowAds] = useState(true);
  const changeStateAds = () => {
    setShowAds(!showAds)
  }



  return (<>

    <Home showCreatePost={showCreatePost} changeState={changeState} showAds={showAds} />

    <div className={showCreatePost ? "showCreatePost" : "hideCreatePost"}>
      <div className="createPostWrapper">
        <div className="createPostTop">
          <h3 className="createPostTitle">Create post</h3>
          <div className="createPostCloseIconCont">
            <CloseIcon
              style={{ fontSize: "26px", opacity: "0.8", cursor: "pointer" }}
              onClick={changeState}
            />
          </div>
        </div>
        <hr className="createPostHr" />
        <div className="createPostCenter">
          <div className="createPostProfileCont">
            <img
              className="createPostProfileImage"
              src="assets/person/duc.jpg"
              alt=""
            />
            <div className="createPostProfileLeft">
              <span className="createPostUsername">
                <b>Duc Vu</b>
              </span>
              <select name="visibilities" id="visibilities" className="createPostVisibilty">
                <option value="public" className="visibility public">
                  Public
                </option>

                <option value="friends">Friends</option>
                <option value="friendsExcept">Friends except</option>
                <option value="onlyMe">Only me</option>
              </select>
            </div>
          </div>
          <div className="createPostInputCont">
            <input
              ref={ref}
              type="text"
              placeholder="What's on your mind, Duc?"
              className="createPostInput"
            />
          </div>
        </div>
        <div className="createPostOptionsCont">
          <div className="createPostOption">
            <span className="createPostOptionTitle"><b>Add <span>to your post</span></b></span>
            <div className="createPostOptionIcons">
              <span className="circleCont">
                <PermMediaIcon
                  style={{ fontSize: "26px" }}
                  htmlColor="green"
                  className="createPostIcon"
                />
              </span>
              <span className="circleCont">
                <SellIcon
                  style={{ fontSize: "25px" }}
                  htmlColor="blue"
                  className="createPostIcon"
                /></span>
              <span className="circleCont">
                <EmojiEmotionsIcon
                  style={{ fontSize: "26px" }}
                  htmlColor="orange"
                  className="createPostIcon"
                /></span>
              <span className="circleCont">
                <LocationOnIcon
                  style={{ fontSize: "26px" }}
                  htmlColor="red"
                  className="createPostIcon"
                /></span>
              <span className="circleCont">
                <MoreHorizIcon
                  style={{ fontSize: "26px", opacity: '0.5' }}
                  className="createPostIcon"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="createPostButtonCont">
          <button type="button" className="createPostButton"><b>Post</b></button>
        </div>
      </div>
    </div>

    <div className={showAds ? "showCreatePost" : "hideCreatePost"}>
      <div className="createAdsWrapper">
        <div className="createPostTop">
          <div></div>
          <div className="createPostCloseIconCont">
            <CloseIcon
              style={{ fontSize: "26px", opacity: "0.8", cursor: "pointer" }}
              onClick={changeStateAds}
            />
          </div>
        </div>
        <hr className="createPostHr" />
        <div className="centerContainer">
          <img height="250" src='assets/illustration-of-laptop-facebook-ads-free-vector.jpg'/>
        </div>
        <div className="createAdsCenter">
          <h2>Duc, want us to show you ads that are more relevant by using your activity from ad partners?</h2>
          <p>You can choose if you use <span className="linkText">activity information</span> from your visits to <span className="linkText">ad partners'</span> apps, websites and shops to improve your ads </p>
        </div>
        <hr className="createPostHr" />
        <div className="createAdsCenter">
          <div className="adsElement">
            <img class="x1b0d499" height="18" src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FBUakLpIX3k.png" width="18" alt="" aria-hidden="true"></img>
            <span className="adsElementText">You can change this setting at any time in Ad preferences. </span>
          </div>
          <div className="adsElement">
            <img class="x1b0d499" height="18" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/NACdj8k5Tjo.png" width="18" alt="" aria-hidden="true"></img>
            <span className="adsElementText">We always use strict security standarts to keep your information safe</span>
          </div>
          <div className="adsElement">
            <img class="x1b0d499" height="18" src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/6Td6OTxqdrn.png" width="18" alt="" aria-hidden="true"></img>
            <span className="adsElementText">This setting also applies to ads on other apps and websites that use our <span className="linkText">advertising service</span></span>
          </div>
          <div className="adsElement">
            <img class="x1b0d499" height="18" src="https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/WXPUqPJ7zyc.png" width="18" alt="" aria-hidden="true"></img>
            <span className="adsElementText">We also use <span className="linkText">other information</span> from ad partners, which isn't controlled by this setting</span>
          </div>
          <div>
            <p className="adsPolicy">Some information may be anonymised and used to improve our products, as described in our Privacy Policy, regardless of your choice.</p>
          </div>
          <div className="centerContainer">
            <button type="button" className="createAdsButton" onClick={() => {setShowAds(false)}}>Use this activity</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
