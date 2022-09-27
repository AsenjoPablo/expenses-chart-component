export interface ExpensesData {
  balance: number;
  currency: string;
  spending: Spending;
}

export interface Spending {
  lastMonthTotal: string;
  monthTotal: string;
  lastMonthIncrement: number;
  hasIncremented: boolean;
  last7Days: DaySpending[];
}

export interface DaySpending {
  day: string;
  amount: number;
}
