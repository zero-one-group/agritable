import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Button,
  useBreakpointValue,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useState } from 'react';

import { Card, TableHome } from '@agritable/web/shared/dashboard-ui';

export function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [qty, setQty] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [test, setTest] = useState('');

  const sellFunction = () => {
    const timer = setTimeout(() => {
      setTest(`${test}+`);
    }, 1000);

    clearTimeout(timer);
  };

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sell Commodity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Stack direction="column" spacing="4">
                <Box>
                  <FormLabel htmlFor="qty">Price (/Kg)</FormLabel>
                  <Input
                    id="Price"
                    type="number"
                    onChange={(e: any) => setPrice(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor="qty">Qty (Kg)</FormLabel>
                  <Input
                    id="qty"
                    type="number"
                    onChange={(e: any) => setQty(e.target.value)}
                  />
                </Box>
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={sellFunction}>
              Sell
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
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
                    Home
                  </Heading>
                  <Text color="muted">All important metrics at a glance</Text>
                </Stack>
              </Stack>
              <Stack spacing={{ base: '5', lg: '6' }}>
                <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
                  <Card textAlign="center">
                    <Heading
                      size="md"
                      py="4"
                      fontWeight="medium"
                      color="gray.600"
                    >
                      Status
                    </Heading>
                    <Heading size="xl" py="4" color="red.600">
                      Surplus
                    </Heading>
                    {/* <Heading size="xl" py="4" color="green.600">
                      Normal
                    </Heading> */}
                    {/* <Heading size="xl" py="4" color="red.600">
                      Lack of stock
                    </Heading> */}
                    <Text
                      width={{ base: 'full', xl: '70%' }}
                      mx="auto"
                      color="red.500"
                      fontWeight={500}
                    >
                      To prevent your current price to decrease, please sell
                      your commodity
                    </Text>
                    {/* <Text
                      width={{ base: 'full', xl: '70%' }}
                      mx="auto"
                      color="green.500"
                      fontWeight={500}
                    >
                      Your current status is normal
                    </Text> */}
                    {/* <Text
                      width={{ base: 'full', xl: '70%' }}
                      mx="auto"
                      color="red.500"
                      fontWeight={500}
                    >
                      To prevent your current price to go up, please buy
                      commodity from other co-op
                    </Text> */}
                  </Card>
                  <Card textAlign="center">
                    <Heading
                      size="md"
                      py="4"
                      fontWeight="medium"
                      color="gray.600"
                    >
                      Normal <b>Tomato</b> Price (Kg)
                    </Heading>
                    <Heading size="xl" py="4" color="">
                      Rp 2.500
                    </Heading>
                  </Card>
                  <Card textAlign="center">
                    <Heading
                      size="md"
                      py="4"
                      fontWeight="medium"
                      color="gray.600"
                    >
                      Your Current <b>Tomato</b> Price
                    </Heading>
                    <Heading size="xl" py="4" color="red.500">
                      Rp 1.875
                    </Heading>
                    {/* <Heading size="xl" py="4" color="green.500">
                      Rp 2.615
                    </Heading> */}
                    {/* <Heading size="xl" py="4" color="red.500">
                      Rp 3.615
                    </Heading> */}
                    <Text
                      width={{ base: 'full', xl: '70%' }}
                      mx="auto"
                      color="red.500"
                      fontWeight={500}
                    >
                      Your current price is below the normal price right now
                    </Text>
                    {/* <Text
                      width={{ base: 'full', xl: '70%' }}
                      mx="auto"
                      color="green.500"
                      fontWeight={500}
                    >
                      Your current price is normal
                    </Text> */}
                    {/* <Text
                      width={{ base: 'full', xl: '70%' }}
                      mx="auto"
                      color="red.500"
                      fontWeight={500}
                    >
                      Your current price is higher than the normal price right
                      now
                    </Text> */}
                  </Card>
                </SimpleGrid>
                <Card textAlign="center">
                  <Heading
                    size="md"
                    py="4"
                    fontWeight="medium"
                    color="gray.600"
                  >
                    To make your <b>Commodity</b> status <b>Normal</b> you need
                    to sell
                  </Heading>
                  <Heading size="2xl" py="4" fontWeight="bold" color="red.600">
                    25%
                  </Heading>
                  <Heading
                    size="md"
                    py="4"
                    fontWeight="medium"
                    color="gray.600"
                  >
                    From your current stock
                  </Heading>
                </Card>
                {/* <Card textAlign="center">
                  <Heading
                    size="md"
                    py="4"
                    fontWeight="medium"
                    color="gray.600"
                  >
                    To make your <b>Commodity</b> status <b>Normal</b> you need
                    to buy
                  </Heading>
                  <Heading size="2xl" py="4" fontWeight="bold" color="red.600">
                    25%
                  </Heading>
                  <Heading
                    size="md"
                    py="4"
                    fontWeight="medium"
                    color="gray.600"
                  >
                    From your current stock
                  </Heading>
                </Card> */}
              </Stack>
              <Text fontSize="lg" pt="4">
                co-operative that lack of <b>Tomato</b> stock right now
              </Text>
              {test && (
                <Alert status="success" variant="subtle">
                  <AlertIcon />
                  Your transaction success
                </Alert>
              )}
              <Card minH="xs">
                <TableHome onOpen={onOpen} />
              </Card>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Home;
