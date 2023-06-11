// eslint-disable-next-line import/named
import axios, { AxiosResponse } from 'axios';
import { IResponsePostList, TAG } from './types.ts';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'http://34.22.77.64:8080',
});

// todo (6) api 작성
export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', {
    title,
    contents,
    tag,
  });
};

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const getPostById = (id: string | undefined) => {
  return instance.get(`/post/${id}`);
};

export const updatePostById = (id: string, title: string, content: string, tag: TAG) => {
  return (
    instance.put(`posts/${id}`),
    {
      title,
      content,
      tag,
    }
  );
};

export const deletePostById = (id: string | undefined) => {
  return instance.delete(`/posts/${id}`);
};
