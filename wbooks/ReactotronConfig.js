// Imports
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Config code

Reactotron.setAsyncStorageHandler(AsyncStorage)
  // hola
  .configure({
    name: 'React Native Demo'
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/
    },
    editor: false,
    errors: { veto: () => false },
    overlay: false
  })
  .connect();
