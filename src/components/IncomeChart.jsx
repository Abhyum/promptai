import React from 'react';
import { Box, Text, VStack, HStack, Flex } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const IncomeChart = () => {
  const data = [
    { month: 'Jan', income: 4000 },
    { month: 'Feb', income: 3000 },
    { month: 'Mar', income: 5000 },
    { month: 'Apr', income: 4500 },
    { month: 'May', income: 6000 },
    { month: 'Jun', income: 5500 },
  ];

  const totalIncome = data.reduce((sum, item) => sum + item.income, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Box bg="black" color="white" p={2} borderRadius="md">
          <Text fontSize="sm">${payload[0].value}</Text>
        </Box>
      );
    }
    return null;
  };

  return (
    <VStack align="stretch" spacing={4}>
      <Text fontSize="xl" fontWeight="bold">Monthly Analysis</Text>
      
      <Box h="200px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="income" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#000' : '#E5E5E5'} />

              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <Flex justify="space-between" align="center" p={4} bg="gray.50" borderRadius="md">
        <Text fontSize="sm" color="gray.600">Total Income</Text>
        <Text fontSize="xl" fontWeight="bold">${totalIncome.toLocaleString()}</Text>
      </Flex>
    </VStack>
  );
};

export default IncomeChart;