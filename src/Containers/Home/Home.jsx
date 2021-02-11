//Importações Externas
import React from "react";
import { useSelector } from "react-redux"; 
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container"; 
import { motion } from "framer-motion";
//Importações Internas
import BasicCard from "../../Components/BarsicCard/BasicCard";
import AddButton from "../../Components/Buttons/AddButton";
import { useStyles } from './Styles'
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


  return (
    <main>  
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"> 
          <Container className = {classes.container}>
            <Grid container={true} spacing={4} direction="row">
              {lists.map((employee) => (
                <Grid key={employee.id}item={true} md={4}>
                    <motion.div  className="item" variants={item}> 
                    <BasicCard employee={employee} history={history} />
                  </motion.div>
                </Grid>
              ))}
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
