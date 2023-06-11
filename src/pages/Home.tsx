import { useEffect, useState } from 'react';
import { getPostList } from '../api';
import PostListItem from '../components/PostListItem.tsx';
import { IResponsePostList } from '../api/types.ts';
import NoPostList from '../components/NoPostList.tsx';

const Home = () => {
  const [postList, setPostList] = useState<IResponsePostList>([]);

  const fetchPostList = async () => {
    const { data } = await getPostList();
    setPostList(data);
  };

  useEffect(() => {
    fetchPostList();
  }, []);

  if (postList.length === 0) {
    return <NoPostList />;
  }

  return (
    <div>
      {postList.map(({ post }, index) => (
        <PostListItem key={index} id={post.id} title={post.title} contents={post.contents} tag={post.tag} />
      ))}
    </div>
  );
};

export default Home;
