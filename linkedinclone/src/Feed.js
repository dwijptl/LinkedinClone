import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import {db} from './firebase';
import firebase from "firebase/compat/app";

function Feed() {
  const [input,setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot(onSnapshot => (
      setPosts(onSnapshot.docs.map(doc => (
        {
          id: doc.id,
          data:doc.data(),

        }
      )))
    ))
  },[])

  const sendPost = e => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Dwij",
      description: "Test",
      message: input,
      photoUrl:'',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
  setInput("");
};

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input  value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="What's on your mind?" />
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/* {Posts} */}
      {posts.map(({id ,data: {name,description,message,photoUrl }}) => (
        <Post 
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}

        />
      ))}
    </div>
  );
}

export default Feed;
