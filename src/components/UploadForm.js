import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];
    
    const insertImage = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png ou jpeg)');
        }
    }
    return (
    <form>
        <input type="file" onChange={insertImage} />
        <div className="output">
            { error && <div className="error">{error} </div> }
            { file && <div>{ file.name} </div>}
            { file && <ProgressBar setFile={setFile} /> }
        </div>
    </form>
  )
}

export default UploadForm
