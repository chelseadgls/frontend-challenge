import Story from '../Story/index';
import { useState, useEffect, useCallback } from 'react';
import { getFeed } from '../../constants/index';
import { updateFeed } from '../../constants/index';

function Feed() {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchFeedData() {
    setFeed(await getFeed());
  }

  useEffect(() => {
    try {
      fetchFeedData();
      const interval = setInterval(() => {
        fetchFeedData()
      },10000)
    } catch (error) {
      throw error;
    }
  }, []);

  async function useFeed() {
    setLoading(true);
    let newFeedData = await updateFeed();
    setFeed(feed.concat(newFeedData));
    setLoading(false);
}

  return (
  <div>
    <div className="grid gap-8 py-8">
      {feed.map(story => <Story story={story} />)}
      </div>
      <div className="flex justify-center">
      { !loading && <button className="bg-red-700 text-white mx-auto px-60 py-4" onClick={(useFeed)}>Load More</button>}
        {loading && (
        <button className="bg-gray-700 text-white mx-auto px-60 py-4">Loading...</button>
      )}
    </div>
  </div>
  )
}

export default Feed