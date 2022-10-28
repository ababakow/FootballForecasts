import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import AuthBlock from "../../components/UI/Authblock";

export default function SignIn({ providers }) {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") router.replace("/");

  return (
    <AuthBlock>
      <h1>Football Forecusts</h1>
      <p>Sign In to Play:</p>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </AuthBlock>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
