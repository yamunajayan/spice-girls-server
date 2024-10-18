export async function up(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary(); // Primary key
    table.string("user_name").notNullable(); // User name
    table.string("user_email").notNullable(); // User email
    table.string("phone_number").notNullable(); // User number
    table.timestamp("created_at").defaultTo(knex.fn.now()); // Timestamp for creation
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")); // Timestamp for updates
  });
}

export async function down(knex) {
  return knex.schema.dropTableIfExists("users"); // Drop table if it exists
}
