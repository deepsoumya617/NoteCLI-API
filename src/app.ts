import express, { Express } from 'express'
import noteRoutes from './routes/notes.routes'
import path from 'path'
import { fileURLToPath } from 'url'

const app: Express = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware
app.use(express.json())

// Serve static HTML from public folder (for '/')
app.use(express.static(path.join(__dirname, '../public')))

// Routes
app.use('/api/notes', noteRoutes)

export default app
