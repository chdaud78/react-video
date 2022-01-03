import {useState, useEffect} from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    console.log("I run all the time");
    const iRunOnlyOnce = () => {
        console.log("I run only once");
    }
    useEffect(iRunOnlyOnce, []);
    useEffect(() => {
        if (keyword !== "" && keyword.length > 0) {
            console.log("SEARCH FOR", keyword);
        }
    }, [keyword]);

    useEffect(() => {
        console.log("COUNTER IS", counter);
    }, [counter]);

    useEffect(() => {
        console.log("Double change");
    }, [counter, keyword]);

    const btFn =() => {
        console.log("by");
    }

    const hiFn = () => {
        console.log("created");
        return btFn;
    }

    useEffect(hiFn, []);

    return (
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
            <h1>{counter}</h1>
            <button onClick={onClick}>Click</button>
        </div>
    );
}

export default App;
