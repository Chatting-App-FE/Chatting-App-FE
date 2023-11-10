import { ResponseValue } from '../@types/channel';
import instance from './axios';

//내 채팅방 불러오기
export const getMyChannels = async () => {
  const response = await instance.get('/chat');
  const data: { chats: ResponseValue } = await response.data;
  return data.chats;
};
