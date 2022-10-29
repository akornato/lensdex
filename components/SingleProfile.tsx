import { Div, Text, Avatar } from "react-native-magnus";
import { useQuery } from "@apollo/client";
import { singleProfileQuery } from "../queries/singleProfileQuery";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import type { SingleProfileQuery } from "../types/gql/SingleProfileQuery";

type Props = NativeStackScreenProps<RootStackParamList, "SingleProfile">;

export const SingleProfile = ({ route }: Props) => {
  const { loading, error, data } = useQuery<SingleProfileQuery>(
    singleProfileQuery,
    {
      variables: { request: { profileId: route.params.id } },
    }
  );

  if (!data || loading) return <Text>"Loading.."</Text>;
  if (error) return <Text>`Error! ${error.message}`</Text>;

  const { profile } = data;
  const pictureUrl = profile.picture
    ? profile.picture.__typename === "MediaSet"
      ? profile.picture.original.url
      : profile.picture.uri
    : undefined;

  const coverPictureUrl = profile.coverPicture
    ? profile.coverPicture.__typename === "MediaSet"
      ? profile.coverPicture.original.url
      : profile.coverPicture.uri
    : undefined;

  return (
    <Div p="lg" bgImg={coverPictureUrl}>
      <Div p="lg" bg="rgba(255, 255, 255, 0.9)" rounded="lg">
        <Avatar source={pictureUrl} />
        <Text mt="md" fontSize="lg" fontWeight="bold">
          {profile.name}
        </Text>
        <Text mt="md">{profile.bio}</Text>
        <Div mt="md">
          {profile.attributes.map((attr) => (
            <Text key={attr.key}>
              {attr.key}: {attr.value}
            </Text>
          ))}
        </Div>
      </Div>
    </Div>
  );
};
