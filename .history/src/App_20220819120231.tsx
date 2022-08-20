import './App.css';
import { initializeApp } from 'firebase/app';

function App() {
  const app = initializeApp({ storageBucket: 'nomnom-efcab.appspot.com' });
  const upload = (files: any) => {
    console.log(123, files);
    bucket.file('test');
  };
  return (
    <div className="App">
      <input type="file" onInput={(e) => upload(e.target)} />
    </div>
  );
}

export default App;
