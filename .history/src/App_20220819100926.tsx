import './App.css';
import { Storage } from '@google-cloud/storage';

function App() {
  const storage = new Storage({ projectId: '', keyFilename: '' });
  return (
    <div className="App">
      <input type="file" />
    </div>
  );
}

export default App;
