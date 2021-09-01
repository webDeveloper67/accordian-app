import React, { Component } from "react";
import data from "./data";
import { Grid, Paper, Button } from "@material-ui/core";
import SingleQuestion from "./components/SingleQuestion";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data,
    };
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={false} sm={4} md={7} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
          {/* <Button>font-size: 3rem</Button> */}
          {this.state.questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default App;
