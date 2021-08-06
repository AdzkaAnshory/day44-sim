import React, { Component } from 'react';
import Inputt from '../inputt';



class RowInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { placeholder, nameInput, typeInput, valueInput, onChangeEvent } = this.props
        return (
            <div className="login-form">
                <Inputt
                    placeholder={placeholder}
                    name={nameInput}
                    type={typeInput ? typeInput : "text"}
                    value={valueInput}
                    onChange={onChangeEvent}
                    required
                />
            </div>
        );
    }
}

export default RowInput;