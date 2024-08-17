const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
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

  const income = new IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    await income.save();
    console.log(income); // Log the income after saving
    res.status(200).json({ message: "Income added" });
  } catch (error) {
    console.error("Error adding income:", error); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getIncome = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    console.error("Error getting incomes:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params; // Destructure id from req.params
  // Log the id to debug

  try {
    const income = await IncomeSchema.findByIdAndDelete(id);
    if (!income) {
      return res.status(404).json({ message: "Income not found" });
    }
    res.status(200).json({ message: "Income deleted" });
  } catch (err) {
    console.error("Error deleting income:", err); // Log the error for debugging
    res.status(500).json({ message: "Server error" });
  }
};
