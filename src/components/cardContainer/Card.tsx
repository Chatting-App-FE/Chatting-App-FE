import {
  Avatar,
  AvatarGroup,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react';
import { Chat } from './card.types';
import { formatTimeToKST } from '../../utils/formatTimeToKST';

interface Props {
  channel: Chat;
}

const UserCard = ({ channel }: Props) => {
  return (
    <Card border="2px solid #cdcdcd" boxShadow={0} w={215}>
      <CardHeader>
        <Heading as="h2" size="sm">
          {channel.name}
        </Heading>
        <Text fontSize="xs">{formatTimeToKST(channel.updatedAt)}</Text>
        <Badge colorScheme="yellow" px="2" mt="2"></Badge>
      </CardHeader>
      <CardBody>
        <AvatarGroup size="sm" max={3}>
          {channel.users.map((user) => (
            <Avatar key={user.id} name={user.name} />
          ))}
        </AvatarGroup>
      </CardBody>
    </Card>
  );
};

export default UserCard;