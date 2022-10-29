/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RecommendedProfilesQuery
// ====================================================

export interface RecommendedProfilesQuery_recommendedProfiles_picture_NftImage {
  __typename: "NftImage";
  /**
   * The contract address
   */
  contractAddress: any;
  /**
   * The token id of the nft
   */
  tokenId: string;
  /**
   * The token image nft
   */
  uri: any;
  /**
   * If the NFT is verified
   */
  verified: boolean;
}

export interface RecommendedProfilesQuery_recommendedProfiles_picture_MediaSet_original {
  __typename: "Media";
  /**
   * The token image nft
   */
  url: any;
  /**
   * The image/audio/video mime type for the publication
   */
  mimeType: any | null;
}

export interface RecommendedProfilesQuery_recommendedProfiles_picture_MediaSet {
  __typename: "MediaSet";
  /**
   * Original media
   */
  original: RecommendedProfilesQuery_recommendedProfiles_picture_MediaSet_original;
}

export type RecommendedProfilesQuery_recommendedProfiles_picture = RecommendedProfilesQuery_recommendedProfiles_picture_NftImage | RecommendedProfilesQuery_recommendedProfiles_picture_MediaSet;

export interface RecommendedProfilesQuery_recommendedProfiles {
  __typename: "Profile";
  /**
   * The profile id
   */
  id: any;
  /**
   * Name of the profile
   */
  name: string | null;
  /**
   * Bio of the profile
   */
  bio: string | null;
  /**
   * The picture for the profile
   */
  picture: RecommendedProfilesQuery_recommendedProfiles_picture | null;
}

export interface RecommendedProfilesQuery {
  recommendedProfiles: RecommendedProfilesQuery_recommendedProfiles[];
}
