import { createDrawerNavigator } from '@react-navigation/drawer'
import { MainScreen } from '../screens/Main/Main'

const Drawer = createDrawerNavigator()

export const Navigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        title: '',
        headerShown: false,
        drawerType: 'front'
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
    </Drawer.Navigator>
  )
}
