import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import React from 'react'
import theme from '../assets/theme'

type Props = {
  children: React.ReactNode
}

export const AppContainer = ({ children }: Props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
