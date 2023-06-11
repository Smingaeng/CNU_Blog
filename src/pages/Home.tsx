import { useEffect, useState } from 'react';
import { getPostList } from '../../../CNU_Blog/src/api';
import PostListItem from '../../../Desktop/CNU_Blog/src/components/PostListItem.tsx';
import { IResponsePostList } from '../../../Desktop/CNU_Blog/src/api/types.ts';
import NoPostList from '../../../Desktop/CNU_Blog/src/components/NoPostList.tsx';

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
