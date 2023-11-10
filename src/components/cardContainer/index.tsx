import { HStack } from '@chakra-ui/react';
import useChannels from '../../hooks/useChannels';
import UserCard from './Card';

const CardContainer = () => {
  const { data: channels, isLoading } = useChannels();

  if (isLoading) return <div>Loading...</div>;

  if (channels && channels.length === 0) return <div>채팅방이 없습니다.</div>;

  return (
    <HStack>
      {channels &&
        channels.map((channel) => (
          <UserCard key={channel.id} channel={channel} />
        ))}
    </HStack>
  );
};

export default CardContainer;