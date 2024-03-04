import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs/lib/typescript/src/types';
import {View} from 'react-native';
import TabButton from './TabButton';

const TabBar = ({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps): JSX.Element => {
  console.log({state, descriptors, navigation, position});
  return (
    <View style={{flexDirection: 'row', paddingTop: 20}}>
      {state.routes.map(route => (
        <TabButton key={route.key} name={route.name} />
      ))}
    </View>
  );
};
export default TabBar;
