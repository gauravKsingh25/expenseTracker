const ExpenseSchema = require("../models/ExpenseModel");

const addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  // Validations
  if (!title || !category || !amount || !description || !date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (typeof amount !== "number" || amount < 0) {
    return res
      .status(400)
      .json({ message: "Amount must be a positive number" });
  }

  const expense = new ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    await expense.save();
    console.log(expense); // Log the expense after saving
    res.status(200).json({ message: "Expense added" });
  } catch (error) {
    console.error("Error adding expense:", error); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error getting expenses:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

const deleteExpense = async (req, res) => {
  const { id } = req.params; // Destructure id from req.params
  // Log the id to debug

  try {
    const expense = await ExpenseSchema.findByIdAndDelete(id);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted" });
  } catch (err) {
    console.error("Error deleting expense:", err); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  deleteExpense,
};
