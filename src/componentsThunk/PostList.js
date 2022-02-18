import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/indexThunk";

function Postlist ({fetchPost}) {

    /* eslint-disable */
    useEffect(() => {
        fetchPost()
    },[])

    return <div>Post List</div>
}

export default connect(null, {fetchPost})(Postlist)