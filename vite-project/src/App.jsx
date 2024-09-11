import { useState } from 'react'
import './App.css'
import SearchFilter from './Components/SearchFilter'
import UserList from './task_2/UserList';
import Router from 'express/lib/router';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Search Filter Component</h1>
      <SearchFilter />
      <UserList />


</div>
    
  );
}
export default App
