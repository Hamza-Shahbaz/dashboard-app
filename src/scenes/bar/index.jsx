import React from 'react'
import BarChart from '../../components/BarChart'
import { Box } from '@mui/material'
import Header from '../../components/Header'

const Bar = () => {
  return (
    <Box m="20px" >
        <Header title="Bar Chart" subTitle="Bar Chart Example" />
        <Box height='75vh'>
            <BarChart />
        </Box>
    </Box>
  )
}

export default Bar