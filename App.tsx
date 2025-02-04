import React, {useEffect} from 'react';
import Routes from './src/ui/navigation/Routes';
import socketServices from '@utils/socketService';
// import './global.css';
// import './s'

const App = () => {
  //initialized
  useEffect(() => {
    socketServices.initializeSocket();
  }, []);

  return <Routes />;
};

export default App;
