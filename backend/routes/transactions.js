const { addIncome, getIncome, deleteIncome } = require("../controllers/income");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expense");
const express = require("express");
const router = express.Router();

router
  .post(
    "/add-income",
    (req, res, next) => {
      console.log("POST /add-income", req.body);
      next();
    },
    addIncome
  )
  .get(
    "/get-incomes",
    (req, res, next) => {
      console.log("GET /get-incomes");
      next();
    },
    getIncome
  )
  .delete(
    "/delete-income/:id",
    (req, res, next) => {
      console.log(`DELETE /delete-income/${req.params.id}`);
      next();
    },
    deleteIncome
  )
  .post(
    "/add-expense",
    (req, res, next) => {
      console.log("POST /add-expense", req.body);
      next();
    },
    addExpense
  )
  .get(
    "/get-expenses",
    (req, res, next) => {
      console.log("GET /get-expenses");
      next();
    },
    getExpenses
  )
  .delete(
    "/delete-expense/:id",
    (req, res, next) => {
      console.log(`DELETE /delete-expense/${req.params.id}`);
      next();
    },
    deleteExpense
  );

module.exports = router;
