import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

const Test1 = () => {
  return (
    <div className="p-4">
      <p>Test1</p>
      <p>
        <button
          onClick={() => {
            toast.success('Hello. This is test')
          }}
        >
          Toast
        </button>
      </p>
      <Link href="/">
        home
      </Link>
    </div>
  )
}

export default Test1