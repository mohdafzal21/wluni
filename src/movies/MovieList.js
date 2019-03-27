
import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import Movie from './Movie';
import {bindActionCreators} from 'redux'
import { getMovies } from './actions';
class MoviesList extends PureComponent {
 async componentDidMount() {
   const {isMoviesLoaded,getMovies} = this.props
    if(!isMoviesLoaded ){
      getMovies()

    }
    
  }
 render() {
    return (
      <MovieGrid>
{this.props.movies.map(movie => <Movie key={movie.id} movie={movie} 
/>)}
      </MovieGrid>
    );
  }
}
const mapStateToProps = state =>({
  movies : state.movies.movies,
  isMoviesLoaded : state.movies.isMoviesLoaded
})
const mapDispatchToProps = dispatch => bindActionCreators ({
  getMovies
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
