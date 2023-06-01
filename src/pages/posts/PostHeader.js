import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllPost} from "../../service/postService";
import userInfoReducer from "../../redux/users/userInforSlice";
import {getUser} from "../../service/userService";

export default function PostHeader(){
    console.log('1111111')
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
        return userInfo;
    })
    console.log(userInfo)



    useEffect(() => {
        console.log("mounted")
        dispatch(getAllPost());
        if (idCurrentUser) {
            dispatch(getUser(idCurrentUser));
        }
    }, []);


    return(
        <>
            {listPost ? listPost.map(item=>(
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
                ))
                : <></>
            }
        </>
    )
}