import React from 'react';
import Form from './form/index';
import Header from './header/index';
import SourceBody from './source/index';
import Generator from './generator/index';
import './app.css'

export default class App extends React.Component {
    state = {
        sourceText: "",
        typedText: "",
        symbolsPerMinute: 0,
        bestPerMinute: 0,
        timeouts: [],
        completed: false
    };

    onChange = sym => {
        let typed = this.state.typedText + sym,
            count = this.state.symbolsPerMinute + 1,
            timeouts = this.state.timeouts,
            bestPerMinute = this.state.bestPerMinute;
        if (this.state.sourceText.indexOf(typed) === 0) {
            timeouts.push(setTimeout(() => {
                let count = this.state.symbolsPerMinute - 1;
                this.setState({symbolsPerMinute: count});
            }, 60000));
            let newState = {
                typedText: typed,
                symbolsPerMinute: count,
                timeouts: timeouts
            };
            if (bestPerMinute < count) {
                newState.bestPerMinute = count;
            }
            this.setState(newState);
            if (this.state.sourceText.length === newState.typedText.length) {
                this.setState({completed: true});
            }
            return sym;
        }
        return "";
    };

    reset = () => {
        this.state.timeouts.forEach(t => {
            clearTimeout(t)
        });
        this.setState({
            sourceText: '',
            typedText: '',
            symbolsPerMinute: 0,
            bestPerMinute: 0,
            timeouts: [],
            completed: false
        });
    };

    render() {
        let emptySource = !this.state.sourceText;
        return (
            <div>
                <Header reset={this.reset} perMinute={this.state.symbolsPerMinute}
                        bestPerMinute={this.state.bestPerMinute}/>
                {emptySource && <Generator onGenerate={val => this.setState({sourceText: val})}/>}
                {!emptySource &&
                !this.state.completed
                && <div>
                    <SourceBody typed={this.state.typedText} source={this.state.sourceText}/>
                    <Form onChange={this.onChange} value={this.state.typedText}/>
                </div>
                }
                {this.state.completed && <div className="success">Exercise completed!</div>}
            </div>
        )
    }
}