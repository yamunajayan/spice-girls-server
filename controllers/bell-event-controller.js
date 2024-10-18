import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const all = async (_req, res) => {
  try {
    const data = await knex("bell_events");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

const mentalHealthEvents = async (_req, res) => {
  try {
    const data = await knex("bell_events").where({
      category: "mental_health",
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

const communityEvents = async (_req, res) => {
  try {
    const data = await knex("bell_events").where({
      category: "community",
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

const volunteerEvents = async (_req, res) => {
  try {
    const data = await knex("bell_events").where({
      category: "volunteer",
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

const workplaceEvents = async (_req, res) => {
  try {
    const data = await knex("bell_events").where({
      category: "workplace",
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

const registerUserForEvent = async (req, res) => {
  console.log("post received");
  const { user_name, user_email, phone_number, event_id } = req.body; // Get data from request body

  // Validate the input
  if (!user_name || !user_email || !phone_number || !event_id) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if the phone number exists
    let user = await knex("users").where({ phone_number }).first();

    if (user) {
      // Phone number exists, use existing user ID
      const userId = user.id;

      // Update the registration
      await knex("registrations")
        .insert({
          user_id: userId,
          event_id,
        })
        .onConflict(["user_id", "event_id"]) // If the registration exists, update it
        .merge(); // Update if the combination of user_id and event_id already exists

      return res.status(200).json({
        message: "Registration updated successfully",
        userId,
      });
    } else {
      // Phone number does not exist, create a new user
      const [newUserId] = await knex("users")
        .insert({
          user_name: user_name,
          user_email: user_email,
          phone_number,
        })
        .returning("id");

      // Now insert into registrations
      await knex("registrations").insert({
        user_id: newUserId,
        event_id,
      });

      return res.status(201).json({
        message: "User created and registration successful",
        userId: newUserId,
      });
    }
  } catch (err) {
    console.error("Error registering user for event:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  all,
  mentalHealthEvents,
  communityEvents,
  volunteerEvents,
  workplaceEvents,
  registerUserForEvent,
};
