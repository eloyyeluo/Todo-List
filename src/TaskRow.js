import Checkbox from '@mui/material/Checkbox';
import {firestoreDeleteText} from './FirebaseAPI.ts';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
var currentID;

const handleChange = () => {
    // delete the current task from datastore
    var error;
    firestoreDeleteText(currentID, (err) => {
        console.log('delete Text')
        error = err;
    })
    if (error != null) {
        return error;
    }
};

const TaskRow = (props) => {
    currentID = props.id;
    return (
        <div>
            <FormGroup>
            <FormControlLabel control={<Checkbox/>} onChange={handleChange} label={props.displayText} />
            </FormGroup>
        </div>
    )
}

export default TaskRow;