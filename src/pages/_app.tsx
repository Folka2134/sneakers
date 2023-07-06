import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Navbar } from "~/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="mx-6 lg:mx-40 xl:mx-48">
      <ClerkProvider>
        <Navbar />
        <Component {...pageProps} />;
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
