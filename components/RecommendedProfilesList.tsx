import { StyleSheet, FlatList, View, Text } from "react-native";
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
        console.log(`Profile ${profile.id}:`, profile);
        return (
          <View>
            <Text style={styles.title}>{profile.name}</Text>
            <Text>{profile.bio}</Text>
            <View>
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
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
