import React from 'react'

class Form extends React.Component {
    static defaultProps = {
        value: "",
        onChange: () => {
        }
    };

    onChange = e => {
        this.props.onChange(e.target.value.substring(e.target.value.length - 1));
    };

    render() {
        return (
            <div className="input-form">
                <input autoFocus={true} type="text" onChange={this.onChange} value={this.props.value}/>
            </div>
        )
    }
}

export default Form;