import React from 'react';
import StyledDiv from '@styles/home/post/PostList-styled';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <StyledDiv>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostItem post={post} />
          <div style={{ borderBottom: '1px solid #ccc' }} />
        </React.Fragment>
      ))}
    </StyledDiv>
  );
};

export default PostList;
