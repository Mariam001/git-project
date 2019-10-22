import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            text: ""
        }

    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
      
    }

    handleChange(e){
        this.setState({text: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();

        if(this.state.text.length === 0) return;

        this.setState(state => ({ 
            list: state.list.concat([state.text]),
            text: '' 
        }) 
        )
    }

    render(){
        return (
            <div>
                <h1>Work this</h1>
                <TodoItem list={this.state.list} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="lab">Adding new work</label><br></br>
                    <input id="lab" onChange={this.handleChange} value={this.state.text} />
                    <button>Add #{this.state.list.length + 1}</button>
                </form>
            </div>
        )
    }
}

class TodoItem extends React.Component {
    render(){
        return (
            <ul>
                {
                    this.props.list.map(value => (<li>
                        {value.slice(0,1).toUpperCase() + value.slice(1)}
                    </li>))
                }
            </ul>
        )
    }
}



ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
);