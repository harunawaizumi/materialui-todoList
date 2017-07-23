// external dependencies
import React, { Component } from 'react';
import {ListItem} from "material-ui/List/index";


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
    	console.log(this.props.data)
        return (
			<div>
				<ListItem // そのデータを読み込んで、そのtextを代入する
					primaryText={this.props.data2.getHours()}
					secondaryText={this.props.data2.getMinutes()}
				/>
			</div>
        );
    }
}


export default Todo;