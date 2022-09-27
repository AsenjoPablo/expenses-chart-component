import type { NextPage } from "next";
import Head from "next/head";
import Balance from "../components/Balance";
import Spending from "../components/Spending";
import { ExpensesData } from "../shared/types";

const Home: NextPage = () => {
  const data: ExpensesData = {
    balance: 500.99,
    currency: "USD",
    spending: {
      lastMonthTotal: "500.50",
      monthTotal: "500.50",
      lastMonthIncrement: 2.4,
      hasIncremented: true,
      last7Days: [
        {
          day: "mon",
          amount: 17.45,
        },
        {
          day: "tue",
          amount: 34.91,
        },
        {
          day: "wed",
          amount: 52.36,
        },
        {
          day: "thu",
          amount: 31.07,
        },
        {
          day: "fri",
          amount: 23.39,
        },
        {
          day: "sat",
          amount: 43.28,
        },
        {
          day: "sun",
          amount: 25.48,
        },
      ],
    },
  };
  return (
    <div>
      <Head>
        <title>Expenses Chart Component</title>
        <meta name="description" content="Track your expenses in an easy way" />
      </Head>

      <main className="bg-cream min-h-screen px-4 py-12 grid place-items-center">
        <div className="flex flex-col gap-y-3">
          <Balance value={data.balance} />
          <Spending spending={data.spending} />
        </div>
      </main>
    </div>
  );
};

export default Home;
