import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const norseRef = useRef(null);
  useEffect(() => {
    // GSAP animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animation sequence
    tl.fromTo(norseRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8 });
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              WOMEN
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              MEN
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            <span ref={norseRef}>NORSE</span>
          </Link>
        </div>
        <div className="right">
          <div className="icon">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />

            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
