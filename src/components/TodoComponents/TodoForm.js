import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
       
    };
}
handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

};

handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.item);
};

render() {
    return (
        <>
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text"
            value={this.state.item}
            name="item"
            placeholder="add todo"
            onChange={this.handleChange}
            />
            <button>Add todo</button>
        </form>
        </>
    );
}
}
export default TodoForm;