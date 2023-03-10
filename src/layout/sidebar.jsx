import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function sidebar() {

  const path = [
    { name: "color", icon: "grade" },
    { name: "font", icon: "grade" },
    { name: "dropdown", icon: "grade" },
    { name: "navbar", icon: "grade" },
    { name: "collapse", icon: "grade" },
    { name: "card", icon: "grade" },
    { name: "inputs", icon: "grade" },
    { name: "avatar", icon: "grade" },
    { name: "placeholder", icon: "grade" },
    { name: "table", icon: "grade" },
    { name: "collapse", icon: "grade" },
    { name: "paginacion", icon: "grade" },

  ]

  return (
    <div className="appbar ">

      <ul className=''>

        {path.map((v, k) => (

          <a key={k} href={`/${v.name}`}>

            <li className="appbar-item ">
              <span className="material-symbols-outlined">
                {v.icon}
              </span>

              <strong>
                {v.name}
              </strong>
            </li>
          </a>
        ))}



      </ul>


    </div>
  )
}
