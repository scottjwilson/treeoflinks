import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Profile = ({ data }) => {
  const image = getImage(data.image)
  const { name, twitter } = data

  return (
    <div className="profile p-5 flex flex-col items-center rounded-t-xl ">
      <GatsbyImage image={image} className="rounded-full -mt-28" />
      <div className="pt-4 space-y-2 flex flex-col text-center text-white">
        <h1>{name}</h1>
        <h1>{twitter}</h1>
      </div>
    </div>
  )
}

export default Profile
