import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './components/img/tick.svg';

class App extends Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
            todoItem: [
                { title: 'mua bánh bao', isComplete: true },
                { title: 'mua bim bim', isComplete: true },
                { title: 'mua mỳ tôm', isComplete: false }
            ]
        }
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onItemClicked(item) {
        return (event) => {
            const isComplete = item.isComplete;
            const { todoItem } = this.state;
            const index = todoItem.indexOf(item);
            this.setState({
                todoItem: [
                    ...todoItem.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItem.slice(index + 1)
                ]
            });
        };
    }
    onKeyUp(event) {
        // console.log(event.target.value)
        let text = event.target.value; //bắt được sự kiện sau khi họ bấn enter
        if (event.keyCode === 13) { //enter key cuối
            if (!text) {
                return;
            }
            text = text.trim(); // cắt khoảng trắng hai bên ko người ta nhập có khoảng trắng
            if (!text) { // nếu người ta chưa nhập giá trị
                return;
            }
            this.setState({
                newItem: '',
                todoItem: [{
                        title: text,
                        isComplete: false
                    },
                    ...this.state.todoItem,

                ]
            });
        }
    }
    onChange(event) {
        this.setState({
            newItem: event.target.value
        });
    }
    render() {
        const { todoItem, newItem } = this.state;
        if (todoItem.length) {
            return ( 
                <div className = "App" >
                    <div class = "header" >
                    <img src = { tick }
                    width = { 32 }
                    height = { 32 }/>  
                    <input type = "text"
                    value = { newItem }
                    onChange = { this.onChange }
                    placeholder = "nhấn để tìm kiếm "
                    onKeyUp = { this.onKeyUp }
                    /> 
                    </div> {
                    todoItem.length && todoItem.map((item, index) =>
                        <TodoItem key = { index }
                        item = { item }
                        onClick = { this.onItemClicked(item) }
                        />
                    )
                } 
                </div>
        );
    } else {
        return ( 
            <div className = "App" > ko tim thay </div>
        );
    }

}
}

export default App;