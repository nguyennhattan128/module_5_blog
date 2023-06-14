import {useRef, useState} from "react";
import {useFormikContext} from "formik";


export default function FileUpload(props) {
    const url = props.image
    console.log(url)
    const fileInput = useRef(null);
    const {values, submitForm} = useFormikContext();
    console.log('values: ', values)
    const [imageUrl, setImageUrl] = useState(url)

    function handleClick() { // không return thì sẽ trả undifile
        fileInput.current.click();
    }

    function handleSelectFile(e) {
        const files = Array.from(e.nativeEvent.target.files)
        if (files.length > 0) { // array và object luôn tồn tại, nên cần kiểm tra độ dài, và đếm trong phần từ có bao nhiêu key
            const file = files[0]
            console.log(file)
            values.image = files
            const blob = URL.createObjectURL(file)
            setImageUrl(blob)
        }
    }

    return (
        <div className="card shadow-none" onClick={handleClick}
             style={{display: "flex", alignItems: "center", justifyContent: "center", height: "250px"}}>
            {imageUrl ? <img style={{width: '100%', height: '100%'}} src={imageUrl}/> :
                <i className="bi bi-images display-3"/>}
            <div>
                <input
                    type="file"
                    ref={fileInput} style={{display: "none"}} onChange={handleSelectFile}/>
            </div>
        </div>
    )
}