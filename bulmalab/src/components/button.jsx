import React, { Component } from 'react';
class Button extends Component {

    render() {

        return (
            <div>
                <button className="button is-rounded my-class is-danger is-small" > Button1 </button>
                <button className="button is-small is-success"> Button2 </button>
            </div>
        );
    }
}

export default Button;