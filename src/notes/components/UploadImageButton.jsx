import { UploadFileOutlined } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startUploadingFiles } from "../../store/notes/thunks"

export const UploadImageButton = () => {

    const fileInputRef = useRef()
    const dispatch = useDispatch()

    const {isSaving} = useSelector(state=> state.note)

    const onFileInputChange = ({target})=>{
        if (target.files === 0) return
        dispatch(startUploadingFiles(target.files))
    }
  return (
    <>
        <input 
            multiple
            type="file"
            onChange={onFileInputChange} 
            ref={fileInputRef}
            style={{display:'none'}}
            />
    <Button 
        onClick={()=>fileInputRef.current.click()}
        disabled={isSaving}
    >
        <UploadFileOutlined/>
        Elegir archivos
    </Button>
    
    </>
  )
}
