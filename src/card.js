import "./card.css"
const Card = ({ post }) => {
    return (
        <>
            <section className="card">
                <section className="card-header">
                    <div>
                        <div className="card-header_name">{post.name}</div>
                        <div className="card-header_location">{post.location}</div>
                    </div>
                    <span>
                        {/* <i className="fa fa-ellipsis-h" aria-hidden="true"></i> */}
                        <img src={require("./images/more_icon.png")} alt="heart"></img>
                    </span>
                </section>
                <section className="card-images">
                    <img src={require("" + post.PostImage)} alt="place" />
                </section>
                <section className="card-actions">
                    <span>
                        {/* <i className="fa fa-heart" aria-hidden="true"></i> */}
                        <img src={require("./images/heart.png")} alt="heart"></img>
                    </span>
                    <span>
                        {/* <i className="fa fa-paper-plane-o" aria-hidden="true"></i> */}
                        <img src={require("./images/share.png")} alt="heart"></img>
                    </span>
                    <span>
                        {post.date}
                    </span>
                </section>
                <section className="likes">
                    {post.likes} likes
                </section>
                <section className="discription">
                    {post.description}
                </section>
            </section>
        </>
    )
}
export default Card;