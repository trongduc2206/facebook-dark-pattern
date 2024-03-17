import "./home.css"
import Feed from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar"



export default function Home({showCreatePost,showAds,changeState}) {
 
  return (
     <>
      <div className={showCreatePost || showAds ?"halfVisualHome":"fullVisualHome"}>

         <Topbar/>   
        
         <div className="homeContainer">
         <Sidebar/>
         <Feed changeState={changeState}/>
         <Rightbar/>
         </div>

         </div>
    </>
  )
}
