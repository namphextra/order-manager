import { ref, getStorage, uploadBytesResumable } from 'firebase/storage';
import firebase from './utils/firebase';

function App() {
  const upload = (files: FileList | null) => {
    const file = files?.[0];
    const storageRef = ref(getStorage(firebase), file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file as Blob);
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
