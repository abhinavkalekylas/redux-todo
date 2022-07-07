import "./App.css";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//importing components

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Container fluid>
        <TodoForm />
        <Todo />
      </Container>
    </Provider>
  );
};

export default App;
