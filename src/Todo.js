import React, { Component } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

class Todo extends Component {
    render() {
        return (
            <Grid item sm={3}>
                <Card>
                    <CardContent>
                        <h2 align="center">{this.props.todo.task}</h2>
                        {this.props.todo.done ? (
                            <Typography variant="p" color="success.main" align="center">done</Typography>
                        ) : (
                            <Typography variant="p" color="error.main" align="center">not done</Typography>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default Todo;
