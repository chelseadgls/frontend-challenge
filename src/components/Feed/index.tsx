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
    <div className="grid gap-8 py-8">
        {
          feed.map((story) => {
            return (
              <div className="flex border-2 border-gray-200 border-solid px-8 py-8">
                <img src={story['thumbnail']['desktop']} alt="" height="100" width="200" className="object-contain" />
              <div className="flex flex-col justify-between">
              <div className="px-4">  
                <h1 className="font-bold text-xl">{story['title']}</h1>
              </div>
                <div>
                  <div className="flex flex-row px-4">
                      <img src={story['author']['avatar']} alt="" height="50" width="40" className="object-contain rounded-full" />
                      <p className="px-4 py-2">{story['author']['name']}</p>
                  </div>
              </div>
              </div>
            </div>
            )
          })
        }
      </div>
  )
}

export default Feed