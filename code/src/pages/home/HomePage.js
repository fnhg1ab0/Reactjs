import {Link, useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>Forward to <Link to="/products">Product Page.</Link></p>
            <button onClick={handleClick}>Navigate</button>
        </div>
    )
}
export default HomePage