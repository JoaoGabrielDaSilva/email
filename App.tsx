import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { AppContainer } from './src/components/app.container'
import { Navigator } from './src/routes/app.routes'

import { MainScreen } from './src/screens/Main/Main'

export default function App() {
  return (
    <AppContainer>
      <StatusBar style="auto" />

      <Navigator />
    </AppContainer>
  )
}
