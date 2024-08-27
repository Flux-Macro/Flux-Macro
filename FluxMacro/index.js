import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store } from './src/store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@fluentui-react-native/theme';
import { createDefaultTheme } from '@fluentui-react-native/default-theme';

const defaultTheme = createDefaultTheme();

const Wrapper=()=>(<ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
        <App />
    </Provider>
</ThemeProvider>);
AppRegistry.registerComponent(appName,()=>Wrapper);
