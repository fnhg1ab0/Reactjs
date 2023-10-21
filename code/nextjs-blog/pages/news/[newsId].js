import {useRouter} from "next/router";

const NewDetail = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    return (
        <>
            <h1>The News Detail Page</h1>
            <p>{newsId}</p>
        </>
    );
}

export default NewDetail;