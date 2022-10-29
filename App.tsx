import { StatusBar } from "expo-status-bar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecommendedProfiles } from "./components/RecommendedProfiles";
import { SingleProfile } from "./components/SingleProfile";

export type RootStackParamList = {
  RecommendedProfiles: undefined;
  SingleProfile: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const client = new ApolloClient({
  uri: "https://api.lens.dev",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="RecommendedProfiles">
            <Stack.Screen
              name="RecommendedProfiles"
              component={RecommendedProfiles}
            />
            <Stack.Screen name="SingleProfile" component={SingleProfile} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ApolloProvider>
  );
}
