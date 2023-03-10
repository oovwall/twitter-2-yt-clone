import React from 'react'
import TweetBox from './TweetBox'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { Tweet } from '../../typings'

interface Props {
  tweets: Tweet[]
}

function Feed({ tweets }: Props) {
  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon className="h-8 w-8 cursor-pointer text-twitter mt-5 mr-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <div>
        <TweetBox />
      </div>
    </div>
  )
}

export default Feed
