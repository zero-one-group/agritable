import {
  Box,
  Flex,
  FlexProps,
  HStack,
  Img,
  useMenuButton,
} from '@chakra-ui/react';
import { HiSelector } from 'react-icons/hi';

export const AccountSwitcherButton = (props: FlexProps) => {
  const buttonProps = useMenuButton(props);
  return (
    <Flex
      as="button"
      {...buttonProps}
      w="full"
      display="flex"
      alignItems="center"
      rounded="lg"
      bg="green.700"
      px="3"
      py="2"
      fontSize="sm"
      userSelect="none"
      cursor="pointer"
      outline="0"
      transition="all 0.2s"
      _active={{ bg: 'green.600' }}
      _focus={{ shadow: 'outline' }}
    >
      <HStack flex="1" spacing="3">
        <Img
          w="8"
          h="8"
          rounded="md"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbiUyMHNpbWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=100"
          alt="Chakra UI"
        />
        <Box textAlign="start">
          <Box fontWeight="semibold">co-op z</Box>
        </Box>
      </HStack>
      <Box fontSize="lg" color="green.400">
        <HiSelector />
      </Box>
    </Flex>
  );
};

export default AccountSwitcherButton;
