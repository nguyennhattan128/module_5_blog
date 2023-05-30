import {useSelector} from "react-redux";
import { Button } from 'antd';


export default function List (){

    return(
        <>
            <div className="col-md-8 col-lg-6 vstack gap-4"style={{marginTop:'85px'}}>
                <div className="card card-body">
                    <Button type="primary" block >
                        <a  data-bs-toggle="modal" data-bs-target="#feedActionPhoto">Đăng bài viết</a>
                    </Button>

                </div>
                {/* Share feed END */}
                {/* Card feed item START */}
                <div className="card">
                    {/* Card header START */}
                    <div className="card-header border-0 pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                {/* Avatar */}
                                <div className="avatar avatar-story me-2">
                                    <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" /> </a>
                                </div>
                                {/* Info */}
                                <div>
                                    <div className="nav nav-divider">
                                        <h6 className="nav-item card-title mb-0"> <a href="#!"> Lori Ferguson </a></h6>
                                        <span className="nav-item small"> 2hr</span>
                                    </div>
                                    <p className="mb-0 small">Web Developer at Webestica</p>
                                </div>
                            </div>
                            {/* Card feed action dropdown START */}
                            <div className="dropdown">
                                <a href="#" className="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-three-dots" />
                                </a>
                                {/* Card feed action dropdown menu */}
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction">
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark fa-fw pe-2" />Save post</a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-person-x fa-fw pe-2" />Unfollow lori ferguson </a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-x-circle fa-fw pe-2" />Hide post</a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-slash-circle fa-fw pe-2" />Block</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-flag fa-fw pe-2" />Report post</a></li>
                                </ul>
                            </div>
                            {/* Card feed action dropdown END */}
                        </div>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className="card-body">
                        <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        {/* Card img */}
                        <img className="card-img" src="assets/images/post/3by2/01.jpg" alt="List" />
                        {/* Feed react START */}
                        <ul className="nav nav-stack py-3 small">
                            <li className="nav-item">
                                <a className="nav-link active" href="#!"> <i className="bi bi-hand-thumbs-up-fill pe-1" />Liked (56)</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!"> <i className="bi bi-chat-fill pe-1" />Comments (12)</a>
                            </li>
                            {/* Card share action START */}
                            <li className="nav-item dropdown ms-sm-auto">
                                <a className="nav-link mb-0" href="#" id="cardShareAction" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-reply-fill flip-horizontal ps-1" />Share (3)
                                </a>
                                {/* Card share action dropdown menu */}
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction">
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                                </ul>
                            </li>
                            {/* Card share action END */}
                        </ul>
                        {/* Feed react END */}
                        {/* Add comment */}
                        <div className="d-flex mb-3">
                            {/* Avatar */}
                            <div className="avatar avatar-xs me-2">
                                <a href="#!"> <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" /> </a>
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
                    {/* Card body END */}
                    {/* Card footer START */}
                    <div className="card-footer border-0 pt-0">
                        {/* Load more comments */}
                        <a href="#!" role="button" className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                            <div className="spinner-dots me-2">
                                <span className="spinner-dot" />
                                <span className="spinner-dot" />
                                <span className="spinner-dot" />
                            </div>
                            Load more comments
                        </a>
                    </div>
                    {/* Card footer END */}
                </div>
                {/* Card feed item END */}
                {/* Load more button START */}
                <a href="#!" role="button" className="btn btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
                    <span className="load-text"> Load more </span>
                    <div className="load-icon">
                        <div className="spinner-grow spinner-grow-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </a>
                {/* Load more button END */}
            </div>
            {/* Modal create Feed photo START */}
            <div className="modal fade" id="feedActionPhoto" tabIndex={-1} aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Modal feed header START */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        {/* Modal feed header END */}
                        {/* Modal feed body START */}
                        <div className="modal-body">
                            {/* Add Feed */}
                            <div className="d-flex mb-3">
                                {/* Avatar */}
                                <div className="avatar avatar-xs me-2">
                                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                                </div>
                                {/* Feed box  */}
                                <form className="w-100">
                                    <textarea className="form-control pe-4 fs-3 lh-1 border-0" rows={2} placeholder="Share your thoughts..." defaultValue={""} />
                                </form>
                            </div>
                            {/* Dropzone photo START */}
                            <div>
                                <label className="form-label">Upload attachment</label>
                                <div className="dropzone dropzone-default card shadow-none" data-dropzone="{&quot;maxFiles&quot;:2}">
                                    <div className="dz-message">
                                        <i className="bi bi-images display-3" />
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
                            <button type="button" className="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success-soft">List</button>
                        </div>
                        {/* Modal feed footer */}
                    </div>
                </div>
            </div>
            {/* Modal create Feed photo END */}


        </>
    )
}