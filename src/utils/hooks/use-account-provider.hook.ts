import { AccountsStore, useAccountStore } from "../../stores";

export const useAccountProvider = () => {
  const accounts = useAccountStore((state: AccountsStore) => state.accounts);

  const createAccount = useAccountStore(
    (state: AccountsStore) => state.createAccount
  );
  const removeAccount = useAccountStore(
    (state: AccountsStore) => state.removeAccount
  );
  const getAllMovements = useAccountStore(
    (state: AccountsStore) => state.getAllMovements
  );

  return {
    accounts,
    createAccount,
    removeAccount,
    getAllMovements,
  };
};
