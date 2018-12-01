import React from 'react';
import HeaderPost from './header/HeaderPost';

import './post.scss';

const Post = ({ post }) => (
  <article className="box">
    <HeaderPost header={post} />
    <p>{post.content}</p>
  </article>
);

export default Post;
