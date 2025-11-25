import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";

export default function Icons({name, className}) {
    if (name === 'Done') {
      return <MdOutlineDone className={className} />
  }
  if (name === 'truck') {
    return <FaTruckFast className={className} />
  }
}
