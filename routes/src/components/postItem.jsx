import { useParams, useLocation } from "react-router";

const PostItem = () => {

    let params = useParams();
    let location = useLocation();

    console.log("Post ID:", params.postId);
    console.log("Location:", location);


    return(
        <>
            <h1>Post ID {params.postId}</h1>
        </>
    );
}

export default PostItem;