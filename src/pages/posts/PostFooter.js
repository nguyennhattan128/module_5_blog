

export default function PostFooter(){
    return(
        <>
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
        </>
    )
}