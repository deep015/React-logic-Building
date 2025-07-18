import { useState } from 'react'
import './App.css'
import TodoApp from './components/TodoApp/TodoApp'
import NotesForm from './components/NoteApp/NotesForm'
import StarRating from './components/StarRating/StarRating'
import Hideshow from './components/Hideshow/Hideshow'
import TabSwitch from './components/TabsSwitcher.jsx/TabSwitch'
import Imagegallery from './components/ImageGallery/Imagegallery'


function App() {
  
return(
      <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">📝</h1>
      <Imagegallery />
    </div>
)
 
}

export default App
