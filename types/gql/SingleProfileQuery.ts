/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SingleProfileQueryRequest } from "./globalTypes";

// ====================================================
// GraphQL query operation: SingleProfileQuery
// ====================================================

export interface SingleProfileQuery_profile_attributes {
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

export interface SingleProfileQuery_profile_picture_NftImage {
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

export interface SingleProfileQuery_profile_picture_MediaSet_original {
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

export interface SingleProfileQuery_profile_picture_MediaSet {
  __typename: "MediaSet";
  /**
   * Original media
   */
  original: SingleProfileQuery_profile_picture_MediaSet_original;
}

export type SingleProfileQuery_profile_picture = SingleProfileQuery_profile_picture_NftImage | SingleProfileQuery_profile_picture_MediaSet;

export interface SingleProfileQuery_profile_coverPicture_NftImage {
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

export interface SingleProfileQuery_profile_coverPicture_MediaSet_original {
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

export interface SingleProfileQuery_profile_coverPicture_MediaSet {
  __typename: "MediaSet";
  /**
   * Original media
   */
  original: SingleProfileQuery_profile_coverPicture_MediaSet_original;
}

export type SingleProfileQuery_profile_coverPicture = SingleProfileQuery_profile_coverPicture_NftImage | SingleProfileQuery_profile_coverPicture_MediaSet;

export interface SingleProfileQuery_profile {
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
  attributes: SingleProfileQuery_profile_attributes[] | null;
  /**
   * The picture for the profile
   */
  picture: SingleProfileQuery_profile_picture | null;
  /**
   * The cover picture for the profile
   */
  coverPicture: SingleProfileQuery_profile_coverPicture | null;
}

export interface SingleProfileQuery {
  profile: SingleProfileQuery_profile | null;
}

export interface SingleProfileQueryVariables {
  request: SingleProfileQueryRequest;
}
