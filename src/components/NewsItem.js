import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, url, author, date } = props;

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className='my-3'>

            <div className="card mx-3">
                <img style={{ height: "220px", borderRadius: "10px" }} src={imageUrl ? imageUrl : "https://www.ndtv.com/education/cache-static/media/presets/625X400/article_images/2020/10/12/exam-centre.webp"} className="card-img-top" alt="..." />
                <div style={{ height: "285px", backgroundColor: "rgb(214,239,224)" }} className="card-body">
                    <h5 className="card-title">{truncate(title, 60)}</h5>

                    <p className="card-text"> {truncate(description, 150)}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={url} target="_blank" className="btn btn-sm btn-success">Read More</a>
                </div>

            </div>
        </div>
    )
}



export default NewsItem
