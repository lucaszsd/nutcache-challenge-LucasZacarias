//Importações Externas
import React, {Fragment} from 'react';
import Fade from '@material-ui/core/Fade';
import { useStyles, Props } from './types';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
 
//Importações Internas 
import AddEmployeeForm from './AddEmployeeForm';
 
const AddButton = (props: Props): JSX.Element => {
    const classes = useStyles(); 
     
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => {
        setOpen(true);
    }; 

    const handleClose = () => {
    setOpen(false);
    };
  
    return (
        <Fragment>
            <Button
            variant="contained"
            color="primary" 
            onClick={handleOpen}
            >
            Add employee
            </Button>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>  
                <Fade in={open}>
                    <div className={classes.paper}> 
                        <AddEmployeeForm/> 
                    </div>
                </Fade> 
            </Modal> 
        </Fragment> 
    );
};


export default AddButton;
