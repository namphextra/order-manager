import './App.css';
import { Storage } from '@google-cloud/storage';

function App() {
  const storage = new Storage({
    projectId: '',
    keyFilename: './configs/google-cloud.json',
  });
  return (
    <div className="App">
      <input type="file" />
    </div>
  );
}

export default App;
