//Importações Externas
import React, {Fragment}  from "react";
import { Link } from "react-router-dom"; 
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';  
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/CardActions'; 
import Backdrop from '@material-ui/core/Backdrop'; 
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";  

//Importações Internas 
import { useStyles} from './Styles';

import { deleteEmployee } from "../../Redux/Employee/EmployeeActions";

function DeleteButton(props) { 
  const type = props.type; 
  const employeeId = props.employeeId;
  const employeeName = props.employeeName;

  const [open, setOpen] = React.useState(false);
  const classes = useStyles(); 
  
  //Modal Fechado
  const handleClose = () => {
    setOpen(false);
  };

  //Modal Aberto
  const handleOpen = () => {
    setOpen(true);
  }; 
 
  //Apaga Usuário
  const deleteButtonHandler = () => {
    deleteEmployee(employeeId);
  };
 
  return (
    <Fragment>
      {type == 'nav'?
        <Button variant="contained" color="secondary" onClick = {handleOpen}>Deletar {employeeName}</Button>:  
        <IconButton onClick={handleOpen}>
          <DeleteIcon color="error" />
        </IconButton>
      }
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
          <Typography variant="h6" gutterBottom>
            Deseja exluir o usuário {employeeName}?
          </Typography>
              
            <Grid className={classes.form} container> 
              <Grid item xs={12}> 
                <Link to="/" className={classes.link}>
                  <Button className={classes.button} variant="contained" color="secondary" onClick={handleClose}>
                    cancel
                  </Button>
                  <Button className={classes.button} variant="contained" color="primary" onClick={deleteButtonHandler}>
                    Delete
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Fade> 
      </Modal> 
    </Fragment>  
    
  );

}

export default DeleteButton;
