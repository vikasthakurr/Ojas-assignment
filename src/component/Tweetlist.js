import React from 'react';
import './TweetList.css';
import profilepic from '../component/removed dp.png';

const TweetList = ({ tweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <div key={tweet.id} className="tweet">
          <div className="user-info">
            <img src={profilepic} alt="Profile" className="profile-pic" />
            <div className="user-details">
              <h3>Vikaskumar</h3>
            </div>
          </div>
          <p>{tweet.text}</p>
          {tweet.mediaFile && (
            <div className="tweet-media">
              {tweet.mediaFile.type.startsWith('image') ? (
                <img src={URL.createObjectURL(tweet.mediaFile)} alt="Tweet Media" />
              ) : (
                <video controls>
                  <source src={URL.createObjectURL(tweet.mediaFile)} type={tweet.mediaFile.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TweetList;
