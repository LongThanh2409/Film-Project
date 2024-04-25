import { MainLayout } from "@/src/provider/MainLayout";

type Props = {
  children?: React.ReactNode;
};

export default function LayoutScreenHome({ children }: Props) {
  return (
    <div className={"home-layout"}>
      <MainLayout>{children}</MainLayout>
    </div>
  );
}
