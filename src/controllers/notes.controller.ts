import { Request, Response } from 'express'
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNoteById,
} from '../services/notes.services'

// Get all notes
export async function getNotes(req: Request, res: Response) {
  const notes = await getAllNotes()
  if (!notes)
    return res.status(500).json({ error: 'Failed to retrieve notes!' })
  res.status(200).json(notes)
}

// Get note by ID
export async function getSingleNote(req: Request, res: Response) {
  const note = await getNoteById(req.params.id)
  if (!note) return res.status(404).json({ error: 'Note not found!' })
  res.status(200).json(note)
}

// Create a new note
export async function createNewNote(req: Request, res: Response) {
  const { title, content } = req.body
  if (!title || !content)
    return res.status(400).json({ error: 'Missing fields!' })
  const note = await createNote(req.body)
  res.status(201).json(note)
}

// Update note
export async function updateNewNote(req: Request, res: Response) {
  const updatedNote = await updateNote(req.params.id, req.body)
  if (!updatedNote)
    return res
      .status(404)
      .json({ error: 'Failed to update Note. Note doesnt exist!' })
  res.json(updateNote)
}

// delete note
export async function deleteNote(req: Request, res: Response) {
  const success = await deleteNoteById(req.params.id)
  if (!success) return res.status(404).json({ error: 'Failed to delete Note!' })
}
