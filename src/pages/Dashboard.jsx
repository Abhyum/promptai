import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react';
import PromptInput from '../components/PromptInput';
import IncomeChart from '../components/IncomeChart';
import TransactionsList from '../components/TransactionsList';

const Dashboard = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <Grid
        templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
        gap={8}
      >
        {/* Left Section - Prompt Input */}
        <GridItem>
          <PromptInput />
        </GridItem>

        {/* Right Section - Analytics */}
        <GridItem>
          <VStack spacing={8} align="stretch">
            {/* Income Chart */}
            <Box
              p={6}
              borderWidth={1}
              borderColor="gray.200"
              borderRadius="md"
            >
              <IncomeChart />
            </Box>

            {/* Transactions List */}
            <Box
              p={6}
              borderWidth={1}
              borderColor="gray.200"
              borderRadius="md"
            >
              <TransactionsList />
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Dashboard;