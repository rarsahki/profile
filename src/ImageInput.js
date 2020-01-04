import React, { Component } from 'react';
import {loadModels, getFullFaceDescription} from './face';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

// Import image to test API
const testImg = require('./website.jpg');

// Initial State
const INIT_STATE = {
  imageURL: testImg,
  fullDesc: null,
  crop: {
    unit: '%', // default, can be 'px' or '%'
    x: 130,
    y: 50,
    width: 200,
    height: 200,
    ascpect: 1/1
  }
};

class ImageInput extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INIT_STATE};
  }
  componentWillMount = async () => {
    await loadModels();
    await this.handleImage(this.state.imageURL);
  };

  handleImage = async (image = this.state.imageURL) => {
    await getFullFaceDescription(image).then(fullDesc => {
      //console.log(fullDesc[0].detection.box);
      this.setState({ fullDesc });
    });
  };

  render() {
    const { imageURL } = this.state;
    const { crop } = this.state;
    return (
      <div>
        <ReactCrop src={imageURL} alt="imageURL" crop={crop}/>
      </div>
    );
  }
}

export default ImageInput;
