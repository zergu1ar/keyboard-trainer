import React from 'react';
import generateText from '../../generator/index';

class Generator extends React.Component {
    static defaultProps = {
        onGenerate: val => {

        }
    };
    state = {
        count: 50,
    };

    generate = () => {
        this.props.onGenerate(generateText(this.state.count));
    };

    handleFile = evt => {
        let files = evt.target.files; // FileList object
        for (let i = 0, f; f = files[i]; i++) {
            if (f.type !== "text/plain") {
                continue;
            }
            let reader = new FileReader();
            reader.onload = (() => {
                return e => {
                    try {
                        this.props.onGenerate(
                            atob(e.target.result.replace("data:text/plain;base64,", "", 1))
                                .replace(/\n/g, ' ')
                                .replace(/\s+/g, ' ')
                        );
                    } catch (e) {
                        console.log(e);
                    }
                };
            })(f);
            reader.readAsDataURL(f);
        }
    };

    render() {
        return <div className="generator-block">
            <label>
                Count words:&nbsp;
                <input
                    type="number"
                    onChange={e => this.setState({count: e.target.value})}
                    value={this.state.count}
                />&nbsp;
            </label>
            <button onClick={this.generate}>Generate text</button>
            <span>&nbsp; OR select text/plain file from local machine</span>
            <input type="file" onChange={this.handleFile}/>
        </div>
    }
}

export default Generator;