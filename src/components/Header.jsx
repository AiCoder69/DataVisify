import { Box, Heading, Flex, Text } from '@chakra-ui/react'
import { FaChartBar } from 'react-icons/fa'

function Header() {
  return (
    <Box 
      bg="rgba(26, 32, 44, 0.95)" 
      p={4} 
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor="whiteAlpha.200"
    >
      <Flex align="center" maxW="container.xl" mx="auto">
        <FaChartBar size="24px" color="#63B3ED" />
        <Heading size="lg" ml={3} bgGradient="linear(to-r, blue.400, teal.400)" bgClip="text">
          DataVisify
        </Heading>
        <Text ml={4} color="whiteAlpha.700" fontSize="sm">
          Advanced Data Visualization Platform
        </Text>
      </Flex>
    </Box>
  )
}

export default Header
