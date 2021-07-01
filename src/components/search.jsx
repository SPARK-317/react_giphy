import React, {Component} from 'react';

class Search extends Component{

  handleChange = (event) => {
    const query = event.target.value;
    this.props.searchFunction(query);
  }

  render() {
    return(
      <input type="search" className="form-search"
        onChange={this.handleChange}
      />
    )
  }

}

export default Search;
