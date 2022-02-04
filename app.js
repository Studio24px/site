const port =3000
const express=require("express")    
const app=express()
// set static paths
app.use(express.static("public"))
app.use("/css",express.static(__dirname + "public/css"))
app.use("/img",express.static(__dirname + "public/images"))
app.use("/js",express.static(__dirname + "public/js"))
app.use("/font",express.static(__dirname + "public/fonts"))

// templating engine
app.set("views","./views")
app.set('view engine','ejs')

//defualt router
const index =require("./routes/index")
app.use('/',index)

// listener to port
app.listen(port)
