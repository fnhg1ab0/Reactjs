import {useState} from "react";

const Greeting = () => {
    const [text, setText] = useState(false);

    const handleChange = () => {
        setText(!text)
    }

    return (
        <>
            <h1>Hello World!</h1>
            {text && <p>It's good to see you!</p>}
            {!text && <p>Awesome</p>}
            <button onClick={handleChange}>Change Text!</button>
        </>
    );
}
export default Greeting;