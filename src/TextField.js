// import TrueTextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { firestoreAddText } from './FirebaseAPI.ts';
const TextField = () => {
    const [text, setText] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        firestoreAddText(text);
      }    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    />
                    <input type="submit" />
                </label>
            </form>
        </div>
    )
}

export default TextField;