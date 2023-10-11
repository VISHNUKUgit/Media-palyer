const jsonServer = require ('json-server')
const mediaPlayerServer = jsonServer.create()
const router = jsonServer.router("db.json")
const Middleware = jsonServer.defaults()

const port =  4000 || process.env.PORT
 
mediaPlayerServer.use(Middleware)
mediaPlayerServer.use(router)

mediaPlayerServer.listen(port,()=>{

    console.log(`Media Player Server startrd at port:${port} and wiating for clinet`);
})