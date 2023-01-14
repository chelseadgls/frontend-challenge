import Story from '../Story/index';
import { useState, useEffect } from 'react';
import { getFeed } from '../../constants/index';

function Feed() {
  const [feed, setFeed] = useState([]);

  async function fetchFeedData() {
    setFeed(await getFeed());
  }

  useEffect(() => {
    try {
      fetchFeedData();
      console.log(feed);
    } catch (error) {
      throw error;
    }
  })

  return (
    <div className="container">
      <div className="card">
        {
          feed.map((story) => {
            return (
              <img src={story.thumbnail.desktop} />
            )
          })
        }
      </div>
      {/* Stories go here */}
    </div>
  )
}

export default Feed