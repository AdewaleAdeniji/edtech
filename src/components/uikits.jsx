import React from 'react';
import './css/index.css';
import './css/login.css';
import './css/bootstrap.css';
import './css/navbar.css';

import {Link} from 'react-router-dom';

export const Button = ({text,classname}) =>{
    return(
        <button type="button" className={` ${classname}`}>{text}</button>
    )
}
export const SmallText = ({text,color}) => {
    return (
        <div id="smalltext" {...color ? color : 'smalltext'}>{text}</div>
    )
}

export const link = ({name,path,active}) => {
    return (    
        <Link to={path} className={active? 'active link': 'link'}>{name}</Link>
    )
}
export const Header = ({username,picture}) => {
    return (
        <div className="header">
                        <div className="headercontent">
                                Dashboard
                        </div>
                    </div>
               
    )
}