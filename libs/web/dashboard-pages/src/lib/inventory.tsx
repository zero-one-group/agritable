import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  Button,
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
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';

import { Card, TableInventory } from '@agritable/web/shared/dashboard-ui';

export function Inventory() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string>('');
  const [qty, setQty] = useState<number>(0);

  const surplusStockData = [
    {
      name: 'Yohan',
      qty: 10,
      month: 'Mei, 2022',
    },
    {
      name: 'Pangeran',
      qty: 4,
      month: 'Mei, 2022',
    },
    {
      name: 'Doni',
      qty: 3,
      month: 'Mei, 2022',
    },
    {
      name: 'Joshua',
      qty: 2,
      month: 'Mei, 2022',
    },
    {
      name: 'Budi',
      qty: 20,
      month: 'Mei, 2022',
    },
  ];

  const [data, setData] = useState(surplusStockData);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setData(JSON.parse(localStorage.getItem('dataInv')));
  }, []);

  const pushData = () => {
    const tes = data;
    const newData = tes.concat([
      {
        name: name,
        qty: qty,
        month: 'Mei, 2022',
      },
    ]);

    localStorage.setItem('dataInv', JSON.stringify(newData));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setData(JSON.parse(localStorage.getItem('dataInv')));
    onClose();
  };
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Farmer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Stack direction="column" spacing="4">
                <Box>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input
                    id="name"
                    type="name"
                    onChange={(e: any) => setName(e.target.value)}
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
            <Button colorScheme="green" onClick={pushData}>
              Add data
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
                    Inventory
                  </Heading>
                </Stack>
              </Stack>
              <Box>
                <Button colorScheme="green" onClick={onOpen}>
                  Add +
                </Button>
              </Box>
              <Card minH="xs">
                <TableInventory data={data} />
              </Card>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Inventory;
