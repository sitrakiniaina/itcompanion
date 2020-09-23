
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
export function downloadFile (url,filename) {
    // const url = 'https://certificat.b-cdn.net/CERTIFICAT%20DE%20SCOLARITE.pdf';
    // Feel free to change main path according to your requirements.
    // IMPORTANT: A file extension is always required on iOS.
    // You might encounter issues if the file extension isn't included
    // or if the extension doesn't match the mime type of the file.
    
    const localFile = `${RNFS.DocumentDirectoryPath}/${filename}.pdf`;

    const options = {
      fromUrl: url,
      toFile: localFile
    };
    RNFS.downloadFile(options).promise
      .then(() => FileViewer.open(localFile))
      .then(() => {

      })
      .catch(error => {
        console.log(error);
      });
  }