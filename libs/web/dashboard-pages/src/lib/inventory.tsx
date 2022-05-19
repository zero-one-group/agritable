import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  Button,
} from '@chakra-ui/react';

import { Card, TableInventory } from '@agritable/web/shared/dashboard-ui';

export function Inventory() {
  return (
    <Box bg="bg-accent" pt={{ base: '0', lg: '3' }} flex="1">
      <Box
        bg="bg-canvas"
        borderTopLeftRadius={{ base: 'none', lg: '2rem' }}
        height="full"
      >
        <Container maxW="full">
          <Stack spacing={{ base: '8', lg: '6' }}>
            <Stack
              spacing="4"
              direction={{ base: 'column', lg: 'row' }}
              justify="space-between"
              align={{ base: 'start', lg: 'center' }}
            >
              <Stack spacing="1">
                <Heading
                  size={useBreakpointValue({ base: 'xs', lg: 'sm' })}
                  fontWeight="medium"
                >
                  Inventory
                </Heading>
              </Stack>
            </Stack>
            <Box>
              <Button colorScheme="green">Add +</Button>
            </Box>
            <Card minH="xs">
              <TableInventory />
            </Card>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Inventory;
