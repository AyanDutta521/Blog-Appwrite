import React, { useEffect, useState } from 'react'
import authService from "../appwrite/auth";
import { Container, PostCard } from '../components'
import {useSelector} from 'react-redux'
import { set } from 'react-hook-form';
function Home() {
    const authStatus = useSelector(state => state.auth.status)
    

    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }


    return (
        <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Welcome to the blog! Select a post to read
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
    )
}

export default Home
