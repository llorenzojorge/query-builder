import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex("courses").insert([
        { name: "Css" },
        { name: "Node" },
        { name: "Express" },
        { name: "Git" },
        { name: "Docker" },
        { name: "API" },
    ]);
};