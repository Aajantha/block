import React from 'react';
import image1 from '/home/uki-student/Documents/block/src/components/download.png';

function Post1() {
  return (
    <div id="post1" className="post">
      <h2>JavaScript</h2>
      <img src={image1} alt="JavaScript" />
      <p>JavaScript is a versatile programming language JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.</p>
      <button>Read More</button>
    </div>
  );
}

export default Post1;



