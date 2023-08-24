import React, { useState } from 'react';
import UserProfile from './component/Userprofile';
import TweetForm from './component/Tweetform';
import TweetList from './component/Tweetlist';
import './App.css';

const App = () => {
  const [tweets, setTweets] = useState([]);

  const createTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <div className="app">
      <UserProfile />
      <div className="main-panel">
        <TweetForm createTweet={createTweet} />
        <TweetList tweets={tweets} />
      </div>
    </div>
  );
};

export default App;
