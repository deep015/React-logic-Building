import { useState } from 'react'
import './App.css'
import TodoApp from './components/TodoApp/TodoApp'
import NotesForm from './components/NoteApp/NotesForm'


function App() {
  
return(
      <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">📝 Notes App</h1>
      <NotesForm />
    </div>
)
 
}

export default App
