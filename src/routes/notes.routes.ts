import { Router } from 'express'
import {
  createNewNote,
  deleteNote,
  getNotes,
  getSingleNote,
  updateNewNote,
} from '../controllers/notes.controller'

const noteRoutes: Router = Router()

// All the routes for notes
noteRoutes.get('/', getNotes)
noteRoutes.get('/:id', getSingleNote)
noteRoutes.post('/', createNewNote)
noteRoutes.put('/:id', updateNewNote)
noteRoutes.delete('/:id', deleteNote)

export default noteRoutes
