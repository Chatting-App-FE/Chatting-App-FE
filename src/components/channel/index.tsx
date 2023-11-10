import { Box, HStack } from '@chakra-ui/react';
import useChannels from '../../hooks/useChannels';
import ChannelCard from './ChannelCard';
import CreateChannelModal from './CreateChannelModal';

const ChannelList = () => {
  const { data: channels, isLoading } = useChannels();

  if (isLoading) return <div>Loading...</div>;

  if (channels && channels.length === 0) return <div>채팅방이 없습니다.</div>;

  return (
    <>
      <Box>
        <HStack>
          {channels &&
            channels.map((channel) => (
              <ChannelCard key={channel.id} channel={channel} />
            ))}
        </HStack>
      </Box>
      <CreateChannelModal />
    </>
  );
};

export default ChannelList;
