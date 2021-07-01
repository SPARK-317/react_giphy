import React, {Component} from 'react';
import giphy from 'giphy-api';


import Search from './search.jsx';
import Gif from './gif.jsx';
import Giflist from './giflist.jsx';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "JOXWsgDlyEURl6rgIh"
    }

    this.search("homer");
  }

  search = (query) =>{
    giphy("6H2dabISzL68aiFTsNtAkQlNJFNfcYgH").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, response) => {
      this.setState({
        gifs: response.data
      });
    });
  }

  selectGif = (gifId) => {
    this.setState(
      { selectedGifId: gifId }
    );
  }

  render(){
    return(
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>

        <div className="right-scene">
          <Giflist gifs={this.state.gifs} selectGifFunction={this.selectGif}/>
        </div>
      </div>
    )
  }
}

export default App;
