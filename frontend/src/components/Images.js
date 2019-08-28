import React, { Component } from 'react';
import config from './config'
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

class Images extends Component {
  render() {
    return (
      <div className='item-center'>
      <Card style={{width: '50%'}}>   
        <img className='img-fluid' src={config.root + this.props.img.imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle className='item-center'>{this.props.img.title}</CardTitle>
          <CardSubtitle className='item-center'>{this.props.img.description}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default Images;

