import {Link} from "react-router-dom";

const PRODUCT_LIST = [
    {id: 'p1', title: 'Product 1', description: 'This is product 1', price: 9.99},
    {id: 'p2', title: 'Product 2', description: 'This is product 2', price: 9.99},
    {id: 'p3', title: 'Product 3', description: 'This is product 3', price: 9.99},
];

const Product = () => {
    return (
        <div>
            <h1>Product</h1>
            <ul>
                {PRODUCT_LIST.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                        {/* if use relative path, Link should be like this:*/}
                        {/* <Link to={product.id} relative="path">{product.title}</Link>*/}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Product