import { useState } from 'react'
import { Box, Select, VStack, Grid, Button, Flex } from '@chakra-ui/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler
} from 'chart.js'
import { Line, Bar, Pie, Radar, Scatter, PolarArea } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Title,
  Tooltip,
  Legend
)

const chartTypes = [
  { value: 'bar', label: 'Bar Chart' },
  { value: 'line', label: 'Line Chart' },
  { value: 'pie', label: 'Pie Chart' },
  { value: 'radar', label: 'Radar Chart' },
  { value: 'scatter', label: 'Scatter Plot' },
  { value: 'polar', label: 'Polar Area' }
]

function ChartGenerator({ data, headers }) {
  const [chartType, setChartType] = useState('bar')
  const [xAxis, setXAxis] = useState(headers[0])
  const [yAxis, setYAxis] = useState(headers[1])

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const generateColors = (count) => {
    const colors = []
    for (let i = 0; i < count; i++) {
      colors.push(getRandomColor())
    }
    return colors
  }

  const chartData = {
    labels: data.map(row => row[headers.indexOf(xAxis)]),
    datasets: [
      {
        label: yAxis,
        data: data.map(row => row[headers.indexOf(yAxis)]),
        backgroundColor: generateColors(data.length).map(color => `${color}80`),
        borderColor: generateColors(data.length),
        borderWidth: 2,
        pointBackgroundColor: 'white',
        pointBorderColor: '#2B6CB0',
        fill: chartType === 'radar' ? true : false
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: `${yAxis} vs ${xAxis}`,
        color: 'white'
      }
    },
    scales: chartType !== 'pie' && chartType !== 'polar' ? {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      }
    } : undefined
  }

  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return <Line data={chartData} options={chartOptions} />
      case 'pie':
        return <Pie data={chartData} options={chartOptions} />
      case 'radar':
        return <Radar data={chartData} options={chartOptions} />
      case 'scatter':
        return <Scatter data={chartData} options={chartOptions} />
      case 'polar':
        return <PolarArea data={chartData} options={chartOptions} />
      default:
        return <Bar data={chartData} options={chartOptions} />
    }
  }

  return (
    <VStack spacing={6} align="stretch">
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <Select 
          value={chartType} 
          onChange={(e) => setChartType(e.target.value)}
          bg="whiteAlpha.200"
          borderColor="whiteAlpha.300"
          _hover={{ borderColor: "blue.400" }}
        >
          {chartTypes.map(type => (
            <option key={type.value} value={type.value} style={{color: 'black'}}>
              {type.label}
            </option>
          ))}
        </Select>
        <Select 
          value={xAxis} 
          onChange={(e) => setXAxis(e.target.value)}
          bg="whiteAlpha.200"
          borderColor="whiteAlpha.300"
          _hover={{ borderColor: "blue.400" }}
        >
          {headers.map((header, index) => (
            <option key={index} value={header} style={{color: 'black'}}>
              {header} (X-Axis)
            </option>
          ))}
        </Select>
        <Select 
          value={yAxis} 
          onChange={(e) => setYAxis(e.target.value)}
          bg="whiteAlpha.200"
          borderColor="whiteAlpha.300"
          _hover={{ borderColor: "blue.400" }}
        >
          {headers.map((header, index) => (
            <option key={index} value={header} style={{color: 'black'}}>
              {header} (Y-Axis)
            </option>
          ))}
        </Select>
      </Grid>
      <Box 
        p={6} 
        bg="whiteAlpha.100" 
        borderRadius="xl" 
        boxShadow="xl"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor="whiteAlpha.200"
      >
        {renderChart()}
      </Box>
    </VStack>
  )
}

export default ChartGenerator
