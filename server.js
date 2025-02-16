const express = require ('express')
const app = express()

app.use(express.json())

//routes
const homeRouter = require("./route/routeHome")

//apply routes
app.use("/", homeRouter)



app.listen(3000, () => console.log("Server running on port 3000"))