import bookController from "../controllers/book.controller.js";
import Router from "express"
const broute = Router()

broute.post("/createBook",bookController.book)

export default broute
