import React, { Component } from 'react';
import popcorn from '../src/images/popcorn.jpg';
import '../src/home.css';
import { MDBDataTable } from 'mdbreact';
import Axios from 'axios';
import { API_URL } from './static/constants'
import { DeleteButton, AddButton, UpdateButton } from './actions';
import ModalAdd from '../src/form.js';
import ModalUpdate from '../src/update.js'
class Home extends Component {

  constructor(props) {
    super(props)
    this.handleCloseUpdate = this.handleCloseUpdate.bind(this);
    this.handleCloseAdd = this.handleCloseAdd.bind(this);
    this.state = {
      columns: [
        {
          label: 'Movie Title',
          field: 'movie_title',
          sort: 'asc'
        },
        {
          label: 'Date Released',
          field: 'movie_year',
          sort: 'asc'
        },
        {
          label: 'Movie Description',
          field: 'movie_description',
          sort: 'asc'
        },
        {
          label: 'Casts',
          field: 'movie_casts',
          sort: 'asc'
        },
        {
          label: 'Director',
          field: 'movie_director',
          sort: 'asc'
        }
      ],
      rows: [],
      showUpdate: false,
      showAdd: false
    }
  }

  handleShowUpdate(index, id) {
    this.setState({
      showUpdate: true,
      index: index,
      id: id
    });
  }

  handleShowAdd() {
    this.setState({ showAdd: true });
  }

  handleCloseUpdate() {
    this.setState({ showUpdate: false });
  }

  handleCloseAdd = () => {
    this.setState({ showAdd: false });
  }
  fetchInventories() {
    Axios
      .get(API_URL)
      .then(res => {
        const resp = res.data.map((data, index) => {
          return {
            movie_title: data.info.movie_title,
            movie_year: data.info.movie_year,
            movie_description: data.info.movie_description,
            movie_casts: data.crew.movie_casts,
            movie_director: data.crew.movie_director,
            action: [<DeleteButton id={data.id} delete={(event) => this.deleteInventory(event)} />,
              <UpdateButton 
              id={data.id} 
              openModal={() => this.handleShowUpdate(index, data.id)}/>]
          }
        })
        const newState = Object.assign({}, this.state, {
          rows: resp
        })
        document.getElementsByClassName('dataTable')[0].children[2].remove();
        document.querySelector('.dataTables_filter').style.cssText = " display: block; float: right; margin: 10px auto; position: relative; top: 0px;";
        document.querySelector('.dataTables_length').style.cssText = " float: left;";
        this.setState(newState);
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount = () => {
    this.fetchInventories()
  }
  addInventory = (movie_title, movie_year, movie_description, movie_casts, movie_director, event) => {
    event.preventDefault();
    Axios
      .post(API_URL, {
        "info": {
          "movie_title": movie_title,
          "movie_year": movie_year,
          "movie_description": movie_description
        },
        "crew": {
          "movie_casts": movie_casts,
          "movie_director": movie_director
        }
      })
      .then(response => {
        this.setState({ showAdd: false });
        this.fetchInventories();
      })
      .catch(error => {
        console.log(error);
      });
  }
  editInventory = (movie_title, movie_year, movie_description, movie_casts, movie_director, id) => {
    console.log(this.state.id)
    Axios
      .put(API_URL+ this.state.id, {
        "info": {
          "movie_title": movie_title,
          "movie_year": movie_year,
          "movie_description": movie_description
        },
        "crew": {
          "movie_casts": movie_casts,
          "movie_director": movie_director
        }
      }).then(response => {
        this.setState({ showUpdate: false });
        this.fetchInventories();
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteInventory = (event) => {
    Axios
      .delete(API_URL + event.target.value)
      .then(() => {
        this.fetchInventories();
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="main">
        <div>
          <table className="homePage">
            <tbody>
              <tr>
                <td>
                  <img src={popcorn} width="50" alt="popcorn" />
                </td>
                <td width="8"></td>
                <td>
                  <h3>Movie Search</h3>
                </td>

              </tr>
            </tbody>
          </table>
          <div className="table-container">
            
            <AddButton addModal={this.handleShowAdd.bind(this)}
                handleAdd={(event) => this.addInventory(event)}/>
              <ModalUpdate 
                id={this.state.id}
                showUpdate={this.state.showUpdate} 
                handleCloseUpdate ={this.handleCloseUpdate}
                handleUpdate = {this.editInventory}
                data={this.state.rows[this.state.index]}/>
             <ModalAdd 
                showAdd={this.state.showAdd}
                handleCloseAdd ={this.handleCloseAdd}
                handleAdd={this.addInventory}
              />
              <MDBDataTable data={this.state} key={this.state.rows.id} />
          </div>
        </div>
      </div>
    )
  }
}
export default Home;