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
            movie_director: '',
            id: 0
        }
    }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.data !== this.props.data){
      this.setState({
        movie_title: this.props.data.movie_title,
        movie_year: this.props.data.movie_year,
        movie_description: this.props.data.movie_description,
        movie_casts: this.props.data.movie_casts,
        movie_director: this.props.data.movie_director,
        id: this.props.id
      });
    }
   }
  updateTitle = (event) => {
    this.setState({
      movie_title: event.target.value
    })
  }
  updateYear = (event) => {
    this.setState({
      movie_year: event.target.value
    })
  }
  updateDescription = (event) => {
    this.setState({
      movie_description: event.target.value
    })
  }
  updateCasts = (event) => {
    this.setState({
      movie_casts: event.target.value
    })
  }
  updateDirector = (event) => {
    this.setState({
      movie_director: event.target.value
    })
  }
    render() {
      return (<div>
            <Modal show={this.props.showUpdate} onHide={this.props.handleCloseUpdate}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                  <Form.Group controlId="formTitle">
                  <Form.Label>Movie Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" value={this.state.movie_title} onChange={(event) => this.updateTitle(event)}/>
                  </Form.Group>
                  <Form.Group controlId="formYear">
                    <Form.Label>Movie Year</Form.Label>
                    <Form.Control type="text" placeholder="Year" value={this.state.movie_year} onChange={(event) => this.updateYear(event)}/>
                  </Form.Group>
                  <Form.Group controlId="formDescription">
                    <Form.Label>Movie Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={this.state.movie_description} onChange={(event) => this.updateDescription(event)}/>
                  </Form.Group>
                  <Form.Group controlId="formCasts">
                    <Form.Label>Movie Casts</Form.Label>
                    <Form.Control type="text" placeholder="Casts" value={this.state.movie_casts} onChange={(event) => this.updateCasts(event)}/>
                  </Form.Group>
                  <Form.Group controlId="formDirector">
                    <Form.Label>Movie Director</Form.Label>
                    <Form.Control type="text" placeholder="Director" value={this.state.movie_director} onChange={(event) => this.updateDirector(event)}/>
                  </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleCloseUpdate}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.props.handleUpdate(
                      this.state.movie_title, this.state.movie_year, this.state.movie_description, this.state.movie_casts,this.state.movie_director, this.props.id
                    )}>
                    Update
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>);
    }
}

export default ModalComponent;