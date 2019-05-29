import React from 'react';

export default class SourceBody extends React.Component {
    static defaultProps = {
        source: '',
        typed: ''
    };

    get formattedText() {
        return (
            <div className="source-block">
                <div className="source-block__left">
                    &lrm;{this.props.typed}&lrm;
                    <span> </span>
                </div>
                <div className="source-block__right">
                    <span>{this.props.source.substring(this.props.typed.length)[0]}</span>
                    {this.props.source.substring(this.props.typed.length + 1)}
                </div>
            </div>
        );
    }

    render() {
        return this.formattedText
    }
}