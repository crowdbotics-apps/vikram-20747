import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings112606Navigator from '../features/Settings112606/navigator';
import UserProfile112604Navigator from '../features/UserProfile112604/navigator';
import UserProfile112573Navigator from '../features/UserProfile112573/navigator';
import Tutorial112572Navigator from '../features/Tutorial112572/navigator';
import NotificationList112544Navigator from '../features/NotificationList112544/navigator';
import Settings112543Navigator from '../features/Settings112543/navigator';
import Settings112535Navigator from '../features/Settings112535/navigator';
import UserProfile112533Navigator from '../features/UserProfile112533/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings112606: { screen: Settings112606Navigator },
UserProfile112604: { screen: UserProfile112604Navigator },
UserProfile112573: { screen: UserProfile112573Navigator },
Tutorial112572: { screen: Tutorial112572Navigator },
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
