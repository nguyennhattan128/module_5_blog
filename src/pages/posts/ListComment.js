

export default function ListComment(){
    return(
        <>
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
        </>
    )
}