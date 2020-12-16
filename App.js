import React, {memo} from 'react';
import BaseRoute from './src/route';
import {Provider} from 'react-redux';
import store from './src/store';
import {Provider as Providers} from '@ant-design/react-native';
import customTheme from './customTheme';

function App() {
  return (
    <Providers theme={customTheme}>
      <Provider store={store}>
        <BaseRoute />
      </Provider>
    </Providers>
  );
}
export default memo(App);
