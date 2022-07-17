import React from 'react'
import { Box, Text } from 'native-base'
import { Nav } from '../../components/Nav/Nav'

export const MainScreen = () => {
  return (
    <Box
      w="full"
      h="full"
      _dark={{
        bg: 'primary.500'
      }}
      _light={{
        bg: 'red.100'
      }}
    >
      <Nav />
    </Box>
  )
}
