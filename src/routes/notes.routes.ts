import { Router } from 'express'
import {
  createNewNote,
  deleteNote,
  getNotes,
  getSingleNote,
  updateNewNote,
} from '../controllers/notes.controller'

const router: Router = Router()

// All the routes for notes
router.get('/', getNotes)
router.get('/:id', getSingleNote)
router.post('/', createNewNote)
router.put('/:id', updateNewNote)
router.delete('/:id', deleteNote)

export default router
