import {useDispatch, useSelector} from "react-redux";
import {Button} from 'antd';
import {useEffect, useState} from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import AddComment from "./AddComment";
import {getAllPost} from "../../service/postService";
import {getUser} from "../../service/userService";

export default function List() {


    const dispatch = useDispatch();
    const posts = useSelector(({posts}) => {
        return posts;
    })
    const idCurrentUser = useSelector(({users}) => {
        return users.currentUser.idUser;
    })
    const listPost = posts.list
    console.log(listPost)
    const userInfo = useSelector(({userInfo}) => {
        return userInfo.currentUser;
    })
    console.log(userInfo.currentUser)



    useEffect(() => {
        console.log("mounted")
        dispatch(getAllPost());
        if (idCurrentUser) {
            dispatch(getUser(idCurrentUser));
        }
    }, []);

    return (
        <>
            <div className="col-md-8 col-lg-6 vstack gap-4" style={{marginTop: '85px'}}>
                {/* Hiển thị form nhập thông tin bài post dòng 37 */}
                <div className="card card-body">
                    <Button type="primary" block>
                        <a data-bs-toggle="modal" data-bs-target="#feedActionPhoto">Đăng bài </a>
                    </Button>
                </div>
            {listPost ? listPost.map(item=>(

                <div className="card">
                    {/* Hiển thị cardHeader */}
                    <div className="card-header border-0 pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                {/* Avatar */}
                                <div className="avatar avatar-story me-2">
                                    <a href="my-blog/src/components#!"> <img className="avatar-img rounded-circle" src={item.author.image} alt="" /> </a>
                                </div>
                                {/* Info */}
                                <div>
                                    <div className="nav nav-divider">
                                        <h6 className="nav-item card-title mb-0"> <a href="my-blog/src/components#!"> Lori Ferguson </a></h6>
                                        <span className="nav-item small">{item.date_created.substring(0, 10)}</span>
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
                    {/* Hiển thị cardBody */}
                    <div className="card-body">
                        <p>{item.content}</p>
                        {/* Card img */}
                        {item.image.map(image =>
                            <div className="image-grid">
                                <img className="card-img" src={image.imageURL} alt="List" />
                            </div>
                        )}

                        {/* so like, so comment*/}
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
                        {/* Add comment */}
                        <div className="d-flex mb-3">
                            {/* Avatar */}
                            <div className="avatar avatar-xs me-2">
                                <a href="#!"> <img className="avatar-img rounded-circle" src={item.author.image} alt="" /> </a>
                            </div>
                            {/* Comment box  */}
                            <form className="w-100">
                                <textarea data-autoresize className="form-control pe-4 bg-light" rows={1} placeholder="Add a comment..." defaultValue={""} />
                            </form>
                        </div>
                        {/* Comment wrap START */}
                        <ul className="comment-wrap list-unstyled">
                            {/* Comment item START */}
                            <li className="comment-item">
                                {/* chay map Comment  */}
                                {}
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
                                    </div>
                                </div>
                                {/* Comment item nested START */}
                                {/* Comment item nested END */}
                            </li>
                            {/* Comment item END */}
                            {/* Comment item START */}

                            {/* Comment item END */}
                        </ul>
                        {/* Comment wrap END */}
                    </div>
                    {/* Hiển thị carfooter */}
                    <div className="card-footer border-0 pt-0">
                        {/* Load more comments */}
                        <a href="my-blog/src/components#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                            <div className="spinner-dots me-2">
                                <span className="spinner-dot" />
                                <span className="spinner-dot" />
                                <span className="spinner-dot" />
                            </div>
                            Load more comments
                        </a>
                    </div>
                </div>

                ))
                : <></>
            }
            </div>

            {/* Đã xoá phần loading.. */}
            {/*  form đăng bài */}
            <div className="modal fade" id="feedActionPhoto" tabIndex={-1} aria-labelledby="feedActionPhotoLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Modal feed header START */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        {/* Modal feed header END */}
                        {/* Modal feed body START */}
                        <div className="modal-body">
                            {/* Add Feed */}
                            <div className="d-flex mb-3">
                                {/* Avatar */}
                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg"
                                         alt=""/>
                                </div>
                                {/* Feed box  */}
                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={2}
                                              placeholder="Share your thoughts..." defaultValue={""}/>
                                </form>
                            </div>
                            {/* Dropzone photo START */}
                            <div>
                                <label className="form-label">Upload attachment</label>
                                <div className="dropzone dropzone-default card shadow-none"
                                     data-dropzone="{&quot;maxFiles&quot;:2}">
                                    <div className="dz-message">
                                        <i className="bi bi-images display-3"/>
                                        <p>Drag here or click to upload photo.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Dropzone photo END */}
                        </div>
                        {/* Modal feed body END */}
                        {/* Modal feed footer */}
                        <div className="modal-footer ">
                            {/* Button */}
                            <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel
                            </button>
                            <button type="button" className="btn btn-success-soft">List</button>
                        </div>
                        {/* Modal feed footer */}
                    </div>
                </div>
            </div>
        </>
    )
}