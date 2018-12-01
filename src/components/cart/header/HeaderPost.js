import React from 'react';
import PropTypes from 'prop-types';
import './header-post.scss';

const HeaderPost = ({ header }) => (
  <div className="header-post">
    <img alt="User" src={header.img} />
    <div>
      <h2>{header.title}</h2>
      <span className="time">{header.hour}</span>
    </div>
  </div>
);

HeaderPost.propTypes = {
  header: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeaderPost;
