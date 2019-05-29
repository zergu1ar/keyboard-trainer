import React from 'react';

export default class Header extends React.Component {
    static defaultProps = {
        perMinute: 0,
        bestPerMinute: 0
    };

    render() {
        return <header>
            <h4>Keyboard trainer</h4>
            <div>
                Symbols per minute: {this.props.perMinute}
                <br/>
                Best results per minute: {this.props.bestPerMinute}
            </div>
            <div>
                <button onClick={this.props.reset}>Reset</button>
            </div>
        </header>
    }
}