import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './sidebar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component {

  state={
    left:false,
  }
  toggleDrawer=()=>{
    this.setState((state)=>{
      return {left:!state.left}
    });
  }
  closeDrawer=()=>{
    this.setState({left:false});
  }

  render(){
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Noncence App
          </Typography>
          <div className='float left'><strong>WRC Rate</strong> - 1Eth = {this.props.wrc} WRC</div>
        </Toolbar>
      </AppBar>
      <Sidebar sideDrawState={this.state.left} closeDrawer={()=>this.closeDrawer(false)}></Sidebar>
    </div>
  );
  }
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);