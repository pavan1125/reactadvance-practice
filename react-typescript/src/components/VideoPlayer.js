import React from 'react';

const VideoPlayer = ({ sourceLink }) => {
  if (!sourceLink) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <video src={sourceLink} controls />
    </div>
  );
};

export default VideoPlayer;