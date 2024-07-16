import Image from 'next/image'
import React from 'react'
import Logo from "../public/svg/logo.svg"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <nav className='flex flex-1 justify-between items-center p-8 w-full h-fit'>
            <div className='text-5xl font-thin text-red-600'>
                <p>uCare</p>
            </div>
            <div>
                <SignedOut>
                    {/* login and signup */}
                    <div className='flex items-center w-fit gap-6'>
                        <Button className='bg-red-600 text-white rounded-2xl hover:opacity-50'>
                            <SignInButton />
                        </Button>
                        <Button className='bg-app-blue-1 text-white rounded-2xl hover:opacity-50'>
                            <SignUpButton />
                        </Button>
                    </div>
                </SignedOut>
                <SignedIn>
                    <UserButton showName />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar