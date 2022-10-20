import { useQuery } from "@apollo/client";
import nftRewardsJson from "@jbx-protocol/juice-nft-rewards/out/ERC721.sol/ERC721.json";
import { useAccount, useContractReads } from "wagmi";

import { GET_NFT_REWARDS } from "./graphql/queries/nftRewards";
import { UserNftCard } from "./UserNftCard";

const STUDIODAO_JUICEBOX_PROJECT_IDS = [38, 47];

export type JB721DelegateToken = {
  id: string;
  tokenUri: string;
  name: string;
};

type Project = {
  metadataUri: string;
  jb721DelegateTokens: JB721DelegateToken[];
};

const useNftRewards = () => {
  const { data } = useQuery(GET_NFT_REWARDS, {
    variables: { projectIds: STUDIODAO_JUICEBOX_PROJECT_IDS },
  });

  const nftRewards: JB721DelegateToken[] = data?.projects.flatMap(
    (project: Project) =>
      project.jb721DelegateTokens.flatMap((token: JB721DelegateToken) => token)
  );
  return nftRewards;
};

const useAccountTotalNftBalance = () => {
  const nftRewards = useNftRewards();
  const { address } = useAccount();

  const contractsToRead =
    nftRewards?.map((nft) => {
      return {
        contractInterface: nftRewardsJson.abi,
        addressOrName: nft.id,
        functionName: "balanceOf",
        args: [address],
        chainId: 5,
      };
    }) ?? [];

  const accountNftBalances = useContractReads({
    contracts: contractsToRead,
  });

  return nftRewards
    ?.map((nft, idx) => {
      return {
        ...nft,
        balance: accountNftBalances.data?.[idx],
      };
    })
    .filter((nft) => nft.balance?.gt(0));
};

export function UserNftList() {
  const balances = useAccountTotalNftBalance() ?? [];

  return (
    <div>
      <h4 className="text-lg text-left mb-6">NFT Rewards</h4>

      <div className="flex flex-wrap gap-8">
        {balances?.map((nft, idx) => (
          <UserNftCard key={idx} JB721DelegateToken={nft} />
        ))}
      </div>
    </div>
  );
}
