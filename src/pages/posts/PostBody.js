import AddComment from "./AddComment";
import ListComment from "./ListComment";

export default function PostBody(){
    return(
        <>
            <div className="card-body">
                <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                {/* Card img */}
                <img className="card-img" src="assets/images/post/3by2/01.jpg" alt="List" />
                {/* Feed react START */}
                <ul className="nav nav-stack py-3 small">nav
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
                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i className="bi bi-envelope fa-fw pe-2" />Send via Direct Message</a></li>
                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i className="bi bi-bookmark-check fa-fw pe-2" />Bookmark </a></li>
                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i className="bi bi-link fa-fw pe-2" />Copy link to post</a></li>
                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i className="bi bi-share fa-fw pe-2" />Share post via …</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="my-blog/src/components#"> <i className="bi bi-pencil-square fa-fw pe-2" />Share to News Feed</a></li>
                        </ul>
                    </li>
                    {/* Card share action END */}
                </ul>
                {/* Feed react END */}
                {/* Add comment */}
                <AddComment/>
                {/* Comment wrap START */}
                <ListComment/>
                {/* Comment wrap END */}
            </div>
        </>
    )
}