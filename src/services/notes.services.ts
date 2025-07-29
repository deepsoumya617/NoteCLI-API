import { Note } from '../types/note'
import fs from 'fs/promises'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

// get the path to the notes file
const NOTES_PATH = path.join(__dirname, '../data/notes.json')

// read notes
async function readNotes(): Promise<Note[]> {
  const data = await fs.readFile(NOTES_PATH, 'utf-8')
  return JSON.parse(data) as Note[]
}

// write notes
async function writeNotes(notes: Note[]): Promise<void> {
  await fs.writeFile(NOTES_PATH, JSON.stringify(notes, null, 2), 'utf-8')
}

// get all notes
async function getAllNotes(): Promise<Note[]> {
  try {
    return await readNotes()
  } catch (error) {
    console.error('Error reading notes:', error)
    return []
  }
}

// get note by ID
async function getNoteById(id: string): Promise<Note | null> {
  const notes = await readNotes()
  return notes.find((note) => note.id === id) || null
}

// create a new note
async function createNote(data: {
  title: string
  content: string
}): Promise<Note> {
  const notes = await readNotes()
  const newNote: Note = {
    id: uuidv4(),
    title: data.title,
    content: data.content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  notes.push(newNote)
  await writeNotes(notes)
  return newNote
}

// update a note
async function updateNote(
  id: string,
  data: {
    title?: string
    content?: string
  }
): Promise<Note | null> {
  const notes = await readNotes()
  const noteIndex = notes.findIndex((note) => note.id === id)
  if (noteIndex === -1) return null

  const updatedNote = {
    ...notes[noteIndex],
    ...data,
    updatedAt: new Date().toISOString(),
  }

  notes[noteIndex] = updatedNote
  await writeNotes(notes)
  return updatedNote
}

// delete a note
async function deleteNote(id: string): Promise<boolean> {
  const notes = await readNotes()
  const noteIndex = notes.findIndex((note) => note.id === id)
  if (noteIndex === -1) return false

  notes.splice(noteIndex, 1)
  await writeNotes(notes)
  return true
}
