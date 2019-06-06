import React from 'react';
import {Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

export class DeleteButton extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Button variant="secondary" value={this.props.id} onClick= {this.props.delete}>DELETE</Button>
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
                
                <Button variant="primary" onClick={this.props.addModal} >
                    ADD
                </Button>
            
        )
    }
}
export class UpdateButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Button variant="primary" onClick={this.props.openModal}>
                    Update
                </Button>
            </div>
        )
    }
}

