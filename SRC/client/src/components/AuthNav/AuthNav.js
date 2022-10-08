import React from "react";
import AuthButtons from "../AuthButtons/AuthButtons";


export const AuthNav = ({ path, onAuth, text }) => {
  // flex-column flex-sm-row
  return (
    <div>
      <nav className="nav d-flex justify-content-between bg-black bg-opacity-75 w-100 p-3">
        <a className=" w-auto btn btn-light text-decoration-none"
          style={{ maxWidth: '30%', minWidth: '8%' }}
          href="/" id="restart">HOME</a>
        <AuthButtons />
      </nav>
    </div>
  )
}