import React from 'react'
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  RectangleStackIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className="m-3 flex flex-col col-span-2 items-center px-4 md:items-start">
      <img className="h-10 w-10" src="https://links.papareact.com/drq" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Message" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={RectangleStackIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} title="Sign In" />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  )
}

export default Sidebar
