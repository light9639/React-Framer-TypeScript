import React, { useState } from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Appear from '@router/Appear/Appear';
import List from '@router/List/List';
import Drag from '@router/Drag/Drag';
import Scroll from '@router/Scroll/Scroll';
import SvgPage from '@router/SvgPage/SvgPage';
import Hover from '@router/Hover/Hover';
import DragPage from '@router/DragPage/DragPage';
import Main from '@router/Main/Main';
import Header from '@components/Header';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Appear" element={<Appear />} />
        <Route path="/List" element={<List />} />
        <Route path="/Drag" element={<Drag />} />
        <Route path="/Scroll" element={<Scroll />} />
        <Route path="/SvgPage" element={<SvgPage />} />
        <Route path="/Hover" element={<Hover />} />
        <Route path="/DragPage" element={<DragPage />} />
      </Routes>
    </React.Fragment>
  )
}
