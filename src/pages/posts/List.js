import {useDispatch, useSelector} from "react-redux";
import {Button} from 'antd';
import {useEffect, useRef, useState} from "react";
import {getAllPost} from "../../service/postService";
import {getUser} from "../../service/userService";
import {Field, Form, Formik} from 'formik';
import {useNavigate} from "react-router-dom";
import {addPost,deletePost} from "../../service/postService";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
} from "firebase/storage";
import {storage} from "../../firebase/storage";
import {v4} from "uuid";
import FileUpload from "../../components/FileUpload";

export default function List() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector(({posts}) => {
        console.log(posts)
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

    const submit = (Post) => {
        console.log('form data ow day:',Post.values())
        dispatch(addPost(Post)).then(() => {
            dispatch(getAllPost())
        });
    }



    const uploadFile = () => {
        if (imageUpload == null) return;
        console.log(1)
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        console.log(2)
        console.log(imageRef)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            console.log(3)
            getDownloadURL(snapshot.ref).then(async (url) => {
                setImageUrl(url)
            });
        })
            .catch(e => {
                console.log("upload:", e)
            });
    };


    useEffect(() => {
        console.log("mounted")
        dispatch(getAllPost());
        if (idCurrentUser) {
            dispatch(getUser(idCurrentUser))
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
                {listPost != undefined ? listPost.map(item => (

                        <div className="card">
                            {/* Hiển thị cardHeader */}
                            <div className="card-header border-0 pb-0">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        {/* Avatar */}
                                        <div className="avatar avatar-story me-2">
                                            <a href="my-blog/src/components#!"> <img
                                                className="avatar-img rounded-circle"
                                                src={item.author.image} alt=""/> </a>
                                        </div>
                                        {/* Info */}
                                        <div>
                                            <div className="nav nav-divider">
                                                <h6 className="nav-item card-title mb-0"><a
                                                    href="my-blog/src/components#!"> Lori Ferguson </a></h6>
                                                <span
                                                    className="nav-item small">{item.date_created.substring(0, 10)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card feed action dropdown START */}
                                    <div className="dropdown">
                                        <a href="my-blog/src/components#"
                                           className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                           id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots"/>
                                        </a>
                                        {/* Card feed action dropdown menu */}
                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="cardFeedAction">
                                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i
                                                className="bi bi-person-x fa-fw pe-2"/>Make friend </a></li>
                                            <li><a className="dropdown-item" href="" data-bs-toggle="modal"
                                                   data-bs-target="#feedActionPhoto"> <i
                                                className="bi bi-bookmark fa-fw pe-2"/>Update post</a></li>
                                            <li><a className="dropdown-item" onClick={()=>dispatch(deletePost(item.id))}> <i className="bi bi-x-circle fa-fw pe-2"/>Delete</a>
                                            </li>

                                        </ul>
                                    </div>
                                    {/* Card feed action dropdown END */}
                                </div>
                            </div>
                            {/* Hiển thị cardBody */}
                            <div className="card-body">
                                <p>{item.content}</p>
                                {/* Card img */}
                                {item.image && item.image.map(image =>
                                    <div className="image-grid">
                                        <img className="card-img" src={image.imageURL} alt="List"/>
                                    </div>
                                )}

                                {/* so like, so comment*/}
                                <ul className="nav nav-stack py-3 small">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="my-blog/src/components#!"> <i
                                            className="bi bi-hand-thumbs-up-fill pe-1"/>Liked ({item.like && item.like.length})</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="my-blog/src/components#!"> <i
                                            className="bi bi-chat-fill pe-1"/>Comments ({item.comments && item.comments.length})</a>
                                    </li>
                                    {/* Card share action START */}
                                    <li className="nav-item dropdown ms-sm-auto">
                                        <a className="nav-link mb-0" href="my-blog/src/components#" id="cardShareAction"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-reply-fill flip-horizontal ps-1"/>Share (3)
                                        </a>
                                        {/* Card share action dropdown menu */}
                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="cardShareAction">
                                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i
                                                className="bi bi-pencil-square fa-fw pe-2"/>Share to News Feed</a></li>
                                        </ul>
                                    </li>
                                    {/* Card share action END */}
                                </ul>
                                {/* Add comment */}
                                <div className="d-flex mb-3">
                                    {/* Avatar */}
                                    <div className="avatar avatar-xs me-2">
                                        <a href="#!"> <img className="avatar-img rounded-circle" src={userInfo.image}
                                                           alt=""/> </a>
                                    </div>
                                    {/* Comment box  */}
                                    <form className="w-100">
                                        <textarea data-autoresize className="form-control pe-4 bg-light" rows={1}
                                                  placeholder="Add a comment..." defaultValue={""}/>
                                    </form>
                                </div>
                                {/* Comment wrap START */}
                                <ul className="comment-wrap list-unstyled">
                                    {/* Comment item START */}
                                    {/* chay map Comment  */}
                                    {item.comments && item.comments.map(comment =>
                                        <li className="comment-item">
                                            <div className="d-flex position-relative">
                                                {/* Avatar */}
                                                <div className="avatar avatar-xs">
                                                    <a href="#!"><img className="avatar-img rounded-circle"
                                                                      src={comment.user.image} alt=""/></a>
                                                </div>
                                                <div className="ms-2" style={{width: '92%', marginBottom: '10px'}}>
                                                    {/* Comment by */}
                                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="mb-1"><a href="#!"> {comment.contents} </a>
                                                            </h6>
                                                            <small className="ms-2"></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>)}

                                    {/* Comment item END */}
                                </ul>
                                {/* Comment wrap END */}
                            </div>
                            {/* Hiển thị carfooter */}
                            <div className="card-footer border-0 pt-0">
                                {/* Load more comments */}
                                <a href="my-blog/src/components#!" role="button"
                                   className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                                   data-bs-toggle="button" aria-pressed="true">
                                    <div className="spinner-dots me-2">
                                        <span className="spinner-dot"/>
                                        <span className="spinner-dot"/>
                                        <span className="spinner-dot"/>
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

                                {/* Form đăng nhập  */}
                                {
                                    <Formik
                                        initialValues={{
                                            content: '',
                                            status: '',
                                            category: 1,
                                            image: []
                                        }}
                                        onSubmit={(values) => {
                                            const formData = new FormData();
                                            formData.append("content", values.content);
                                            formData.append("status", values.status);
                                            formData.append("category", values.category);
                                            formData.append("image", values.image[0]);

                                            submit(formData)
                                        }}
                                    >
                                        <Form className="w-100">
                                            <div id="flex-row" style={{
                                                display: "flex",
                                                flexDirection: "row"
                                            }}>
                                                {/* Select Option */}
                                                <div className="col-sm-6 col-lg-4">
                                                    <Field as="select"  className="form-select js-choice" name="status" style={{
                                                        width: '101px',
                                                        height: '36px'
                                                    }}>
                                                        <option value="public">Public</option>
                                                        <option value="private">Private</option>
                                                    </Field>

                                                </div>
                                                <div className="col-sm-6 col-lg-4">
                                                    <Field as="select"  className="form-select js-choice" name="category" style={{
                                                        width: '101px',
                                                        height: '36px',
                                                        marginLeft: '-37px'
                                                    }}>
                                                        <option value="PV">Cate</option>
                                                        <option value="1">Chinh tri</option>
                                                        <option value="2">Doi song</option>
                                                        <option value="3">Phap luat</option>
                                                        <option value="4">Tinh yeu</option>

                                                    </Field>
                                                </div>
                                            </div>

                                            <Field className="form-control pe-4 fs-3 lh-1 border-0" rows={2}
                                                      placeholder="Share your thoughts..." defaultValue={""}
                                                      name="content"/>

                                            <div style={{marginRight: '30px'}}>
                                                <FileUpload/>
                                            </div>
                                            <div className="modal-footer ">
                                                <button type="submit" className="btn btn-success-soft">Post now
                                                </button>
                                            </div>
                                        </Form>
                                    </Formik>
                                }
                            </div>
                            {/* Dropzone photo START */}

                            {/* Dropzone photo END */}
                        </div>
                        {/* Modal feed body END */}
                        {/* Modal feed footer */}

                        {/* Modal feed footer */}
                    </div>
                </div>
            </div>
        </>
    )

}