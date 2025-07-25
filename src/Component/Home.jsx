"use client"
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'

export default function Home({ q, language }) {
  let [page, setPage] = useState(1)
  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)



  async function getAPIData1() {
    setPage(1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&page=${1}&sortBy=publishedAt&apiKey=c5a68ec2a6bb440b8b1973c618b85b5b`)
    response = await response.json()

    if (response.status === "ok") {
      setArticles(response.articles)
      setTotalResults(response.totalResults)
    }
  }

  async function getAPIData2() {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&pageSize=24&page=${page}&sortBy=publishedAt&apiKey=c5a68ec2a6bb440b8b1973c618b85b5b`)
    response = await response.json()

    if (response.status === "ok") {
      setArticles(articles.concat(response.articles))
    }
  }

  useEffect(() => {
    getAPIData1()
  }, [q, language])
  return (
    <>
      <div className="container-fluid my-3">
        <h5 className="background text-light text-center p-2">{q} Articles</h5>
        <InfiniteScroll
          dataLength={articles?.length} //This is important field to render the next data
          next={getAPIData2}
          hasMore={articles?.length < totalResults}
          loader={
            <div className='my-3 text-center'>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {articles?.map((item, index) => {
              return <NewsItem
                key={index}
                title={item.title}
                source={item.source.name}
                description={item.description}
                url={item.url}
                pic={item.urlToImage}
                date={item.publishedAt} />
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}
