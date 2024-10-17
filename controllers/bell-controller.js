// import initKnex from "knex";
// import configuration from "../knexfile.js";
// const knex = initKnex(configuration);

const all = (_req, _res) => {
  _res.send("You reached bell page");
};

export { all };
