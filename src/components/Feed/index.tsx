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
    <div className="border-8 border-black border-solid">
        {
          feed.map((story) => {
            return (
              <div className="flex border-8 border-red-500 border-solid px-8 py-8">
                <img src={story['thumbnail']['desktop']}/>
              <div>
              <div>  
                <h1>{story['title']}</h1>
              </div>
              <div>
                  <p>{story['author']['name']}</p>
                  <img src={story['author']['avatar']} />
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