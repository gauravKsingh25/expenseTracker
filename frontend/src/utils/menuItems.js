import { dashboard, expenses, transactions, trend } from "./icons";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: dashboard,
    Link: "/dashboard",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: transactions,
    Link: "/dashboard",
  },
  {
    id: 3,
    title: "Incomes",
    icon: trend,
    Link: "/dashboard",
  },
  {
    id: 4,
    title: "Expense",
    icon: expenses,
    Link: "/dashboard",
  },
];
