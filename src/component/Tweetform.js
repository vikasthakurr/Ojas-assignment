import React, { useState } from 'react';
import './TweetForm.css';

const TweetForm = ({ createTweet }) => {
  const [tweetText, setTweetText] = useState('');
  const [mediaFile, setMediaFile] = useState(null);

  const handleMediaChange = (e) => {
    setMediaFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tweetText.trim() !== '' || mediaFile) {
      const newTweet = {
        id: Date.now(),
        text: tweetText,
        mediaFile: mediaFile,
      };
      createTweet(newTweet);
      setTweetText('');
      setMediaFile(null);
    }
  };

  return (
    <div className="tweet-form">
      <textarea
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        placeholder="What's happening?"
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleMediaChange}
        style={{ margin: '10px 0' }}
      />
      <button onClick={handleSubmit}>Tweet</button>
    </div>
  );
};

export default TweetForm;
