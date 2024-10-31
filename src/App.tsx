import { Grid, GridItem, Show } from "@chakra-ui/react";
import FetchGames from "./components/GameGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main">
        <FetchGames />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">aside</GridItem>
      </Show>
    </Grid>
  );
}

export default App;
