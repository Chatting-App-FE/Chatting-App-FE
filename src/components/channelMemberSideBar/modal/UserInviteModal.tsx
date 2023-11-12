import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Center,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { inviteChannel } from '../../../api/channel';
import ChannelModalUserList from '../../channel/modal/ChannelModalUserList';
import { User } from '../../../@types/user';

interface Props {
  setUserList: React.Dispatch<React.SetStateAction<User[]>>;
  chatId: string;
}

const UserInviteModal = ({ setUserList, chatId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [users, setUsers] = useState<string[]>([]);
  const btnRef = useRef(null);

  const handleInviteUsers = async () => {
    if (users) {
      console.log('users', users);
      const inviteData = { chatId, users };
      const newChannelData = await inviteChannel(inviteData);
      const newUserList = newChannelData.users;
      setUserList(newUserList);
      console.log('inviteData', inviteData);
      onClose();
    }
  };

  return (
    <>
      <AddIcon boxSize="25px" color="#191919" ref={btnRef} onClick={onOpen} />

      <Modal
        size="sm"
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <Center>
          <ModalContent>
            <ModalHeader textAlign="center" my="10px">
              유저 목록
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <ChannelModalUserList setUsers={setUsers} />
            </ModalBody>

            <ModalFooter justifyContent="center">
              <Button
                size="lg"
                mr="3px"
                colorScheme="blue"
                variant="outline"
                onClick={onClose}
              >
                취소
              </Button>
              <Button size="lg" colorScheme="blue" onClick={handleInviteUsers}>
                초대
              </Button>
            </ModalFooter>
          </ModalContent>
        </Center>
      </Modal>
    </>
  );
};

export default UserInviteModal;