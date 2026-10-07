import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start ">
        <a
          className="navbar-brand text-light link-underline link-underline-opacity-0 fs-3"
          href=""
        >
          PricePath
        </a>
        <div>
         <Button text= 'Login' class='btn-outline-info' />
          &nbsp;
          <Button text= 'Register' class='btn-info' />
        </div>
      </nav>
    </>
  );
};

export default Header;
