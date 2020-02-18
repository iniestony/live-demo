import React, { useEffect, useRef } from 'react';
import './App.css';

import vjs from 'video.js';
import 'video.js/dist/video-js.css'
import 'videojs-flash'


function App() {
  const video = useRef(null);

  useEffect(() => {
    console.log(video.current);
    vjs(video.current, {
      autoplay: true,
      controls: true,
      sources: [{
        type: 'video/mp4',
        src: 'http://vjs.zencdn.net/v/oceans.mp4'
      }, {
        type: 'video/webm',
        src: 'http://vjs.zencdn.net/v/oceans.webm'
      }]
    });
  }, []);

  return (
    <div className="App">
      <p>live demo</p>
      <video-js ref={video} />
    </div>
  );
}

export default App;
