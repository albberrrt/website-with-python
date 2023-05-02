"use client"
import Image from 'next/image'
import sty from './page.module.scss'
import { useState } from 'react';

export default function Home() {
  const [names, setname] = useState(["lallala", "Albert"]);
  return (
    <>
      <header>
        <Image></Image>
      </header>
      <main className={sty.main}>
        <div className={sty.container}>
          { names.map( (name, key) => <h1 key={name} className={sty.h1}>{ name }</h1> )}
        </div>
      </main>
    </>
  )
}
