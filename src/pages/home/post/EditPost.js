import {Field, Form, Formik} from "formik";
import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editPost, findPostById, getAllPost} from "../../../service/postService";
import FileEdit from "../../../components/FileEdit";

export function Edit() {
    let {id} = useParams();
    let dispatch = useDispatch();
    let navigate = useNavigate();
    const post = useSelector(({posts}) => {
        return posts.list;
    });
    console.log("post:", post)

    useEffect(() => {
        console.log('da vao useeffect')
        dispatch(findPostById(id))
        console.log('da vao useEffect:', post)
    }, [])

    return <>
        {post?
            (

                        <div className="d-flex mb-3">
                            {/* Avatar */}
                            <div className="avatar avatar-xs me-2">
                                <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg"
                                     alt=""/>
                            </div>

                            {/* Form đăng nhập  */}
                            {
                                <Formik
                                    initialValues={post}
                                    onSubmit={(values) => {
                                        const formData = new FormData();
                                        formData.append("content", values.content);
                                        formData.append("status", values.status);
                                        formData.append("category", values.category);
                                        formData.append("image", values.image[0]);
                                        dispatch(editPost({
                                            id: id,
                                            post: formData
                                        })).then(()=> {
                                            dispatch(getAllPost())
                                                .then(data => navigate('/home'))

                                        })
                                    }}
                                    enableReinitialize={true}
                                >
                                    <Form className="w-100">
                                        <div id="flex-row" style={{
                                            display: "flex",
                                            flexDirection: "row"
                                        }}>
                                            {/* Select Option */}
                                            <div className="col-sm-6 col-lg-4">
                                                <Field as="select"  className="form-select js-choice" name="status" defaultValue={post.status} style={{
                                                    width: '101px',
                                                    height: '36px'
                                                }}>
                                                    <option value="public">Public</option>
                                                    <option value="private">Private</option>
                                                </Field>

                                            </div>
                                            <div className="col-sm-6 col-lg-4">
                                                <Field as="select"  className="form-select js-choice" name="category" defaultValue={post.category} style={{
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
                                               placeholder="Share your thoughts..." defaultValue={post.content}
                                               name="content"/>

                                        <div style={{marginRight: '30px'}}>
                                            <FileEdit image={post.image}/>
                                        </div>
                                        <div className="modal-footer ">
                                            <button type="submit" className="btn btn-success-soft">Post now
                                            </button>
                                        </div>
                                    </Form>
                                </Formik>
                            }
                        </div>

            )
            : <></>}

    </>
}