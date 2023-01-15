import Story from '../Story/index';
import { useState, useEffect } from 'react';
import { getFeed } from '../../constants/index';
import Image from 'next/image';

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
  <div>
    <div className="grid gap-8 py-8">
      {feed.map(story => <Story story={story} />)}
    </div>
    <div className="flex justify-center">
        <button className="bg-red-700 text-white mx-auto px-60 py-4">Load More</button>
    </div>
  </div>
  )
}

export default Feed