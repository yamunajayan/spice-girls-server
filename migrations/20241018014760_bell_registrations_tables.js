export async function up(knex) {
  return knex.schema.createTable("registrations", (table) => {
    table.increments("id").primary(); // Primary key
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE"); // Foreign key referencing users
    table
      .integer("event_id")
      .unsigned()
      .notNullable()
      .references("bell_events.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE"); // Foreign key referencing events
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Timestamp for creation
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")); // Timestamp for updates
  });
}

export async function down(knex) {
  return knex.schema.dropTableIfExists("registrations"); // Drop table if it exists
}
