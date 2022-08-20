import './App.css';
import { Storage } from '@google-cloud/storage';

function App() {
  const storage = new Storage({
    projectId: 'todo-240003',
    keyFilename: './configs/google-cloud.json',
  });
  const bucket = storage.bucket('nomnom-order');
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
