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

export const TableInventory = (props: TableProps) => {
  const formatToIdr = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

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
  return (
    <ChakraTable {...props}>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Quantity (kg)</Th>
          <Th>Production Batch</Th>
        </Tr>
      </Thead>
      <Tbody>
        {surplusStockData.map((data) => (
          <Tr>
            <Td>
              <Text color="muted">{data.name}</Text>
            </Td>
            <Td>
              <Text color="muted">{data.qty}</Text>
            </Td>
            <Td>
              <Text color="muted">{data.month}</Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default TableInventory;
