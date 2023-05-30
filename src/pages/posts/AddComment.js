

export default function AddComment(){
    return(
        <>
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
        </>
    )
}