import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  action: () => void;
  title:
};

export const Modal = (props: ModalProps) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraModal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
