import React, { useCallback, useEffect, useState } from 'react';

import StyledDiv from '@styles/home/post/PostList-styled';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  const [items, setItems] = useState(posts.slice(0, 30));
  const [currentSize, setCurrentSize] = useState(60);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setItems(posts.slice(0, 30));
  }, [posts]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    setItems((prevItems) => [
      ...prevItems,
      ...posts.slice(currentSize, currentSize + 30),
    ]);
    setCurrentSize((prevSize) => prevSize + 30);
  }, [currentSize, posts]);

  const handleScroll = useCallback(() => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight <=
      document.documentElement.scrollHeight - 500
    ) {
      return null;
    }
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isLoading]);

  return (
    <StyledDiv>
      {items.map((post) => (
        <React.Fragment key={post.id}>
          <PostItem post={post} />
          <div style={{ borderBottom: '1px solid #ccc' }} />
        </React.Fragment>
      ))}
    </StyledDiv>
  );
};

export default PostList;
