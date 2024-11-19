import { Box, Container } from '@chakra-ui/react'
import Header from './components/Header'
import FileUpload from './components/FileUpload'
import DataPreview from './components/DataPreview'
import ChartGenerator from './components/ChartGenerator'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [headers, setHeaders] = useState([])

  const handleDataUpload = (parsedData, headers) => {
    setData(parsedData)
    setHeaders(headers)
  }

  return (
    <Box minH="100vh" bg="gray.900">
      <Header />
      <Container maxW="container.xl" py={8}>
        <FileUpload onDataUpload={handleDataUpload} />
        {data && (
          <>
            <DataPreview data={data} headers={headers} />
            <ChartGenerator data={data} headers={headers} />
          </>
        )}
      </Container>
    </Box>
  )
}

export default App
