import { create } from "zustand";

interface Movement {
  id: number;
  name: string;
  description?: string;
  value: number;
  date: string;
  category: string;
  type: string;
  account?: string;
}

interface Acccount {
  id: string;
  name: string;
  balance: number;
  movements: Movement[];
}

export interface AccountsStore {
  accounts: Acccount[];
  createAccount: (account: Acccount) => void;
  removeAccount: (id: string) => void;
  getAllMovements: () => Movement[];
}

export const useAccountStore = create<AccountsStore>()((set, get) => ({
  accounts: [],
  createAccount: (account: Acccount) =>
    set((state) => ({ accounts: [...state.accounts, account] })),
  removeAccount: (id: string) =>
    set((state) => ({
      accounts: state.accounts.filter((account) => account.id !== id),
    })),
  getAllMovements: () => {
    const { accounts } = get();
    return accounts.flatMap((account) =>
      account.movements.map((movement) => ({
        ...movement,
        account: account.name,
      }))
    );
  },
}));
