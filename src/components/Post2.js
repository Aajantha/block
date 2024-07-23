import React from 'react';
import image2 from '/home/uki-student/Documents/block/src/components/images.png';

function Post2() {
  return (
    <div id="post2" className="post">
      <h2>Data Structure</h2>
      <img src={image2} alt="Data Structure" />
      <p>A data structure is a specialized format for organizing, processing, retrieving and storing data. There are several basic and advanced types of data structures, all designed to arrange data to suit a specific purpose. Data structures make it easy for users to access and work with the data they need. Most importantly, data structures frame the organization of information so that machines and humans can better understand it.</p>
      <button>Read More</button>
    </div>
  );
}

export default Post2;


