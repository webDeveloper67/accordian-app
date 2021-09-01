import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardHeader,
  Box,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

class SingleQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  showAccordianInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    return (
      <Box mb={3}>
        <Card>
          <CardHeader
            subheader={this.props.title}
            action={
              <IconButton
                aria-label="settings"
                onClick={this.showAccordianInfo}
              >
                {this.state.showInfo ? (
                  <IndeterminateCheckBoxIcon />
                ) : (
                  <AddBoxIcon />
                )}
              </IconButton>
            }
          />
          <CardContent>
            {this.state.showInfo && <Typography>{this.props.info}</Typography>}
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default SingleQuestion;
