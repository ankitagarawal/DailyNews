import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=45325fcc718442fa9fc6b0689ee7e325&page=${page}&pageSize=${props.pageSize}`;
        // setLoading({ loading: true });
        setLoading(true)
        let data = await fetch(url);

        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);

        //  this.setstate ki jagah

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false)
        props.setProgress(100);
    }

    //  componentdidmount ki jagah useeffect

    useEffect(() => {
        updateNews();
    }, [])

    //   top par move krne k liye function

    const scrollTo = () => {
        window.scrollTo(0, 0)
    }


    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=45325fcc718442fa9fc6b0689ee7e325&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);

    };


    return (
        <>
            <h2 className="text-center " style={{ margin: '35px 0px', marginTop: "90px" }}>DailyNews - Top {props.category} Headlines  </h2>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row" >
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} author={element.author ? element.author : " Unknown"} date={element.publishedAt ? element.publishedAt : " Unknown"} imageUrl={element.urlToImage} url={element.url} />
                            </div>
                        })}
                    </div>

                    {/* top par move krne k liye button */}

                    <div className="container d-flex justify-content-end">
                        <button type="button" className="btn btn-primary" onClick={scrollTo}>Move Top</button>
                    </div>

                </div>
            </InfiniteScroll>

        </>
    )
}


News.defaultProps = {
    country: 'in',
    pagesize: 9,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News
