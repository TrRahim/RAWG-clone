import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="gold">
        nav
      </GridItem>
      <GridItem area="main" bg="blue">
        main
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow">
          aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
