import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';
import deepOrange from '@material-ui/core/colors/deepOrange';

import { Data } from './Data';


import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    }
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textRight: {
    textAlign: 'right'
  }
}));


const orange = deepOrange[500]; // #f44336

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <Card>
        <CardContent>
          <div className={useStyles.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={useStyles.paper}>
                  <TextField className={useStyles.textRight} id="value" name="value" value={this.state.value} onChange={(e) => this.handleChange(e)} fullWidth={true} />
                </Paper>
              </Grid>
              {
                Data.map((value, i) => {
                  console.log(i);
                  return (
                    <>
                      {i+1 == 17 ?
                        <Grid item xs={6}>
                          <Paper className={useStyles.paper}>
                            {
                              (i+1) % 4 == 0 ?
                                <Button style={{ backgroundColor: "#EE9644" }} variant="contained" size="large" fullWidth={true}>
                                  {value.name}
                                </Button>
                                :
                                <Button variant="contained" size="large" fullWidth={true}>
                                  {value.name}
                                </Button>
                            }
                          </Paper>
                        </Grid>
                        :
                        <Grid item xs={3}>
                          <Paper className={useStyles.paper}>
                            {
                              (i+1) % 4 == 0 || i == 18 ?
                                <Button style={{ backgroundColor: "#EE9644" }} variant="contained" size="large" fullWidth={true}>
                                  {value.name}
                                </Button>
                                :
                                <Button variant="contained" size="large" fullWidth={true}>
                                  {value.name}
                                </Button>
                            }
                          </Paper>
                        </Grid>
                      }
                    </>
                  )
                })
              }
              {/* <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    +/-
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    %
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    /
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    7
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    8
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    9
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    X
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    4
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    5
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    6
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    -
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    2
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    3
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    +
                  </Button>
                </Paper>
              </Grid>

              <Grid item xs={6}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    0
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    .
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={useStyles.paper}>
                  <Button variant="contained" size="large" fullWidth={true}>
                    =
                  </Button>
                </Paper>
              </Grid> */}
            </Grid>
          </div>
        </CardContent>
      </Card>
    );
  }

}

export default App;
