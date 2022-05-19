import {
  Menu,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { AccountSwitcherButton } from './account-switcher-button';

export const AccountSwitcher = () => {
  return (
    <Menu>
      <AccountSwitcherButton />
      <MenuList
        shadow="lg"
        py="4"
        color={useColorModeValue('gray.600', 'gray.200')}
        px="3"
      >
        <MenuItem rounded="md">Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AccountSwitcher;
