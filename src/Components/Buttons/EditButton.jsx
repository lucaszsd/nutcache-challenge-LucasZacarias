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
  const employeeId = props.employeeId;
  const employeeName = props.employeeName;
 
  const history = useHistory()
  
  const editButtonHandler = () => {
    history.push(`/update/${employeeId}`);
  };

  return (
    <Fragment>
      {type == 'nav'?
        <Button variant="contained" color="secondary" onClick = {editButtonHandler}>Editar {employeeName}</Button>:  
        <IconButton onClick={editButtonHandler}>
          <EditIcon color="primary" />
        </IconButton> 
      } 
    </Fragment>
    
  );

}

export default EditButton;
