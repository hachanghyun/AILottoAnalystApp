import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://chatgptlotto.pages.dev/' }} 
      style={{ margin: 0  ,flex: 1, marginLeft: -105, marginRight:-105
  
      }}
    />
  );
}