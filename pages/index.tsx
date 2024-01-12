import { useChain } from "@cosmos-kit/react";

export default function Home() {
  const { connect, disconnect, isWalletConnected } = useChain("migaloo");

  return (
    <main>
      <h1>Next.js + TypeScript</h1>
      {isWalletConnected ? (
        <button onClick={disconnect}>Disconnect</button>
      ) : (
        <button onClick={connect}>Connect</button>
      )}
    </main>
  );
}
