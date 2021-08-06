import React, { Component } from 'react';
import "./input.css"


class Inputt extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { placeholder, name, type, value, onChange } = this.props
        return (
            <input
                className=""
                placeholder={placeholder}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        );
    }
}

export default Inputt;