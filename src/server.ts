import express, { Request, Response } from "express"
import { knex } from "./database/knex"

const app = express()
app.use(express.json())

app.get("/courses", async (request: Request, response: Response) => {
  // const courses =  await knex.raw("SELECT * FROM courses")
  const courses = await knex("courses").select().orderBy("name", "desc")

  return response.json(courses)
})

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body

  // Método insert
  // await knex("courses").insert({ name })

  // Insert com Knex Raw
  await knex.raw("INSERT INTO courses(name) VALUES (?)", [name])

  return response.status(201).json()
})

app.put("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params
  const { name } = request.body

  await knex("courses").update({ name }).where({ id })

  return response.json()
})

app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params

  await knex("courses").delete().where({ id })

  return response.json()
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
