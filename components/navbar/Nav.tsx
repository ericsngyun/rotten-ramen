import React from 'react'
import { Button } from '../ui/Button'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className = "flex justify-between px-8 py-4">
        <h1 className = "logo text-2xl text-[#18181c]">
          rotten-ramen
        </h1>
        <div >
          <Button>
            Sign Up
          </Button>
          <Button variant = "link">
            Sign In
          </Button>
        </div>
    </div>
  )
}

export default Nav