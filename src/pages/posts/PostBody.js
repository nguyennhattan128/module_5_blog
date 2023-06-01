import AddComment from "./AddComment";
import ListComment from "./ListComment";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllPost} from "../../service/postService";
import {getUser} from "../../service/userService";

export default function PostBody(){
    console.log('da vao PostBody')
        const dispatch = useDispatch();
        const posts = useSelector(({posts}) => {
            return posts;
        })

        const listPost = posts.list

    useEffect(() => {
        dispatch(getAllPost());
    }, []);

    return(
        <>
            {listPost?  listPost.map(item=>(
            <div className="card-body">
                <p>{item.content}</p>
                {/* Card img */}
                {item.image.map(image =>
                    <div className="image-grid">
                    <img className="card-img" src={image.imageURL} alt="List" />
                    </div>
                        )}

                {/* Feed react START */}
                <ul className="nav nav-stack py-3 small">
                    <li className="nav-item">
                        <a className="nav-link active" href="my-blog/src/components#!"> <i className="bi bi-hand-thumbs-up-fill pe-1" />Liked (56)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="my-blog/src/components#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                    </li>
                    {/* Card share action START */}
                    <li className="nav-item dropdown ms-sm-auto">
                        <a className="nav-link mb-0" href="my-blog/src/components#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                        </a>
                        {/* Card share action dropdown menu */}
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                        </ul>
                    </li>
                    {/* Card share action END */}
                </ul>
                {/* Feed react END */}
                {/* Add comment */}
                <AddComment/>
                {/* Comment wrap START */}
                <ul className="comment-wrap list-unstyled">
                    {/* Comment item START */}
                    <li className="comment-item">
                        <div className="d-flex position-relative">
                            {/* Avatar */}
                            <div className="avatar avatar-xs">
                                <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></a>
                            </div>
                            <div className="ms-2">
                                {/* Comment by */}
                                <div className="bg-light rounded-start-top-0 p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                                        <small className="ms-2">5hr</small>
                                    </div>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                </div>
                                {/* Comment react */}
                                <ul className="nav nav-divider py-2 small">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!"> Like (3)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!"> Reply</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!"> View 5 replies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Comment item nested START */}
                        <ul className="comment-item-nested list-unstyled">
                            {/* Comment item START */}
                            <li className="comment-item">
                                <div className="d-flex">
                                    {/* Avatar */}
                                    <div className="avatar avatar-xs">
                                        <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" /></a>
                                    </div>
                                    {/* Comment by */}
                                    <div className="ms-2">
                                        <div className="bg-light p-3 rounded">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-1"> <a href="#!"> Lori Stevens </a> </h6>
                                                <small className="ms-2">2hr</small>
                                            </div>
                                            <p className="small mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                        </div>
                                        {/* Comment react */}
                                        <ul className="nav nav-divider py-2 small">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!"> Like (5)</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!"> Reply</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* Comment item END */}
                            {/* Comment item START */}
                            <li className="comment-item">
                                <div className="d-flex">
                                    {/* Avatar */}
                                    <div className="avatar avatar-story avatar-xs">
                                        <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" /></a>
                                    </div>
                                    {/* Comment by */}
                                    <div className="ms-2">
                                        <div className="bg-light p-3 rounded">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-1"> <a href="#!"> Billy Vasquez </a> </h6>
                                                <small className="ms-2">15min</small>
                                            </div>
                                            <p className="small mb-0">Wishing calling is warrant settled was lucky.</p>
                                        </div>
                                        {/* Comment react */}
                                        <ul className="nav nav-divider py-2 small">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!"> Like</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!"> Reply</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* Comment item END */}
                        </ul>
                        {/* Load more replies */}
                        <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5" data-bs-toggle="button" aria-pressed="true">
                            <div className="spinner-dots me-2">
                                <span className="spinner-dot" />
                                <span className="spinner-dot" />
                                <span className="spinner-dot" />
                            </div>
                            Load more replies
                        </a>
                        {/* Comment item nested END */}
                    </li>
                    {/* Comment item END */}
                    {/* Comment item START */}
                    <li className="comment-item">
                        <div className="d-flex">
                            {/* Avatar */}
                            <div className="avatar avatar-xs">
                                <a href="#!"><img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" /></a>
                            </div>
                            {/* Comment by */}
                            <div className="ms-2">
                                <div className="bg-light p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1"> <a href="#!"> Frances Guerrero </a> </h6>
                                        <small className="ms-2">4min</small>
                                    </div>
                                    <p className="small mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                </div>
                                {/* Comment react */}
                                <ul className="nav nav-divider pt-2 small">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!"> Like (1)</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!"> Reply</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!"> View 6 replies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {/* Comment item END */}
                </ul>
                {/* Comment wrap END */}
            </div>
                ))
                :<>''</>}
        </>
    )
}