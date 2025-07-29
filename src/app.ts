import express, { Express } from 'express'

const app: Express = express()

// Middleware
app.use(express.json())

// Routes

export default app
