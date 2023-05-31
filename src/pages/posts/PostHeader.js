import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllPost} from "../../service/postService";

export default function PostHeader(){
    const dispatch = useDispatch();
    const posts = useSelector(({posts}) => {
        return posts;
    })

    const listPost = posts.list
    console.log(listPost)

    useEffect(() => {
        dispatch(getAllPost());
    }, [])


    return(
        <>
            <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        {/* Avatar */}
                        <div className="avatar avatar-story me-2">
                            <a href="my-blog/src/components#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </a>
                        </div>
                        {/* Info */}
                        <div>
                            <div className="nav nav-divider">
                                <h6 className="nav-item card-title mb-0"> <a href="my-blog/src/components#!"> Lori Ferguson </a></h6>
                                <span className="nav-item small"> 2hr</span>
                            </div>
                        </div>
                    </div>
                    {/* Card feed action dropdown START */}
                    <div className="dropdown">
                        <a href="my-blog/src/components#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-three-dots" />
                        </a>
                        {/* Card feed action dropdown menu */}
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i className="bi bi-person-x fa-fw pe-2" />Make friend </a></li>
                            <li><a className="dropdown-item" href="" data-bs-toggle="modal" data-bs-target="#feedActionPhoto"> <i className="bi bi-bookmark fa-fw pe-2" />Update post</a></li>
                            <li><a className="dropdown-item" > <i className="bi bi-x-circle fa-fw pe-2" />Delete</a></li>

                        </ul>
                    </div>
                    {/* Card feed action dropdown END */}
                </div>
            </div>
        </>
    )
}