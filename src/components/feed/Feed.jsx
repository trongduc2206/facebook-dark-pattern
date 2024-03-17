import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";
// import axios from 'axios'
// import { useEffect,useState } from "react";
import { Posts } from '../../dummyData';

export default function Feed({ changeState }) {
  // const[posts,setPosts] = useState([]);
  // useEffect(()=>{
  //   const fetchPosts = async()=>{
  //     const res = await axios.get("posts/timeline/62b980a429037a1e38b07192")
  //     setPosts(res.data)
  //   }
  //   fetchPosts();
  // },[]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className='story'>
          {/* <div className="test">
            <img src='assets/person/duc.jpg' height='180' className="storyImageTest" />
            <div className="createStoryIcon"><img src="assets/plus.jpg" height='40' width='40' style={{borderRadius: '50%'}}/></div>
            <div className="createStoryContainer">
              <span className="createStoryText">Create Story</span>
            </div>

          </div> */}
          {/* <img src='assets/perso/n/duc.jpg' height='230' width='205' className="storyImage"/>s */}
          <div className="ownStoryDuc">
            <span className="storyName">Duc Vu</span>
          </div>
          <div className="ownStorySafak">
            <img src="assets/person/10.jpeg" height='40' width='40' className="storyAvatar" />
            <span className="storyName">Safak Kocaoglu</span>
          </div>
          <div className="ownStoryGary">
            <img src="assets/person/9.jpeg" height='40' width='40' className="storyAvatar" />
            <span className="storyName">Gary Duty</span>
          </div>
          <div className="ownStoryDora">
            <img src="assets/person/4.jpeg" height='40' width='40' className="storyAvatar" />
            <span className="storyName">Dora Hawks</span>
          </div>
        </div>
        <Share changeState={changeState} />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
