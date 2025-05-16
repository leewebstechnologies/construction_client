"use client";
import Link from "next/link";
import "./navbar.scss";
import Image from "next/image";
import logo from "../../../images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <ul className="list">
        <li className="listItem">
          <Link className="item" href="/">
            Home
          </Link>
        </li>
        <li className="listItem">
          <Link className="item" href="/about">
            About Us
          </Link>
        </li>
        <li className="listItem">
          <Link className="item" href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="listItem">
          <Link className="item" href="/blog">
            Blog
          </Link>
        </li>
        <li className="listItem">
          <Link className="item" href="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="socialMediaIcons">
        <li className="socialMediaIcon">
          <Link className="icon" href="https://web.facebook.com/Lacreteconcept">
            <i className="icon fa-brands fa-square-facebook"></i>
          </Link>
        </li>
        <li className="socialMediaIcon">
          <Link
            className="icon"
            href="https://www.tiktok.com/@lacrete_concept?_t=ZM-8tR5goUupDp&_r=1"
          >
            <i className="icon fa-brands fa-tiktok"></i>
          </Link>
        </li>
        <li className="socialMediaIcon">
          <Link className="icon" href="https://www.instagram.com/lacrete2025">
            <i className="icon fa-brands fa-square-instagram"></i>
          </Link>
        </li>
        <li className="socialMediaIcon">
          <Link className="icon" href="https://wa.me/+2348028752742">
            <i className="icon fa-brands fa-square-whatsapp"></i>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className="menu"
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className="menuItem">
          <Link className="item" href="/">
            Home
          </Link>
        </li>
        <li className="menuItem">
          <Link className="item" href="/about">
            About Us
          </Link>
        </li>
        <li className="menuItem">
          <Link className="item" href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="menuItem">
          <Link className="item" href="/blog">
            Blog
          </Link>
        </li>
        <li className="menuItem">
          <Link className="item" href="/contact">
            Contact Us
          </Link>
        </li>
        <li className="menuItem">
          <Link className="icon" href="https://web.facebook.com/Lacreteconcept">
            <i className="icon fa-brands fa-square-facebook"></i>
          </Link>
        </li>
        <li className="menuItem">
          <Link
            className="icon"
            href="https://www.tiktok.com/@lacrete_concept?_t=ZM-8tR5goUupDp&_r=1"
          >
            <i className="icon fa-brands fa-tiktok"></i>
          </Link>
        </li>
        <li className="menuItem">
          <Link className="icon" href="https://www.instagram.com/lacrete2025">
            <i className="icon fa-brands fa-square-instagram"></i>
          </Link>
        </li>
        <li className="menuItem">
          <Link className="icon" href="https://wa.me/+2348028752742">
            <i className="icon fa-brands fa-square-whatsapp"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
