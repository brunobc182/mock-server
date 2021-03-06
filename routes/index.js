const express = require('express')

const router = express.Router()

const configureRoutes = ({ server, services }) => {
  router.get('/', (req, res) => {
    res.status(200).send(`
  *************** MOCK SERVER CLI ***************
  ** Run in your terminal
  ** $ npm install @easynvest/mock-server
  ** $ mock-server init
  ** $ mock-server start
  ** or
  ** $ mock-server --help
  *************** MOCK SERVER CLI ***************\n`)
  })

  router.get('/request-api', (req, res) => {
    server.locals.requestApi = !server.locals.requestApi //eslint-disable-line
    res.status(200).json(server.locals.requestApi)
  })

  router.get('/requests', (req, res) => {
    res.status(200).json(services.onRequests.requests.value())
  })

  router.get('/scenarios', (req, res) => {
    res.status(200).json(services.onScenarios.scenarios.value())
  })

  return router
}

module.exports = configureRoutes
