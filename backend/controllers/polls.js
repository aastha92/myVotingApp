const mysql = require("mysql")
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')

const getAllPolls = (req,res) => {
  pool.query("SELECT * FROM Polls ORDER BY id", (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err });
      return handleSQLError(res, err);
    }
    return res.send(rows);
  })
}

const getPollsById = (req,res) => {
  let poll_id = req.params.id;
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  const replacements = ['Polls', 'id', poll_id];
  sql = mysql.format(sql, replacements)
  pool.query(sql, (err, rows) => {
      if (err) {
      console.log({ 'message': 'Error occurred: ' + err });
      return handleSQLError(res, err);
      }
      return res.send(rows);
  })
}

const createPoll = (req, res) => {
  let name = req.body.name;
  let user_id = req.body.user_id;
  let sql = "INSERT INTO Polls (name , user_id) VALUES (? , ?)";
  const replacements = [name , user_id];
  sql = mysql.format(sql, replacements)
  //console.log(user_id);
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}

module.exports = {
  getAllPolls,
  getPollsById,
  createPoll
}