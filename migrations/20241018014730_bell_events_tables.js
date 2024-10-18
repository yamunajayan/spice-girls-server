export async function up(knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id").primary(); // Primary key
    table.string("title").notNullable(); // Event title
    table.string("description"); // Event description
    table.string("category").notNullable(); // Event category
    table.date("date").notNullable(); // Event date
    table.string("audience").notNullable(); // Event date
    table.string("event_type").notNullable(); // Event date
    table.string("location").notNullable(); // Event location
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Timestamp for creation
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")); // Timestamp for updates
  });
}

export async function down(knex) {
  return knex.schema.dropTableIfExists("events");
}
