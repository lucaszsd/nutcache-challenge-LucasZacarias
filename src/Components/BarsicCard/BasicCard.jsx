//Importações Externas
import React from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card"; 
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton"; 
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

//Importações Internas
import { useStyles } from './Styles';
import { deleteEmployee } from "../../Redux/Employee/EmployeeActions";

function BasicCard({ employee, deleteEmployee }) {
  const history = useHistory(); 
  const classes = useStyles(); 
  
  const editButtonHandler = () => {
    history.push(`/update/${employee.id}`);
  };

  const deleteButtonHandler = () => {
    deleteEmployee(employee.id);
  };
 
  return (
    <Card style = {classes.card}> 
      <CardContent>
        <Typography variant="h6" component="h2">
            {employee.name}
        </Typography>
        <Typography>
            {employee.team}
        </Typography>
        <Typography>
            {employee.email}
        </Typography>
        <Typography color="textSecondary" component="p">
            {employee.startDate}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={deleteButtonHandler}>
          <DeleteIcon color="error" />
        </IconButton>
        <IconButton onClick={editButtonHandler}>
          <EditIcon color="primary" />
        </IconButton> 
      </CardActions>
    </Card>
  );
}

export default connect(null, { deleteEmployee })(BasicCard);
