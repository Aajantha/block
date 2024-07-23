import React from 'react';

function BlogNav() {
  return (
    <nav>
      <div>
        <div>Blog Platform</div>
        <ul>
          <li><a href="#post1">JavaScript</a></li>
          <li><a href="#post2">Data Structure</a></li>
        </ul>
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default BlogNav;

