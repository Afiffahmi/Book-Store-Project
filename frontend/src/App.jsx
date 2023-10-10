import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'


const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Home />}/>
      <Route path ='/books/create' element={<CreateBooks></CreateBooks>}/>
      <Route path ='/books/edit/:id' element={<EditBook></EditBook>}/>
      <Route path ='/books/delete/:id' element={<DeleteBook></DeleteBook>}/>
      <Route path ='books/details/:id' element={<ShowBook></ShowBook>}/>
    </Routes>
  )
}

export default App