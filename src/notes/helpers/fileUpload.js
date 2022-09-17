import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { FirebaseStorage } from "../../firebase/config";

export const fileUpload = async (file) => {

    const name = new Date().getTime() + '.' + file.name;
    const path = `images/${name}`;

    const imgRef = ref(FirebaseStorage, path);

    const metadata = {
        contentType: file.type
    };


    try {
        
        const uploadTask = await uploadBytes(imgRef, file, metadata);
        const url = await getDownloadURL(uploadTask.ref);
        return {
            url,
            path
        }

    } catch (error) {
        console.error(error);
        throw new Error( error.message );
    }

}