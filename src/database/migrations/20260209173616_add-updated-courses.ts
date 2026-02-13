import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    // TIMESTAMP = data + hora
    // defaultTo define um valor automático, sendo o horário e data atual.
    // AFTER cria a coluna updated_at depois da tabela de created_at
    table.timestamp("updated_at").defaultTo(knex.fn.now()).after("created_at")
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("courses", (table) => {
    table.dropColumn("updated_at")
  })
}

