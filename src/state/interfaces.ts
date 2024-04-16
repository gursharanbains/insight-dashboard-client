export interface IKpiData {
  id: string;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  monthlyData: IMonthData[];
  dailyData: IDailyData[];
  expensesByCategory: {
    id: string;
    _id: string;
    salaries: number;
    supplies: number;
    services: number;
  };
  createdAt: string;
  updatedAt: string;
}

interface IMonthData {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

interface IDailyData {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface IProductData {
  _id: string;
  price: number;
  expense: number;
  transactions: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ITransactionData {
  _id: string;
  buyer: string;
  amount: number;
  productIds: string[];
  createdAt: string;
  updatedAt: string;
}
