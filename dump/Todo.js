import {useState} from "react";

function App() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(todo === "") {
            return;
        }
        setTodo("");
        setTodoList((currentArray) => [todo, ...currentArray]);
    }

    return (
        <div>
            <h1>My Todos ({todoList.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={todo}
                    onChange={onChange}
                    type="text"
                    placeholder="write your to do..." />
                <button>Add To Do</button>
            </form>
            <hr/>
            {todoList.map((item, idx) => <li key={idx}>{item}</li>)}
        </div>
    );
}

export default App;
