'use client'

import { login } from '@/actions/_auth'
import React from 'react'
import { Button } from './ui/button'

const LoginBtn = () => {

    const handleClick = async () => {
        await login("spotify")
    }

  return (
    <Button onClick={handleClick} variant="ghost">Login</Button>
  )
}

export default LoginBtn