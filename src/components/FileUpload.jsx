import { useRef } from 'react'
import { Box, Button, Text, VStack, Icon, useToast } from '@chakra-ui/react'
import { FaUpload, FaFileAlt } from 'react-icons/fa'
import Papa from 'papaparse'

function FileUpload({ onDataUpload }) {
  const fileInputRef = useRef()
  const toast = useToast()

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      Papa.parse(file, {
        complete: (results) => {
          const headers = results.data[0]
          const data = results.data.slice(1).filter(row => row.some(cell => cell))
          onDataUpload(data, headers)
          toast({
            title: "File uploaded successfully",
            description: `Loaded ${data.length} rows of data`,
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        },
        header: false,
        error: (error) => {
          toast({
            title: "Error uploading file",
            description: error.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        }
      })
    }
  }

  return (
    <VStack 
      spacing={4} 
      p={8} 
      border="1px dashed" 
      borderColor="whiteAlpha.300"
      borderRadius="xl"
      bg="whiteAlpha.50"
      backdropFilter="blur(10px)"
      transition="all 0.3s"
      _hover={{ borderColor: "blue.400" }}
    >
      <Icon as={FaFileAlt} w={10} h={10} color="blue.400" />
      <Text fontSize="lg" fontWeight="medium">Upload your CSV file</Text>
      <Text fontSize="sm" color="whiteAlpha.700">Drag and drop or click to select</Text>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <Button
        leftIcon={<FaUpload />}
        colorScheme="blue"
        onClick={() => fileInputRef.current.click()}
        size="lg"
        variant="outline"
        _hover={{
          bg: "blue.500",
          color: "white"
        }}
      >
        Choose File
      </Button>
    </VStack>
  )
}

export default FileUpload
