import React, {Component} from 'react';
import popcorn from '../src/images/popcorn.jpg';
import '../src/home.css';
import { MDBDataTable } from 'mdbreact';
import Axios from'axios';
// import { API_URL } from './static/constants' 
class Home extends Component {

        constructor(props){
            super(props)
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
            rows: []
            }
          }
    componentDidMount() {
    Axios
      .get('http://localhost:8080/api/v1/movies')
      .then(res => {
          const resp = res.data.map( data => {
            return {
              movie_title : data.info.movie_title,
              movie_year: data.info.movie_year,
              movie_description: data.info.movie_description,
              movie_casts: data.crew.movie_casts,
              movie_director: data.crew.movie_director
            }
          })
          const newState = Object.assign({}, this.state, {
            rows  : resp 
          })
          document.getElementsByClassName('dataTable')[0].children[2].remove();
          document.querySelector('.dataTables_filter').style.cssText = " display: block; float: right; margin: 10px auto; position: relative; top: 0px;";
          document.querySelector('.dataTables_length').style.cssText = " float: left;";
          this.setState(newState);
      })
      .catch(err=> {
          console.log(err);
      })
  }

    render(){
        return(
            <div className = "main">
                <div>
                    <table className = "homePage"> 
                        <tbody>
                            <tr>
                                <td>
                                    <img src = {popcorn} width = "50" alt="popcorn"/>
                                </td>
                                <td width = "8"></td>
                                <td>
                                   <h3>Movie Search</h3>
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    <div className="table-container">
                            <MDBDataTable data = {this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;