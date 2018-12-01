import React from 'react';

import './header-post.scss';

// const { img, title, hour } = this.props.header;
const HeaderPost = ({ header }) => (
  <div className="header-post">
    <img alt="User" src={header.img} />
    <div>
      <h2>{header.title}</h2>
      <span className="time">{header.hour}</span>
    </div>
  </div>
);

export default HeaderPost;
