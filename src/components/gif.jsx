import React, {Component} from 'react';

class Gif extends Component {

  handleClick = (event) => {
    console.log(this);
    const gifId = this.props.id;
    this.props.selectGifFunction(gifId);
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.webp?cid=ecf05e473eup5nbtvqlc02zf1d2o493xju8kln06vnhtizx1&rid=200w.webp&ct=g`;
    return(
      <img src={src} className="gif"
        onClick={this.handleClick}/>
    );
  }
}

export default Gif;
