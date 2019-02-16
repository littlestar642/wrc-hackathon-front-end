import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Assignment from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class ListItemLink extends React.Component {
  renderLink = itemProps => <Link to={this.props.to} {...itemProps} />;

  render() {
    const { icon, primary } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
}

class TemporaryDrawer extends React.Component {

  closeDrawer = (open) => () => {
    this.props.closeDrawer();
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
        <ListItem button key={'home'}>
              <ListItemLink to={`/`} primary={'Home'} icon={<Assignment/>} />
        </ListItem>
          {['IOT_Anamoly', 'Device_Auth', 'Regulator'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemLink to={`/${text}`} primary={text} icon={<Assignment/>} />
            </ListItem>
          ))}
        </List>   
      </div>
    );

    return (
      <div>
        <Drawer open={this.props.sideDrawState} onClose={this.closeDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeDrawer()}
            onKeyDown={this.closeDrawer()}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}


export default withStyles(styles)(TemporaryDrawer);
