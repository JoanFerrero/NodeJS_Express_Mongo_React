import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import productRoutes from "./routes/products.js"
import productCard from "./routes/card.js"
import { register } from "./controllers/auth.js"
import { createProducts } from "./controllers/products.js";
import { verifyToken } from "./middleware/auth.js";

/* CONFIGURATION */
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination:  function (req, file, cb) {
    cb(null, "public/assets")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register)
app.post("/products", verifyToken, upload.single("picture"), createProducts)

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/products", productRoutes)
app.use("/card", productCard)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001
//npm run dev
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)})

    /* ADD DATA ONE TIME */
    //User.insertMany(users);
    //Post.insertMany(posts);
  }).catch(err => {
    console.log(err)
  })