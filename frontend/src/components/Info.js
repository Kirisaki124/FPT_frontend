import React, { Component } from 'react';
import axios from 'axios'
import config from './config'
import Images from './Images';

class Info extends Component {
state = {
    images: []
}

  componentDidMount() {
      axios.get(config.root + '/api/images')
      .then(data => {
          this.setState({ images: data.data })
          console.log(data.data)
        })
      .catch(err => console.err(err))
  }
    render() {
      const allImages = this.state.images.map(img => <ol><Images img = {img}/></ol>)
    return (
      <div>
         {allImages}   
      </div>
    );
  }
}

export default Info;