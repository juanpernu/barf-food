import { Provider } from "jotai";
import { store } from "@/lib/store";

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Provider store={store}>{children}</Provider>
    </section>
  );
}
