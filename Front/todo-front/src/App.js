import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import { CounterContext } from "./context/Counter.context";

function App() {
  const { counter, increment, decrement } = React.useContext(CounterContext);
  const [todo, setTodo] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("");
  const [errors, setErrors] = React.useState("");

  const fetchData = React.useCallback(() => {
    fetch("/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data.result);
        setLoading(false);
      });
  });
  React.useEffect(() => {
    fetchData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("/todo", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ title: name }),
    })
      .then(() => {
        setName("");
        fetchData();
      })
      .catch((err) => setErrors(err));
  }
  return loading ? (
    <h1>Loading...</h1>
  ) : (
      <div className="App">
        {/* <TodoList /> */}
        <h1>Welcome to the todolist creator ! </h1>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            placeholder="name of your todo"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <button type="submit">Send</button>
        </form>

        {todo.map((t) => {
          return <h1 key={t._id}>{t.title}</h1>;
        })}


      </div>
    );
}

export default App;
