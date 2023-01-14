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
        {
          feed.map((story) => {
            return (
              <div>
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