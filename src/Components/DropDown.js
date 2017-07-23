/**
 * Created by haruna on 7/21/17.
 */
import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export default class DropDown extends Component {
    state = {
        values: [],
    };

    handleChange = (event, index, values) => this.setState({values});

    menuItems(values) {
        return names.map((name) => (
            <MenuItem
                key={name}
                insetChildren={true}
                checked={values && values.indexOf(name) > -1}
                value={name}
                primaryText={name}
            />
        ));
    }

    render() {
        console.log("This is values " + this.state.values)
        const {values} = this.state;
        return (
            <SelectField
                multiple={true}
                hintText="Select a name"
                value={values}
                onChange={this.handleChange}
            >
                {this.menuItems(values)}
            </SelectField>
        );
    }
}