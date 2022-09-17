import { deleteObject, ref } from "firebase/storage"
import { FirebaseStorage } from "../../firebase/config"


export const fileDelete = async ({path}) =>{

    const imgRef = ref(FirebaseStorage, path);

    try {
      await deleteObject(imgRef)      
    } catch (error) {
        throw new Error( error.message )    
    }
    
}