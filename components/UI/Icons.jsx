import React from 'react'
import { MdOutlineDone } from "react-icons/md";

export default function Icons({name, className}) {
    if (name === 'Done') {
      return <MdOutlineDone className={className} />
  }
}
