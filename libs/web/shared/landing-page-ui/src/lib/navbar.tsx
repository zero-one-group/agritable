import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  IconButton,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Link,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

export function Navbar() {
  return (
    <Box as="section" pb={{ base: '12' }}>
      <Box as="nav">
        <Container py={{ base: '4', lg: '5' }} maxW="container.xl">
          <HStack spacing="10" justify="space-between">
            <Box fontSize="25px" fontWeight="bold" color="green.500">
              Agritable
            </Box>
            <Box
              display={{ base: 'none', lg: 'flex' }}
              justifyContent="space-between"
              flex="1"
            >
              <Tabs colorScheme="green" isFitted variant="unstyled">
                <TabList>
                  {['Product', 'Pricing', 'Resources', 'Support'].map(
                    (item) => (
                      <Tab
                        key={item}
                        fontSize="md"
                        fontWeight="400"
                        _selected={{ color: 'green.500' }}
                      >
                        {item}
                      </Tab>
                    )
                  )}
                </TabList>
                <TabIndicator
                  mt="4"
                  height={1}
                  borderTopRadius="md"
                  bg="green.400"
                />
              </Tabs>
              <HStack spacing="3">
                <a href="/dashboard">
                  <Button colorScheme="green">Sign in</Button>
                </a>
              </HStack>
            </Box>
            <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
              display={{ base: 'flex', lg: 'none' }}
            />
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>
  );
}

export default Navbar;
