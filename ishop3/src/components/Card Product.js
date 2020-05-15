﻿import React from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {

  // displayName: 'Product2',
  
  static propTypes = { 
    code: PropTypes.number.isRequired, 
    product: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,    
    class: PropTypes.string.isRequired, 
    cbSelected: PropTypes.func.isRequired, 
    cbDelete: PropTypes.func.isRequired,
  }; 

  selectBlockProduct = (EO) => {
    this.props.cbSelected(this.props.code);
  }

  deleteBlockProduct = (EO) => {
    this.props.cbDelete(this.props.code);
  }

  editBlockProduct = (EO) => {
    // this.props.cbDelete(this.props.code);
  }

  render() {     
    return (
      <div className={this.props.class} onClick={this.selectBlockProduct}>
        <img className='Photo' src= {this.props.img} />
        <p className='ProductName'>{this.props.product}</p>
        <p className='Price'>{this.props.price}</p>
        <p className='Count'>В наличии {this.props.count} букета(ов)</p>
        <button className='Button' onClick={this.deleteBlockProduct}>Удалить</button>
        <button className='Button' onClick={this.editBlockProduct}>Редактировать</button>
    </div>
    );  
  }

}


export default CardProduct;