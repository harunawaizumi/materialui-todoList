// external dependencies
import React, { Component } from 'react';
import {RaisedButton, TimePicker} from "material-ui"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import DropDown from './DropDown'
injectTapEventPlugin()



class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '',
            value2:null,
            todos: []
        }
        this.valueDayChange = this.valueDayChange.bind(this)
        this.valueTimeChange = this.valueTimeChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd () {
        const newTodo = {
            id: generateUUID(),
            text1: this.state.value1,
            text2: this.state.value2
        }
        this.props.onTodoAdded(newTodo);
        this.setState({
            value1: '',
            value2: null
        })
        console.log("This is new todo" + newTodo)
    }

    valueDayChange (e, values) {
        this.setState({
            value1: values
        })
    }

    valueTimeChange (e, date) {
        this.setState({
            value2: date
        })
    }



    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <DropDown
                        hintText="Hint Text"
                        ref='tf'
                        value={this.state.value1}
                        onChange={this.state.valueDayChange}
                    />
                    <TimePicker
                        name='time'
                        hintText='10:00'
                        onChange={this.valueTimeChange}
                        value={this.state.value2}
                        fullWidth />
                    <RaisedButton label="Default" onTouchTap={this.handleAdd}/>
                </div>
            </MuiThemeProvider>
        );
    }

}

function generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c==='x' ? r : (r&(0x3|0x8))).toString(16);
    });
    return uuid;
};


AddTodo.propTypes = {
    onTodoAdded: React.PropTypes.func,
    onChangeFirst: React.PropTypes.func,

    value: React.PropTypes.string,
};


export default AddTodo;