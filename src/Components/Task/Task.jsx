import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";

import { checkTask } from "../../Redux/Employee/EmployeeActions";

function Task({ title, done, employeeId, taskId, checkTask }) {
  const taskCheckHandler = () => {
    checkTask(employeeId, taskId);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox checked={done} onChange={taskCheckHandler} />
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
}
export default connect(null, { checkTask })(Task);
