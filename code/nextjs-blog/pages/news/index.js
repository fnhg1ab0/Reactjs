import Link from "next/link";

const NewsPage = () => {
    return (
        <>
            <h1>The News Page</h1>;
            <ul>
                <li><Link href='news/p1'>P1</Link></li>
                <li><Link href='news/p2'>P2</Link></li>
            </ul>
        </>
    );
}

export default NewsPage;