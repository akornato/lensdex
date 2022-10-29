import { gql } from "@apollo/client";

export const recommendedProfilesQuery = gql`
  query RecommendedProfilesQuery {
    recommendedProfiles {
      id
      name
      bio
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
        __typename
      }
    }
  }
`;
