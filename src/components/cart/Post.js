import React from 'react';
import PropTypes from 'prop-types';
import HeaderPost from './header/HeaderPost';

import './post.scss';

const Post = ({ post }) => (
  <article className="box">
    <HeaderPost header={post} />
    <p>{post.content}</p>
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
