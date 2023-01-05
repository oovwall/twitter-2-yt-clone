import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className="flex items-center max-w-fit space-x-2 rounded-full px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all duration-200 group">
      <Icon className="h-6 w-6" />

      <p className="hidden md:inline-flex group-hover:text-twitter text-base lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
