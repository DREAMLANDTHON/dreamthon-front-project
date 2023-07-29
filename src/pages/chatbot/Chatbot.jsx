import React, {useState} from "react";
import Sidebar from "./components/Sidebar";
import {Outlet} from "react-router-dom";

export default function Chatbot() {
    return (
        <div className='container'>
            <Outlet></Outlet>
            {/*<Sidebar></Sidebar>*/}
        </div>
    );
}
