import React, { Component } from "react";
import { Container, Grid } from "@mui/material";
import Todo from "./Todo";

class MyList extends Component {
    render() {
      const toDoItems = this.props.todos.map((todo, i) => {
        return <Todo todo={todo} key={i} />
      });
        return (
            <Container>
                <h1 align="center">Spring Forward To-Do List</h1>
                <Grid container spacing={2}>
                {toDoItems}
                </Grid>
            </Container>
        );
    }
}

export default MyList;
