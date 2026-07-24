"use client"
import Link
from "next/link"
import Nav from "./nav/page"
import About from "./Hero/page"
export default function Home(){
  return(
    <>
<Nav/>
<main>
<About/>
</main>
    </>
  )
}