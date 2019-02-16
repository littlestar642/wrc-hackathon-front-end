import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

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
    meters:[{
      name:'One Meter'
    },
    {
      name:'Two Meter'
    }
  ]
  }

  render(){
    return (
      <div>
        <div className='text-center'>
          <Paper className={this.classes.root} elevation={1}>
            <Typography variant="h3" component="h3">
              All IOT Meters
            </Typography>
            <Divider/>
            {this.state.meters.map((meter,i)=>{
              return (<div style={{margin:'50px'}} key={i}><Typography component="h3" variant='h4'>
              {i+1+'.'} {meter.name}
            </Typography><Divider/></div>)
            })}
            
          </Paper>
        </div>
        
      </div>
    );
  } 
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);