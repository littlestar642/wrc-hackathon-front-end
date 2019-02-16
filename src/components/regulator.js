import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';




const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});


class PaperSheet extends React.Component {


     handleWrcChange=(e)=>{

        if(!isNaN(e.target.value)){
        this.props.wrc(e.target.value);
        }
    }
    state={
        lichange:{},
        ulchange:{}
    }
    
    handleChangeli=(field,e)=>{
        let lichange={...this.state.lichange};
        lichange[field]=e.target.value;
        this.setState({lichange});
    }
    handleChangeul=(field,e)=>{
        let ulchange={...this.state.ulchange};
        ulchange[field]=e.target.value;
        this.setState({ulchange});
    }


  render(){
    return (<div>
        <div className='container'>
            <div className='row text-center text-alert'>
                <div className='col-sm-12'>
                <h2 style={{margin:'50px'}}>Regulator Dashboard</h2>
                </div>
            </div>
            <Divider/>
            <div className='row text-center'>
            <div className='col-sm-4'>
            <Paper className={this.props.classes.root} elevation={1}>
                <Typography variant="h3" component="h3">
                    Large Industries
                </Typography>
                <TextField
                    id="outlined-name"
                    label="pH"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeli('ph',e)}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    id="outlined-name"
                    label="Solid"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeli('sd',e)}
                    margin="normal"
                    variant="outlined"
                    fullWidth

                />
                <TextField
                    id="outlined-name"
                    label="hardness"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeli('hd',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Oil"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeli('ol',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="BoD"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeli('bd',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="min % Recycle"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeli('mn',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <div className='text-center'>
            <Button variant="outlined" color="primary" className={this.props.classes.button}>Submit</Button> 
        </div>
            </Paper>
        </div>
        <div className='col-sm-4'>
            <Paper className={this.props.classes.root} elevation={1}>
                <Typography variant="h3" component="h3">
                ULB and Municipal Corp
                </Typography>
                <TextField
                    id="outlined-name"
                    label="pH"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeul('ph',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Solid"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeul('sd',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="hardness"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeul('hd',e)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="Oil"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeul('ol',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="BoD"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeul('bd',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <TextField
                    id="outlined-name"
                    label="min % Recycle"
                    className={this.props.classes.textField}
                    onChange={(e)=>this.handleChangeul('mn',e)}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
                <div className='text-center'>
            <Button variant="outlined" color="primary" className={this.props.classes.button}>Submit</Button> 
        </div>

            </Paper>
        </div>
        <div className='col-sm-4'>
            <Paper className={this.props.classes.root} elevation={1}>
                <Typography variant='h3' component="h4">
                    WRC Rate
                </Typography>
                <TextField
                    id="outlined-name"
                    label="Value"
                    className={this.props.classes.textField}
                    onChange={this.handleWrcChange}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                />
            </Paper>
        </div>
            </div>
        </div>
    </div>)
  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);