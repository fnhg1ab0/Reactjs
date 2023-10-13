import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Forward to <Link to="/product">Product Page.</Link></p>
        </div>
    )
}
export default HomePage