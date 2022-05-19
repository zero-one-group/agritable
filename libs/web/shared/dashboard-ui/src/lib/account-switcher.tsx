import { Menu, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';

import { AccountSwitcherButton } from './account-switcher-button';

export const AccountSwitcher = () => {
  return (
    <Menu>
      <AccountSwitcherButton />
      <MenuList
        shadow="lg"
        py="4"
        color={useColorModeValue('green.600', 'green.200')}
        px="3"
      >
        <a href="/">
          <MenuItem rounded="md">Logout</MenuItem>
        </a>
      </MenuList>
    </Menu>
  );
};

export default AccountSwitcher;
