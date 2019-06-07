import React from 'react';
import {Button} from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import DescriptionIcon from '@material-ui/icons/Description';
import AddIcon from '@material-ui/icons/Add';
import '../src/actions.css'



  

export class DeleteButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class = "deleteButton">
                <Fab color="primary" value={this.props.id} onClick= {this.props.delete}>
                    <DeleteIcon />
                </Fab>
            </div>
        )
    }
}

export class AddButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
                
        <div class = "addButton">
            <Fab onClick={this.props.addModal} color="tertiary" aria-label="Edit" >
                <AddIcon />
            </Fab>
        </div>
              )
    }
}
export class UpdateButton extends React.Component {
    

    constructor(props) {
        super(props);
    }
   
    render() {
        return(
            <div class = "editButton">
                <Fab onClick={this.props.openModal} color="secondary" aria-label="Edit" >
                    <DescriptionIcon />
                </Fab>
            </div>
        )
    }
}

