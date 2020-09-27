import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList112544Navigator from '../features/NotificationList112544/navigator';
import Settings112543Navigator from '../features/Settings112543/navigator';
import Settings112535Navigator from '../features/Settings112535/navigator';
import UserProfile112533Navigator from '../features/UserProfile112533/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList112544: { screen: NotificationList112544Navigator },
Settings112543: { screen: Settings112543Navigator },
Settings112535: { screen: Settings112535Navigator },
UserProfile112533: { screen: UserProfile112533Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
