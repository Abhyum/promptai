import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

const TransactionsList = () => {
  const transactions = [
    { id: 1, date: '2024-01-15', amount: 1250 },
    { id: 2, date: '2024-01-14', amount: 850 },
    { id: 3, date: '2024-01-13', amount: 2100 },
    { id: 4, date: '2024-01-12', amount: 950 },
    { id: 5, date: '2024-01-11', amount: 1500 },
  ];

  const income = [
    { id: 1, date: '2024-01-15', amount: 3000 },
    { id: 2, date: '2024-01-10', amount: 2500 },
    { id: 3, date: '2024-01-05', amount: 4000 },
    { id: 4, date: '2024-01-01', amount: 3500 },
    { id: 5, date: '2023-12-28', amount: 2800 },
  ];

  const TransactionTable = ({ data }) => (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th pl={0}>Date</Th>
            <Th isNumeric pr={0}>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((transaction) => (
            <Tr key={transaction.id}>
              <Td pl={0}>{transaction.date}</Td>
              <Td isNumeric pr={0}>${transaction.amount.toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );

  return (
    <Box>
      <Tabs variant="unstyled">
        <TabList borderBottom="1px" borderColor="gray.200">
          <Tab
            _selected={{ color: 'black', borderBottom: '2px solid', borderColor: 'black' }}
            pb={2}
          >
            Last 5 Transactions
          </Tab>
          <Tab
            _selected={{ color: 'black', borderBottom: '2px solid', borderColor: 'black' }}
            pb={2}
          >
            Last 5 Income
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            <TransactionTable data={transactions} />
          </TabPanel>
          <TabPanel px={0}>
            <TransactionTable data={income} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TransactionsList;