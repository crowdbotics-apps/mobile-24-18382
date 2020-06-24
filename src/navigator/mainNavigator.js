import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps70503Navigator from '../features/Maps70503/navigator';
import UserProfile70490Navigator from '../features/UserProfile70490/navigator';
import Maps70471Navigator from '../features/Maps70471/navigator';
import Settings70449Navigator from '../features/Settings70449/navigator';
import Settings70434Navigator from '../features/Settings70434/navigator';
import NotificationList70433Navigator from '../features/NotificationList70433/navigator';
import Maps70432Navigator from '../features/Maps70432/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Maps70503: { screen: Maps70503Navigator },
UserProfile70490: { screen: UserProfile70490Navigator },
Maps70471: { screen: Maps70471Navigator },
Settings70449: { screen: Settings70449Navigator },
Settings70434: { screen: Settings70434Navigator },
NotificationList70433: { screen: NotificationList70433Navigator },
Maps70432: { screen: Maps70432Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
