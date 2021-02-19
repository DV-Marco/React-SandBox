import React, { Component } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import data from "./../assets/data.json";
import "./../styles/datos.css";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export class Datos extends Component {
  render() {
    return (
      <div class="list" id="container">
        <h1>{this.props.title}</h1>
        <Card>
          <CardContent>
            <Typography variant="h6" component="h2">
              {this.props.content}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Datos;
