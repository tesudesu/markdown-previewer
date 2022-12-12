import React from 'react';
import ReactDOM from 'react-dom/client';
import { marked } from 'marked';
import './index.css';

let initialState = `# Preview Your Markdown Syntax
## See changes live
Here are **some** of the ways you can *style* your text.

Want inspiration?
Here is an indented quote:
> A journey of a thousand miles begins with a single step. -- Lao Tzu

Here's how to do \`inline\` quotes.

And block quotes:

\`\`\`
let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += i;
}
\`\`\`

You can create a list.

- Apples
- Bananas
- Pears

### [Here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) is a resource to learn more about the markdown syntax.

`;


class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialState
    };
    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);
    this.reset = this.reset.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  } 
  clear() {
    this.setState({
      input: ""
    });
  }
  reset() {
    this.setState({
      input: initialState
    });
  }

  render() {
    return (
      <div className = "App">
        <div className = 'header'>
          Markdown Previewer
        </div>
        <div className = 'button-div'>
          <button className = 'button' onClick = {this.clear}>Clear</button>
          <button className = 'button' onClick = {this.reset}>Reset</button>
        </div>
        <div className = 'container'>
          <textarea className = 'editor' value = {this.state.input} onChange = {this.handleChange}>
          </textarea>
          <div className = 'previewer' dangerouslySetInnerHTML = {{__html: marked(this.state.input, {breaks: true})}}>
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Markdown />);