import bookController from "../controllers/book.controller.js";
import Router from "express"
const broute = Router()

broute.post("/createBook",bookController.book)
broute.delete("/delete",bookController.deleteBooking)
broute.get("/list/:name",bookController.getbookingbyname)
broute.get("/allbooking",bookController.allbooking)

export default broute
