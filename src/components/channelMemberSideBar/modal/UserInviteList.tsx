import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Flex, useBoolean } from '@chakra-ui/react';
import ChannelMemberItem from '../ChannelMemberItem';
import { getUsers } from '../../../api/user';
import { User } from '../../../@types/user';
import { inviteChannel } from '../../../api/channel';

const UserInviteList = () => {
  const [userData, setUserData] = useState<User[] | undefined>([]);
  const [isChecked, setIsChecked] = useBoolean(false);

  inviteChannel;

  useEffect(() => {
    const fetchUserData = async () => {
      const usersData = await getUsers();
      setUserData(usersData);
    };

    fetchUserData();
  }, []);

  return (
    <Box fontSize="4xl" textAlign="center">
      {userData?.map((user) => (
        <Flex
          align="center"
          px="50px"
          justify="space-between"
          onClick={() => {
            console.log('음...', user.id);
          }}
          key={user.id}
        >
          <ChannelMemberItem userName={user.name} src={user.picture} />
          <Checkbox key={user.id} size="lg" color={'blue.500'} />
        </Flex>
      ))}
    </Box>
  );
};

export default UserInviteList;