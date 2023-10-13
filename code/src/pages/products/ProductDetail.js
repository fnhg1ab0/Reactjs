import {Link, useParams} from 'react-router-dom';

function ProductDetail() {
    const params = useParams();

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
            <p><Link to='..' relative="path">Back</Link></p>
            {/* if relative="path" is not specified, the link will be relative to the route path */}
            {/*// and the link will be redirected to parent route that defined in src/App.js*/}
        </>
    );
}

export default ProductDetail;