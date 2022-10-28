import { FlatList } from "react-native";
import { Div, Text, Avatar } from "react-native-magnus";
import { A } from "@expo/html-elements";
import { useQuery } from "@apollo/client";
import { recommendProfiles } from "../queries/recommended-profiles";
import type { RecommendedProfiles } from "../types/gql/RecommendedProfiles";

export const RecommendedProfilesList = () => {
  const { loading, error, data } =
    useQuery<RecommendedProfiles>(recommendProfiles);

  const profiles = data?.recommendedProfiles;

  if (!data || loading) return <Text>"Loading.."</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  return (
    <FlatList
      data={profiles}
      renderItem={({ item: profile }) => {
        return (
          profile.name && (
            <Div row mb="lg">
              <Avatar
                source={
                  profile.picture
                    ? profile.picture.__typename === "MediaSet"
                      ? profile.picture.original.url
                      : profile.picture.uri
                    : undefined
                }
              />
              <Div ml="lg">
                <Text fontSize="lg" fontWeight="bold">
                  {profile.name}
                </Text>
                <Text mt="md">{profile.bio}</Text>
                <Div>
                  {profile.attributes.map((attr) => {
                    if (attr.key === "website") {
                      return <A href={`${attr.value}`}>{attr.value}</A>;
                    } else if (attr.key === "twitter") {
                      return (
                        <A href={`https://twitter.com/${attr.value}`}>
                          @{attr.value}
                        </A>
                      );
                    }
                    return <Text>{attr.value}</Text>;
                  })}
                </Div>
              </Div>
            </Div>
          )
        );
      }}
    />
  );
};
