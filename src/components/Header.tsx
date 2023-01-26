import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";

export default function Header(): JSX.Element {
    return (
        <div className='Header'>
            <Link to="/"><span>Slide</span></Link>
            <Link to="/Appear"><span>Appear</span></Link>
            <Link to="/List"><span>List</span></Link>
            <Link to="/Drag"><span>Drag</span></Link>
            <Link to="/Scroll"><span>Scroll</span></Link>
            <Link to="/Svg"><span>Svg</span></Link>
            <Link to="/Hover"><span>Hover</span></Link>
            <Link to="/DragPage"><span>DragPage</span></Link>
        </div>
    )
}