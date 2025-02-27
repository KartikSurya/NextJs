import Link from 'next/link'
import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div className="card">
                <img src={props.pic?props.pic:"/image/noimage.jpg"} height={200} className="card-img-top" alt="No Images" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="source">
                        <p>{new Date(props.date).toLocaleDateString()}</p>
                        <p className="text-danger">{props.source}</p>
                    </div>
                    <p className="card-text">{props.description}</p>
                    <Link href={props.url} className="btn background text-light w-100">Read More Articles</Link>
                </div>
            </div>
        </div>
    )
}
