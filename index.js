/**
 * @format
 */

import {AppRegistry} from 'react-native';
import navigation from './src/navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => navigation);
