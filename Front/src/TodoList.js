import React from "react";
import { CounterContext } from "./context/Counter.context";

function TodoList() {
    const { counter } = React.useContext(CounterContext);
    return <h1>{counter}</h1>;
}
export default TodoList;

// class TodoList extends React.Component {
//     state = {
//         counter: 0,
//     };

//     render() {
//         return (
//             <h1
//                 onClick={() => {
//                     console.log("test");
//                     this.setState({ counter: this.state.counter + 1 });
//                 }}
//             >
//                 <AnotherComponent counter={this.state.counter}></AnotherComponent>
//                 {this.state.counter}
//             </h1>
//         );
//     }
// }

// export default TodoList;

// class AnotherComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.setState = {
//             name: "bob",
//         };
//     }
//     render() {
//         const { counter } = this.props;
//         return <h1>Hey {counter}</h1>;
//     }
// }
