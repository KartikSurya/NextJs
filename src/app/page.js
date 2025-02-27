import Home from '@/Component/Home'
import React from 'react'

export default async function page(req, res) {
  let { q, language } = await req.searchParams
  return (
    <>
      <Home q={q ?? "All"} language={language ?? "hi"} />
    </>
  )
}
