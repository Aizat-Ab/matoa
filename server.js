const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 3008;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running');
});


// const express = require('express')
// const app = express()
// const port = process.env.PORT || 5000
// const path = require('path')

// app.use(express.static(path.join(__dirname, 'build')))

// //all your api code goes here
// app.get('/api', (req, res) => {
//   res.json({
//     message: 'This is the api endpoint'
//   })
// })

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

// app.listen(port, _ => {
//   console.log(`server started on port ${port}`)
// })