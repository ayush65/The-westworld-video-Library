/** @format */

import React from "react";
import "./Sidebar.css";
import { BsHouse } from "react-icons/bs";
import { GoGlobe, GoThumbsup } from "react-icons/go";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <Link to='/homepage' className='sidebar-icons'>
        <h2>
          <BsHouse />
        </h2>
      </Link>
      <Link to='/explore' className='sidebar-icons'>
        <h2>
          <GoGlobe />
        </h2>
      </Link>
      <Link to='/playlist' className='sidebar-icons'>
        <h2>
          <RiPlayListAddLine />
        </h2>
      </Link>
      <Link to='/like' className='sidebar-icons'>
        <h2>
          <GoThumbsup />
        </h2>
      </Link>
      <Link to='/watchlater' className='sidebar-icons'>
        <h2>
          <BsClockHistory />
        </h2>
      </Link>
      <Link to='/history' className='sidebar-icons'>
        <h2>
          <MdWatchLater />
        </h2>
      </Link>
    </div>
  );
}

export default Sidebar;
