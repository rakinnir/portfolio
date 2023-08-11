"use client"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCricle from "./BackgroundCricle"
type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi,My name is Rakin",
      "Guy who loves to play games",
      "< ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div>
      <BackgroundCricle />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  )
}
