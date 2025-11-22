import React from 'react'
import Icon from './Icons';

export default function WorksCard({title, desc}) {
  return (
    <>
      <div className="bg-[#f79420]/10 p-4 rounded-full mb-4">
        <Icon name="Done" className="text-[#f79420] h-10 w-10" />
      </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>

      <p className="text-gray-600 text-lg">
        {desc}
      </p>
    </>
  );
}
