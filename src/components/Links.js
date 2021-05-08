import React from "react"
import { Link } from "gatsby"
const Links = ({ data }) => {
  return (
    <div className="flex flex-col p-12 space-y-6 text-center">
      {data.nodes.map(link => (
        <>
          <Link
            className="text-gray-200 hover:text-white transition-all duration-300 p-4 hover:bg-gray-900 hover:bg-opacity-30  rounded-xl"
            to={link.url}
          >
            {link.text}
          </Link>
        </>
      ))}
    </div>
  )
}

export default Links
