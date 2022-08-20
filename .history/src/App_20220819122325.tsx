import './App.css';
import { initializeApp } from 'firebase/app';
import { ref, getStorage, uploadBytes } from 'firebase/storage';

function App() {
  const app = initializeApp({
    apiKey: 'AIzaSyAzqxmGZfI5xhG6PyBgsU1eyh_tM8YRDsc',
    authDomain: 'nomnom-efcab.firebaseapp.com',
    projectId: 'nomnom-efcab',
    storageBucket: 'nomnom-efcab.appspot.com',
    messagingSenderId: '787910022109',
    appId: '1:787910022109:web:39fc17774f1ba520e2dc34',
    measurementId: 'G-8T5H6KV896',
  });
  const upload = (e: any) => {
    const storageRef = ref(getStorage(app), 'nomnom.png');
    uploadBytes(storageRef, e.files[0]).then((res) => console.log(9999, res));
  };
  return (
    <div className="App">
      <input type="file" onInput={(e) => upload(e.target)} />
    </div>
  );
}

export default App;
