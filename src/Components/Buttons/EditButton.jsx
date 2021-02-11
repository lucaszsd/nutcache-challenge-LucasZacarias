//Importações Externas
import React, {Fragment}  from "react";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Backdrop from '@material-ui/core/Backdrop';
import IconButton from "@material-ui/core/IconButton"; 
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
//Importações Internas 
import { useStyles} from './Styles';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal'; 
import AddForm from '../../Containers/AddForm';

function EditButton(props) { 
  const type = props.type; 
  const [open, setOpen] = React.useState(false);
  const classes = useStyles(); 
  const handleOpen = () => {
      setOpen(true);
  }; 

  const history = useHistory()
  const Employee = useSelector((state) => state.Employee.lists);
  
  const lastAddedEmployee = Employee[0]
  
  const handleClose = () => {
  setOpen(false);
  };

  const editButtonHandler = () => {
    history.push(`/update/${lastAddedEmployee.id}`);
  };

  return (
    <Button  variant="contained" color="secondary" onClick = {editButtonHandler}>Editar {Employee[0].name}</Button>  
  );

}

export default EditButton;
