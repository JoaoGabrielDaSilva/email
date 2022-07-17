import { Feather } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Box, Row, Icon } from 'native-base'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { makeStyledComponent } from '../makeStyledComponent'

// const Icon = makeStyledComponent(Feather)

type Props = {}

export const Nav = ({}: Props) => {
  const { dispatch } = useNavigation()

  const openDrawer = () => {
    dispatch(DrawerActions.openDrawer)
  }

  return (
    <SafeAreaView>
      <Row w="full" p="4" justifyContent="space-between">
        <Icon
          as={Feather}
          name="menu"
          _dark={{ color: 'white' }}
          size="lg"
          onPress={openDrawer}
        />
        <Icon as={Feather} name="search" _dark={{ color: 'white' }} size="lg" />
      </Row>
    </SafeAreaView>
  )
}
