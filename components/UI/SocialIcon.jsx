import React from 'react'

const SocialIcon = ({ color, icon }) => (
  <a
    href="#"
    className={`${color} w-8 h-8 flex items-center justify-center text-white rounded-sm hover:opacity-90 transition-opacity`}
  >
    <span className="text-sm">{icon}</span>
  </a>
);

export default SocialIcon;