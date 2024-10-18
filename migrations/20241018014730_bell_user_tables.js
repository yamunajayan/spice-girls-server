export function up(knex) {
  return knex.schema
    .createTable("events", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description");
      table.string("category").notNullable(); // mental_health, community, workplace, volunteer
      table.string("location").notNullable();
      table.date("event_date").notNullable();
      table.integer("capacity").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .then(() => {
      return knex.schema.createTable("registrations", (table) => {
        table.increments("id").primary();
        table.integer("event_id").unsigned().notNullable();
        table.foreign("event_id").references("events.id").onDelete("CASCADE");
        table.string("user_name").notNullable();
        table.string("user_email").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table
          .timestamp("updated_at")
          .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      });
    });
}

export function down(knex) {
  return knex.schema
    .dropTableIfExists("registrations")
    .then(() => knex.schema.dropTableIfExists("events"));
}
