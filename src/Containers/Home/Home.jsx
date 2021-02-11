//Importações Externas
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux"; 
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container"; 

//Importações Internas
import { useStyles } from './Styles';
import { employeeListApi } from '../../api/employeeList';
import AddButton from "../../Components/Buttons/AddButton";
import BasicCard from "../../Components/BarsicCard/BasicCard";
import { updateEmployeeList } from "../../Redux/Employee/EmployeeActions";
 
function Home({ history}) {
  const lists = useSelector((state) => state.Employee.lists); 
  const classes = useStyles(); 

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  } 

  const listEmployees = async() => {
    try{
      employeeListApi().then(result => {
        updateEmployeeList(result.data) 
      })
    }catch(error){
      console.log("API ERROR: " + JSON.stringify(error))
    }
  }

  useEffect(() => {      
    listEmployees()
    console.log(lists)
  }, [lists]);

  return (
    <main>  
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"> 
          <Container className = {classes.container}>
            <Grid container={true} spacing={4} direction="row">
              {lists.map((employee) => {
                console.log('ID ' + employee._id)
                return(
                <Grid key={employee._id}item={true} md={4}>
                    <motion.div  className="item" variants={item}> 
                    <BasicCard employee={employee} history={history} />
                  </motion.div>
                </Grid>
              )})}
            </Grid>
            <Grid container={true} spacing={4} direction="row">
              <AddButton /> 
            </Grid>
          </Container>
      </motion.div>
    </main>
  );
}

export default Home;
