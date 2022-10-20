import Image from "next/image";
import useSWR from "swr";

import { JB721DelegateToken } from "./UserNftList";

function useMetadata(tokenUri: string) {
  const { data } = useSWR(tokenUri, async (tokenUri: string) => {
    const response = await fetch(tokenUri);
    const json = await response.json();
    return json;
  });

  return data;
}

export function UserNftCard({
  JB721DelegateToken,
}: {
  JB721DelegateToken: JB721DelegateToken;
}) {
  const metadata = useMetadata(JB721DelegateToken.tokenUri);
  console.log(metadata);

  return (
    <div className="border rounded border-slate-500 overflow-hidden text-left p-6">
      <Image
        src={metadata?.image}
        alt="NFT image"
        className="rounded block"
        width={240}
        height={240}
      />

      <span className="font-dmserif text-xl block mb-6 mt-4">
        {JB721DelegateToken.name}
      </span>

      <span className="block text-slate-500 text-sm">Project Name</span>
    </div>
  );
}
