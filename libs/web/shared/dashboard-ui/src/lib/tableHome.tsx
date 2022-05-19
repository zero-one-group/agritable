import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table as ChakraTable,
  TableProps,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

type TableHomeProps = {
  onOpen: () => void;
};

export const TableHome = (props: TableHomeProps) => {
  const formatToIdr = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  const surplusStockData = [
    {
      name: 'co-op A',
      province: 'Jawa Timur',
      city: 'Sidoarjo',
      distance: 70,
      stock: 500,
      price: 5000,
    },
    {
      name: 'co-op B',
      province: 'Jawa Timur',
      city: 'Surabaya',
      distance: 90,
      stock: 700,
      price: 4550,
    },
    {
      name: 'co-op C',
      province: 'Jawa Timur',
      city: 'Batu',
      distance: 17,
      stock: 900,
      price: 4330,
    },
    {
      name: 'co-op D',
      province: 'Jawa Timur',
      city: 'Blitar',
      distance: 78,
      stock: 1100,
      price: 3700,
    },
    {
      name: 'co-op E',
      province: 'Jawa Timur',
      city: 'Kediri',
      distance: 104,
      stock: 1400,
      price: 3000,
    },
  ];
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Province</Th>
          <Th>City</Th>
          <Th>Distance</Th>
          <Th>Stock (kg)</Th>
          <Th>Price (/kg)</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {surplusStockData.map((data) => (
          <Tr>
            <Td>
              <Text color="muted">{data.name}</Text>
            </Td>
            <Td>
              <Text color="muted">{data.province}</Text>
            </Td>
            <Td>
              <Text color="muted">{data.city}</Text>
            </Td>
            <Td>
              <Text color="muted">{data.distance}</Text>
            </Td>
            <Td>
              <Text color="muted">{data.stock}</Text>
            </Td>
            <Td>
              <Text color="muted">{formatToIdr.format(data.price)}</Text>
            </Td>
            <Td>
              <Button colorScheme="green" onClick={props.onOpen}>
                Sell
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default TableHome;
