import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react'

function DataPreview({ data, headers }) {
  return (
    <Box 
      overflowX="auto" 
      my={8} 
      bg="whiteAlpha.100"
      borderRadius="xl"
      boxShadow="xl"
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="whiteAlpha.200"
    >
      <Text fontSize="lg" fontWeight="bold" p={4}>Data Preview</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index} color="blue.300">{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.slice(0, 5).map((row, rowIndex) => (
            <Tr key={rowIndex} _hover={{ bg: "whiteAlpha.100" }}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex} color="whiteAlpha.900">{cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default DataPreview
