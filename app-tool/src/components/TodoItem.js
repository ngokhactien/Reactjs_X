import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import PropTypes from 'prop-types';

import checkImg from './img/check.svg';
import checkCompleteImg from './img/check-complete.svg';
class TodoItem extends Component {

    render() {
        const { item, onClick } = this.props;
        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }
        return ( 
            <div className = {
                classNames('TodoItem ', {
                    'TodoItem-complete': item.isComplete
                })
            } >
            <img onClick = { onClick }
            src = { url }
            width = { 32 }
            height = { 32 }/> 
            <p> { this.props.item.title } </p> 
            </div>
        )
    }
}
TodoItem.propTypes  = {
    // cách1
    // item :PropTypes.object ,
    // cách2
     item :PropTypes.shape({     //shape là xem hình dạng của item này ra sao  , xem các xét các thuộc tính bên trong object
        isComplete : PropTypes.bool.isRequired ,   // isRequired là báo người dùng phải nhập giá trị này , cần thiết ko để trống
        title : PropTypes.string.isRequired
    }) ,
    onClick : PropTypes.func 

};
export default TodoItem;