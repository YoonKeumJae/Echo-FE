import StyledDiv from '@styles/home/post/PostList-styled';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <StyledDiv>
      {posts.map((post) => (
        <>
          <PostItem key={post.id} post={post} />
          <div style={{ borderBottom: '1px solid #ccc' }} />
        </>
      ))}
    </StyledDiv>
  );
};

export default PostList;
