import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          movie_title: '',
          movie_year: '',
          movie_description: '',
          movie_casts: '',
          movie_director: ''
        }
    }
  
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.data !== this.props.data){
          this.setState({
            movie_title: '',
            movie_year: '',
            movie_description: '',
            movie_casts: '',
            movie_director: ''
          });
        }
       }
    addTitle = (event) => {
      this.setState({
        movie_title: event.target.value
      })
    }
    addYear = (event) => {
      this.setState({
        movie_year: event.target.value
      })
    }
    addDescription = (event) => {
      this.setState({
        movie_description: event.target.value
      })
    }
    addCasts = (event) => {
      this.setState({
        movie_casts: event.target.value
      })
    }
    addDirector = (event) => {
        this.setState({
          movie_director: event.target.value
        })
      }

    
    render() {
      return (
          <div>
            <Modal show={this.props.showAdd} onHide={this.props.handleCloseAdd}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form id="reset">
                    <Form.Group controlId="formTitle"  >
                      <Form.Label>Movie Title</Form.Label>
                      <Form.Control type="text" placeholder="Title" onChange={(event) => this.addTitle(event)} required="true" />
                    </Form.Group>

                    <Form.Group controlId="formYear">
                      <Form.Label>Movie Year</Form.Label>
                      <Form.Control type="text" placeholder="Year" onChange={(event) => this.addYear(event)} required />
                    </Form.Group>

                    <Form.Group controlId="formDescription">
                      <Form.Label>Movie Description</Form.Label>
                      <Form.Control type="text" placeholder="Description" onChange={(event) => this.addDescription(event)} />
                    </Form.Group>
                    
                    <Form.Group controlId="formCasts">
                      <Form.Label>Movie Casts</Form.Label>
                      <Form.Control type="text" placeholder="Casts" onChange={(event) => this.addCasts(event)} />
                    </Form.Group>

                    <Form.Group controlId="formDirector">
                      <Form.Label>Movie Director</Form.Label>
                      <Form.Control type="text" placeholder="Director" onChange={(event) => this.addDirector(event)} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleCloseAdd}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(event) => this.props.handleAdd(this.state.movie_title, 
                      this.state.movie_year, this.state.movie_description, this.state.movie_casts, this.state.movie_director, event
                      )}>
                      Add
                    </Button>
                </Modal.Footer>
            </Modal>
          </div> );
    }
}

export default ModalComponent;