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

type TableInventoryProps = {
  data: { name: string; qty: number; month: string }[];
};

export const TableInventory = (props: TableInventoryProps) => {
  return (
    <ChakraTable>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Quantity (kg)</Th>
          <Th>Production Batch</Th>
        </Tr>
      </Thead>
      <Tbody>
        {props.data.map((v) => (
          <Tr>
            <Td>
              <Text color="muted">{v.name}</Text>
            </Td>
            <Td>
              <Text color="muted">{v.qty}</Text>
            </Td>
            <Td>
              <Text color="muted">{v.month}</Text>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
};

export default TableInventory;
