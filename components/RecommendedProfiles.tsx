import { FlatList, TouchableOpacity } from "react-native";
import { Div, Text, Avatar } from "react-native-magnus";
import { useQuery } from "@apollo/client";
import { recommendedProfilesQuery } from "../queries/recommendedProfilesQuery";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import type { RecommendedProfilesQuery } from "../types/gql/RecommendedProfilesQuery";

type Props = NativeStackScreenProps<RootStackParamList, "RecommendedProfiles">;

export const RecommendedProfiles = ({ navigation }: Props) => {
  const { loading, error, data } = useQuery<RecommendedProfilesQuery>(
    recommendedProfilesQuery
  );

  const profiles = data?.recommendedProfiles;

  if (!data || loading) return <Text>"Loading.."</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  return (
    <FlatList
      data={profiles}
      renderItem={({ item: profile }) => {
        const pictureUrl = profile.picture
          ? profile.picture.__typename === "MediaSet"
            ? profile.picture.original.url
            : profile.picture.uri
          : undefined;
        return (
          profile.name && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SingleProfile", { id: profile.id })
              }
            >
              <Div row p="lg">
                <Avatar source={pictureUrl} />
                <Div ml="lg">
                  <Text fontSize="lg" fontWeight="bold">
                    {profile.name}
                  </Text>
                  <Text mt="md">{profile.bio}</Text>
                </Div>
              </Div>
            </TouchableOpacity>
          )
        );
      }}
    />
  );
};
