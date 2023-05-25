import React from 'react'
import Link from 'next/link'

type Props = {}

export function BackHome({}: Props) {
  return (
    <Link style={{fontWeight: 'bold', fontSize: '20px', padding: '8px', display: 'block', background: '#444', textAlign: 'center'}} href="/">
        Home
    </Link>
  )
}