import React, { useState } from "react";

import { FormGroup, Input, Button, Form, InputGroup } from "reactstrap";

import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") alert("Enter todo");

    //model
    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);

    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            className="inputtodo"
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button className="btn" color="primary" onClick={handleSubmit}>
            ADD
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
