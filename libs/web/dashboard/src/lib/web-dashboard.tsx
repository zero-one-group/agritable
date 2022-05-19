import { Box, Flex, Stack, useColorModeValue as mode } from '@chakra-ui/react';
import { memo } from 'react';

import { Route, Switch } from 'react-router-dom';
import { BiCreditCard, BiNews } from 'react-icons/bi';

import { AccountSwitcher, NavItem } from '@agritable/web/shared/dashboard-ui';

import { Home, PricePrediction } from '@agritable/web/dashboard-pages';

export function WebDashboard() {
  console.log('render');
  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem
                  href="dashboard/home"
                  icon={<BiCreditCard />}
                  label="Home"
                />
                <NavItem
                  href="dashboard/price-prediction"
                  icon={<BiNews />}
                  label="Price prediction"
                />
              </Stack>
            </Stack>
          </Flex>
        </Box>
        <Box bg={mode('white', 'gray.800')} flex="1" p="6">
          <Switch>
            <Route path="/dashboard/home" component={Home}></Route>
            <Route
              path="/dashboard/price-prediction"
              component={PricePrediction}
            ></Route>
          </Switch>
        </Box>
      </Flex>
    </Box>
  );
}

export default memo(WebDashboard);
