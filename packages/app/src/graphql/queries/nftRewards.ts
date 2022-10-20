import { gql } from "@apollo/client";

export const GET_NFT_REWARDS = gql`
  query GetNftRewards($projectIds: [Int]!) {
    projects(where: { projectId_in: $projectIds }) {
      metadataUri
      jb721DelegateTokens {
        name
        id
        tokenUri
      }
    }
  }
`;
