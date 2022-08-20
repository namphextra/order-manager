import './App.css';
import firebase from './utils/firebase';
import { ref, getStorage, uploadBytesResumable } from 'firebase/storage';

function App() {
  const app = initializeApp({
  const upload = (files: FileList | null) => {
    const storageRef = ref(getStorage(firebase), 'nomnom1.png');
    const uploadTask = uploadBytesResumable(storageRef, files?.[0] as Blob);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    });
  };
  return (
    <div className="App">
      <input type="file" onInput={(e) => upload(e.currentTarget.files)} />
    </div>
  );
}

export default App;
