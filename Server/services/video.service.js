// Import the database connection
// const db = require("../config/dbConfig");
const conn = require("../config/db.config");

// A function to create a vehicle
async function quarter1() {
  const query = `
  SELECT * FROM Quarter1
  WHERE id BETWEEN 1 AND 12`;

  try {
    const rows = await conn.query(query);
    console.log(rows);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}
async function update_quarter1(id, request) {
  const query = `
  UPDATE Quarter1 SET video=?, video_description=? WHERE id = ?`;
  try {
    const rows = await conn.query(query, [
      request.video,
      request.video_description,
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}
async function quarter2() {
  const query = `
   SELECT * FROM Quarter2
  WHERE id BETWEEN 1 AND 12`;

  try {
    const rows = await conn.query(query);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}

async function update_quarter2(id, request) {
  const query = `
  UPDATE Quarter2 SET video=?, video_description=? WHERE id = ?`;
  try {
    const rows = await conn.query(query, [
      request.video,
      request.video_description,
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}

async function quarter3() {
  const query = `
   SELECT * FROM Quarter3
  WHERE id BETWEEN 1 AND 12`;

  try {
    const rows = await conn.query(query);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}

async function update_quarter3(id, request) {
  const query = `
  UPDATE Quarter3 SET video=?, video_description=? WHERE id = ?`;
  try {
    const rows = await conn.query(query, [
      request.video,
      request.video_description,
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}
async function y2quarter1() {
  const query = `
   SELECT * FROM Quarter1
  WHERE id BETWEEN 13 AND 24`;

  try {
    const rows = await conn.query(query);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}

async function y2quarter1update(id, request) {
  const query = `
  UPDATE Quarter1 SET video=?, video_description=? WHERE id = ?`;
  try {
    const rows = await conn.query(query, [
      request.video,
      request.video_description,
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}

async function y2quarter2() {
  const query = `
   SELECT * FROM Quarter2
 WHERE id BETWEEN 13 AND 24`;

  try {
    const rows = await conn.query(query);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}

async function y2quarter2update(id, request) {
  const query = `
  UPDATE Quarter2 SET video=?, video_description=? WHERE id = ?`;
  try {
    const rows = await conn.query(query, [
      request.video,
      request.video_description,
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}
async function y2quarter3() {
  const query = `
   SELECT * FROM Quarter3
 WHERE id BETWEEN 13 AND 24`;

  try {
    const rows = await conn.query(query);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}

async function y2quarter3update(id, request) {
  const query = `
  UPDATE Quarter3 SET video=?, video_description=? WHERE id = ?`;
  try {
    const rows = await conn.query(query, [
      request.video,
      request.video_description,
      id,
    ]);
    return rows;
  } catch (error) {
    console.error("Error executing query:", error);
    return [];
  }
}
// create a function to get a vehicle by id

// Export the functions
module.exports = {
  quarter1,
  quarter2,
  quarter3,
  y2quarter1,
  y2quarter2,
  y2quarter3,
  update_quarter1,
  update_quarter2,
  update_quarter3,
  y2quarter1update,
  y2quarter2update,
  y2quarter3update,
};
