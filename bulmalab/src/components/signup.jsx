import React, { Component } from 'react';
import FormField from './formField';

class SignUp extends Component {

    render() {

        return (
            <div>
                <FormField
                    label={this.props.label.name}
                    placeholder={this.props.placeholder.name}
                />
                <FormField
                    label={this.props.label.email}
                    placeholder={this.props.placeholder.email}
                />
                <FormField
                    label={this.props.label.password}
                    placeholder={this.props.placeholder.password}
                />

                <button className="button is-small is-success"> Button2 </button>

            </div>
        );
    }
}

export default SignUp;