import {useState, useEffect} from "react";

function Hello() {
    /*const byFn =() => {
        console.log("by");
    }

    const hiFn = () => {
        console.log("created");
        return byFn;
    }

    useEffect(hiFn, []);*/

    useEffect(() => {
        console.log("hi");
        return () => console.log("by");
    }, []);

    /*useEffect(function () {
        console.log("hi");
        return function() {
            console.log("by");
        }
    },[])*/

    return <h1>Hello</h1>;

}

function App() {
    const [showing, setShowing] = useState(false);

    const onClick = () => setShowing((prev) => !prev)

    return (
        <div>
            {showing? <Hello /> : null}
            <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
        </div>
    );
}

export default App;
