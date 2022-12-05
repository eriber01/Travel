import React from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import CartButton from "../cartButton/cartButton";


export const AuthNav = ({ path, onAuth, text, isCMS }) => {
  // flex-column flex-sm-row

  console.log(isCMS);
  return (
    <div>
      <nav className="nav d-flex justify-content-between bg-black bg-opacity-75 w-100 p-3">
        <a className=" w-auto btn btn-light text-decoration-none"
          style={{ maxWidth: '30%', minWidth: '8%' }}
          href="/" id="restart">HOME</a>
        <AuthButtons isCMS={isCMS} />
      </nav>
    </div>
  )
}