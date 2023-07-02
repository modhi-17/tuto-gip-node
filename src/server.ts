import fastify from 'fastify'
import { logger } from './logger'
class Server {

    _server

    constructor() {
        this._server = fastify()

        this._server.get('/ping', async (request, reply) => {
            return 'pong\n'
        })   
    }


    async start() {
        try {
            const address = await this._server.listen({ port: 3000 })
            logger.info(`Server listening at ${address}`)
        } catch (err) {
            logger.error(err)
            process.exit(1)
        }
    }

    stop() {

    }
}

const server: Server = new Server()

export { server }

