import React from "react";

function Story({story}) {
  return (
    <div>
      <div className="flex border-2 border-gray-200 border-solid px-8 py-8">
        <img
          src={story["thumbnail"]["desktop"]}
          alt=""
          height="100"
          width="200"
          className="object-contain"
        />
        <div className="flex flex-col justify-between">
          <div className="px-4">
            <h1 className="font-bold text-xl">{story["title"]}</h1>
          </div>
          <div>
            <div className="flex flex-row px-4">
              <img
                src={story["author"]["avatar"]}
                alt=""
                height="50"
                width="40"
                className="object-contain rounded-full"
              />
              <p className="px-4 py-2">{story["author"]["name"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
