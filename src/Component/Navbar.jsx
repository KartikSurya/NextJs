"use client"
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  let [search,setSearch]=useState("")
  let [q,setQ]=useState("")
  let [language,setLanguage]=useState("")

  let searchParams=useSearchParams()
  let router=useRouter()

  function postData(e){
    e.preventDefault()
    router.push(`/?q=${search}&language=${language}`)
  }

  useEffect(()=>{
    let q=searchParams.get("q")??"All"
    let language=searchParams.get("language")??"hi"
    setQ(q)
    setLanguage(language)
  })
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" href="/">
            NewsApp
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-light active"
                  aria-current="page" href={`/?q=All&language=${language}`}>
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=Politics&language=${language}`}>
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=Crime&language=${language}`}>
                  Crime
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=Education&language=${language}`}>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=Science&language=${language}`}>
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=Technology&language=${language}`}>
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" href={`/?q=Economics&language=${language}`}>
                  Economics
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href={`/?q=Entertainment&language=${language}`}>
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={`/?q=Sports&language=${language}`}>
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={`/?q=Cricket&language=${language}`}>
                      Cricket
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={`/?q=World&language=${language}`}>
                      World
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={`/?q=India&language=${language}`}>
                      India
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={`/?q=MahaKumbh&language=${language}`}>
                      MahaKumbh
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href={`/?q=Jokes&language=${language}`}>
                      Jokes
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      href={`/?q=${q}&language=hi`}
                    >
                      Hindi
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href={`/?q=${q}&language=en`}
                    >
                      English
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={postData}>
              <input
                className="form-control me-2"
                onChange={(e)=>setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
