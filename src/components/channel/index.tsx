import { Box, HStack } from '@chakra-ui/react';
import useChannels from '../../hooks/useChannels';
import ChannelCard from './ChannelCard';
import { filterChannels } from '../../utils';
import { useDeferredValue } from 'react';
import LoadingSkeleton, { skeletons } from './LoadingSkeleton';

interface Props {
  title: string;
}

const ChannelList = ({ title }: Props) => {
  const { data: channels, isLoading } = useChannels();

  const deferredTitle = useDeferredValue(title);
  const filteredChannels = channels
    ? filterChannels(deferredTitle, channels)
    : [];

  if (isLoading) return <LoadingSkeleton />;

  if (filteredChannels.length === 0) return <div>채팅방이 없습니다.</div>;

  return (
    <>
      <Box>
        <HStack gap="4" flexWrap="wrap">
          {isLoading
            ? skeletons.map((_i, index) => <LoadingSkeleton key={index} />)
            : filteredChannels.map((channel) => (
                <ChannelCard key={channel.id} channel={channel} />
              ))}
        </HStack>
      </Box>
    </>
  );
};

export default ChannelList;
