import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class PaperSheet extends React.Component {
  classes = this.props.classes;

    state={
        device:{}
    }


  handleDevice=(val,e)=>{
        let device={...this.state.device};
        device[val]=e.target.value;
        this.setState({device});
        // this.state.device[val]=e.target.value;
  }

  render(){
    return (
        <div className='m-auto col-sm-8 text-center'>
          <Paper className={this.classes.root} elevation={1}>
            <Typography variant="h3" component="h3">
              Device-Authentication
            </Typography>
            <TextField
              id="outlined-name"
              label="Device ID"
              className={this.classes.textField}
              onChange={(e)=>this.handleDevice('id',e)}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-name"
              label="Organisation"
              className={this.classes.textField}
              onChange={(e)=>this.handleDevice('orgName',e)}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-name"
              label="Type"
              className={this.classes.textField}
              onChange={(e)=>this.handleDevice('type',e)}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="outlined-name"
              label=""
              className={this.classes.textField}
              onChange={(e)=>this.handleDevice('date',e)}
              margin="normal"
              variant="outlined"
              type='Date'
              fullWidth
            />
            <div className='m-auto text-center'>
            <Button variant="outlined" color="primary" className={this.classes.button}>Submit</Button> 
        </div>
          </Paper>

        </div>
      );
  } 
}

export default withStyles(styles)(PaperSheet);
