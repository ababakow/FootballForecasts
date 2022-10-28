import LayoutAllPages from "../components/layout/LayoutAllPages";
import LayoutAuthPages from "../components/layout/LayoutAuthPages";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import "../styles/globals.css";

import { useRouter } from "next/router";
import { SessionProvider, useSession } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const isAuthPage = router.pathname.split("/")[1] === "auth" ? true : false;

  if (isAuthPage) {
    return (
      <SessionProvider session={session}>
        <LayoutAuthPages>
          <Component {...pageProps} />
        </LayoutAuthPages>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={session}>
      <LayoutAllPages>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </LayoutAllPages>
    </SessionProvider>
  );
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });
  if (status === "loading") {
    return <LoadingSpinner />;
    // return <div>Loading...</div>;
  }
  return children;
}
