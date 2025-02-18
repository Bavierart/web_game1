const express = require ('express')
const app = express()

app.use(express.json())

//routes
const homeRouter = require("./route/routeHome")
const loginRouter = require("./route/routeLogin")
const registerRouter = require("./route/routeRegister")

//apply routes
app.use("/", homeRouter)
app.use("/login", loginRouter)
app.use("/register", registerRouter)


app.listen(3000, () => console.log("Server running on port 3000 =)"))