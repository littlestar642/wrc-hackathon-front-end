import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Input from '@material-ui/icons/InputRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class PaperSheet extends React.Component {
  classes= this.props.classes;

  state={
    value:1
  }

  handleChange=(e,val)=>{
    this.setState({value:val})
  }

  render(){
    return (
      <div className={'m-auto col-sm-7'}>
  
        <Paper className={this.classes.root} elevation={1}>
        <h2 className='text-center'>IOT_Anamoly</h2>
        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels
          className={this.classes.root}
        >
          <BottomNavigationAction label="Continuous Weighted Average" icon={<Input />} />
          <BottomNavigationAction label="Regression" icon={<Input />} />
          <BottomNavigationAction label="Deep Neural Network" icon={<Input />} />
        </BottomNavigation>
        <div style={{margin:'50px'}}>
        <TextField
            id="standard-name"
            label="Maximum Acceptable Volume"
            className={this.classes.textField}
            margin="normal"
            fullWidth
          />
        </div>
        
          <div className='m-auto text-center'>
          <Button variant="outlined" color="primary" className={this.classes.button}>Submit</Button> 
          </div>
                 
        </Paper>
      </div>
    );
  } 
}


export default withStyles(styles)(PaperSheet);