import app from './app'
import 'dotenv/config'

const PORT = process.env.PORT || 8383

// app.get('/', (req, res) => {
//     console.log('Received a request on /')
//     res.send('Homepage')
// })

// Start the server
app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`)
})