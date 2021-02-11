//Importações Externas
import React, {Fragment}  from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Backdrop from '@material-ui/core/Backdrop';

import { useSelector } from "react-redux";
//Importações Internas 
import { useStyles} from './Styles';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal'; 
import AddForm from '../../Containers/AddForm';

function DeleteButton(props) { 
  const type = props.type; 
  const [open, setOpen] = React.useState(false);
  const classes = useStyles(); 
  const handleOpen = () => {
      setOpen(true);
  }; 

  const handleClose = () => {
  setOpen(false);
  };

  const Employee = useSelector((state) => state.Employee.lists);
  return (
    <Link to="/add">
      {type == 'nav'?
      <Button variant="contained" color="secondary">Deletar {Employee[0].name}</Button>:  
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      }
    </Link>
  //   <Fragment>
  //   {type == 'nav' ? 
  //   <Button
  //   variant="contained"
  //   color="secondary" 
  //   onClick={handleOpen}
  //   >
  //   Add employee
  //   </Button>:
  //   <Fab color="primary" onClick={handleOpen} aria-label="add">
  //        <AddIcon />
  //     </Fab>
  //   }

  //   <Modal
  //       aria-labelledby="transition-modal-title"
  //       aria-describedby="transition-modal-description"
  //       className={classes.modal}
  //       open={open}
  //       onClose={handleClose}
  //       closeAfterTransition
  //       BackdropComponent={Backdrop}
  //       BackdropProps={{
  //       timeout: 500,
  //   }}>  
  //       <Fade in={open}>
  //           <div className={classes.paper}> 
  //               {/* <AddEmployeeForm/>  */}
  //               <AddForm/>
  //           </div>
  //       </Fade> 
  //   </Modal> 
  // </Fragment> 
  );

}

export default DeleteButton;
