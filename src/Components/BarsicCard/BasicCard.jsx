//Importações Externas
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import Card from "@material-ui/core/Card"; 
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';  
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import Backdrop from '@material-ui/core/Backdrop';
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton"; 
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

//Importações Internas
import { useStyles } from './Styles';
import { deleteEmployee } from "../../Redux/Employee/EmployeeActions";
import DeleteButton from '../Buttons/DeleteButton';
import EditButton from '../Buttons/EditButton';


function BasicCard({ employee, deleteEmployee }) {

  const history = useHistory(); 
  const classes = useStyles(); 
  
  const editButtonHandler = () => {
    history.push(`/update/${employee.id}`);
  };

  const [open, setOpen] = React.useState(false);

  //Abir
  const handleOpen = () => {
    setOpen(true);
  }; 

  const handleClose = () => {
  setOpen(false);
  };
  const deleteButtonHandler = () => {
    deleteEmployee(employee.id);
  };
 
  return (
    <Fragment>
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
              Deseja exluir o usuário {employee.name}?
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
          {/* <IconButton onClick={handleOpen}>
            <DeleteIcon color="error" />
          </IconButton> */}
          <DeleteButton  employeeName = {employee.name} employeeId = {employee.id}/>
          <EditButton  employeeName = {employee.name} employeeId = {employee.id}/>
        </CardActions>
      </Card>
    </Fragment>
  );
}

export default connect(null, { deleteEmployee })(BasicCard);
