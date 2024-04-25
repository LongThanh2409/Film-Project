import { AppProvider } from "./AppProvider";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <AppProvider>{children}</AppProvider>;
};
