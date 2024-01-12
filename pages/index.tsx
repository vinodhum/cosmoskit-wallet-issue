import { useChain } from "@cosmos-kit/react";

export default function Home() {
  const { connect, disconnect, isWalletConnected , address} = useChain("migaloo");

  return (
    <main>
      <h1>Next.js + TypeScript</h1>
      <p>{address}</p>
      {isWalletConnected ? (
        <button onClick={() => disconnect()}>Disconnect</button>
      ) : (
        <button onClick={connect}>Connect</button>
      )}
    </main>
  );
}
