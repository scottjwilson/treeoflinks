import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Profile = ({ data }) => {
  const image = getImage(data.image)
  const { name, twitter } = data

  return (
    <div className="bg-indigo-500 p-5 flex flex-col items-center rounded-t-xl shadow-xl">
      <GatsbyImage image={image} className="rounded-full -mt-28" />
      <h1>{name}</h1>
      <h1>{twitter}</h1>
    </div>
  )
}

export default Profile
