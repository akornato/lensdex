/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FollowModules } from "./globalTypes";

// ====================================================
// GraphQL query operation: RecommendedProfiles
// ====================================================

export interface RecommendedProfiles_recommendedProfiles_attributes {
  __typename: "Attribute";
  /**
   * The display type
   */
  displayType: string | null;
  /**
   * The trait type - can be anything its the name it will render so include spaces
   */
  traitType: string | null;
  /**
   * identifier of this attribute, we will update by this id 
   */
  key: string;
  /**
   * Value attribute
   */
  value: string;
}

export interface RecommendedProfiles_recommendedProfiles_picture_NftImage {
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

export interface RecommendedProfiles_recommendedProfiles_picture_MediaSet_original {
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

export interface RecommendedProfiles_recommendedProfiles_picture_MediaSet {
  __typename: "MediaSet";
  /**
   * Original media
   */
  original: RecommendedProfiles_recommendedProfiles_picture_MediaSet_original;
}

export type RecommendedProfiles_recommendedProfiles_picture = RecommendedProfiles_recommendedProfiles_picture_NftImage | RecommendedProfiles_recommendedProfiles_picture_MediaSet;

export interface RecommendedProfiles_recommendedProfiles_coverPicture_NftImage {
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

export interface RecommendedProfiles_recommendedProfiles_coverPicture_MediaSet_original {
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

export interface RecommendedProfiles_recommendedProfiles_coverPicture_MediaSet {
  __typename: "MediaSet";
  /**
   * Original media
   */
  original: RecommendedProfiles_recommendedProfiles_coverPicture_MediaSet_original;
}

export type RecommendedProfiles_recommendedProfiles_coverPicture = RecommendedProfiles_recommendedProfiles_coverPicture_NftImage | RecommendedProfiles_recommendedProfiles_coverPicture_MediaSet;

export interface RecommendedProfiles_recommendedProfiles_dispatcher {
  __typename: "Dispatcher";
  /**
   * The dispatcher address
   */
  address: any;
  /**
   * If the dispatcher can use the relay
   */
  canUseRelay: boolean;
}

export interface RecommendedProfiles_recommendedProfiles_stats {
  __typename: "ProfileStats";
  /**
   * Total follower count
   */
  totalFollowers: number;
  /**
   * Total following count (remember the wallet follows not profile so will be same for every profile they own)
   */
  totalFollowing: number;
  /**
   * Total post count
   */
  totalPosts: number;
  /**
   * Total comment count
   */
  totalComments: number;
  /**
   * Total mirror count
   */
  totalMirrors: number;
  /**
   * Total publication count
   */
  totalPublications: number;
  /**
   * Total collects count
   */
  totalCollects: number;
}

export interface RecommendedProfiles_recommendedProfiles_followModule_UnknownFollowModuleSettings {
  __typename: "UnknownFollowModuleSettings";
}

export interface RecommendedProfiles_recommendedProfiles_followModule_FeeFollowModuleSettings_amount_asset {
  __typename: "Erc20";
  /**
   * Symbol for the token
   */
  symbol: string;
  /**
   * Name of the symbol
   */
  name: string;
  /**
   * Decimal places for the token
   */
  decimals: number;
  /**
   * The erc20 address
   */
  address: any;
}

export interface RecommendedProfiles_recommendedProfiles_followModule_FeeFollowModuleSettings_amount {
  __typename: "ModuleFeeAmount";
  /**
   * The erc20 token info
   */
  asset: RecommendedProfiles_recommendedProfiles_followModule_FeeFollowModuleSettings_amount_asset;
  /**
   * Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal.
   */
  value: string;
}

export interface RecommendedProfiles_recommendedProfiles_followModule_FeeFollowModuleSettings {
  __typename: "FeeFollowModuleSettings";
  /**
   * The follow modules enum
   */
  type: FollowModules;
  /**
   * The collect module amount info
   */
  amount: RecommendedProfiles_recommendedProfiles_followModule_FeeFollowModuleSettings_amount;
  /**
   * The collect module recipient address
   */
  recipient: any;
}

export interface RecommendedProfiles_recommendedProfiles_followModule_ProfileFollowModuleSettings {
  __typename: "ProfileFollowModuleSettings";
  /**
   * The follow module enum
   */
  type: FollowModules;
}

export interface RecommendedProfiles_recommendedProfiles_followModule_RevertFollowModuleSettings {
  __typename: "RevertFollowModuleSettings";
  /**
   * The follow module enum
   */
  type: FollowModules;
}

export type RecommendedProfiles_recommendedProfiles_followModule = RecommendedProfiles_recommendedProfiles_followModule_UnknownFollowModuleSettings | RecommendedProfiles_recommendedProfiles_followModule_FeeFollowModuleSettings | RecommendedProfiles_recommendedProfiles_followModule_ProfileFollowModuleSettings | RecommendedProfiles_recommendedProfiles_followModule_RevertFollowModuleSettings;

export interface RecommendedProfiles_recommendedProfiles {
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
   * Optionals param to add extra attributes on the metadata
   */
  attributes: RecommendedProfiles_recommendedProfiles_attributes[] | null;
  /**
   * Follow nft address
   */
  followNftAddress: any | null;
  /**
   * Metadata url
   */
  metadata: any | null;
  /**
   * Is the profile default
   */
  isDefault: boolean;
  /**
   * The picture for the profile
   */
  picture: RecommendedProfiles_recommendedProfiles_picture | null;
  /**
   * The profile handle
   */
  handle: any;
  /**
   * The cover picture for the profile
   */
  coverPicture: RecommendedProfiles_recommendedProfiles_coverPicture | null;
  /**
   * Who owns the profile
   */
  ownedBy: any;
  /**
   * The dispatcher
   */
  dispatcher: RecommendedProfiles_recommendedProfiles_dispatcher | null;
  /**
   * Profile stats
   */
  stats: RecommendedProfiles_recommendedProfiles_stats;
  /**
   * The follow module
   */
  followModule: RecommendedProfiles_recommendedProfiles_followModule | null;
}

export interface RecommendedProfiles {
  recommendedProfiles: RecommendedProfiles_recommendedProfiles[];
}
