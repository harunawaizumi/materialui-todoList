// external dependencies
import React, { Component } from 'react';
import Todo from "./Todo";
import {List} from "material-ui/List/index";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <MuiThemeProvider>
              <List>
                  {this.props.list.map(function(num) {
                      console.log(num)
                    return (
                        <Todo
                            key={ num.id} 　
                            data1={ num.text1 }
                            data2={ num.text2 } // num をdataと呼びます。（これはchildrenに引き継がれる）
                        />
                    )
                  })}
              </List>
            </MuiThemeProvider>
        );
    }
}

TodoList.propTypes = {
    list: React.PropTypes.array,
    filter: React.PropTypes.string
}

export default TodoList;