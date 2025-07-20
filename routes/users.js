import express from "express"
import {v4 as uuidv4} from "uuid"

const router = express.Router()
const items = [
]

router.get("/", (req,res) =>
{
    console.log(items)
     res.send("Hello World")
})

router.post("/", (req, res) => {
    const item = req.body;
    items.push({  ...item, id: uuidv4() })
    res.send(`Item with the name ${item.name}  added to the database`)
})

router.get("/:id", (req, res) => {
   const { id } = req.params;
   const findItem = items.find((item) => item.id === id)
   
    res.send(findItem)
})

router.delete("/:id", (req, res) => {
    const {id} = req.params;

    items.filter((item) => item.id !== id)

    res.send(`item with the ${id} is deleted from the database`)
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const name = req.body
    const description = req.body

    const item = items.find((item) => item.id == id)
    if (description) item.description = description   
    if (name) item.description =name 

    res.send(`item with the ${id} id as been updated`)
})
export default router