import { StatusBar } from "expo-status-bar";
import { Div } from "react-native-magnus";
import { RecommendedProfilesList } from "./components/RecommendedProfilesList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "react-native-magnus";

const client = new ApolloClient({
  uri: "https://api.lens.dev",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Div p="lg">
          <RecommendedProfilesList />
          <StatusBar style="auto" />
        </Div>
      </ThemeProvider>
    </ApolloProvider>
  );
}
