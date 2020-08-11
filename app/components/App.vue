<template>
  <Page>
    <ActionBar title="Rick and Morty"/>
    <StackLayout backgroundColor="#dce2e9" class="">
      <Label
        text="Top Characters"
        fontWeight="bold"
        textAlignment="center"
        fontSize="30"
        marginTop="10"
        marginBottom="5"
      />
      <ListView class="images" for="character in characters">
        <v-template>
          <StackLayout backgroundColor="#f0e14a" class="images__item-wrapper">
            <Image :src="character.image" class="images__item-image" />
            <Label :text="character.name" class="images__item-name" />
            <StackLayout fontSize="15" marginLeft="10" marginTop="8">
              <Label marginBottom="2" >
                <Span text="Gender: " /> <Span :text="character.gender" />
              </Label>
              <Label marginBottom="2">
                <Span text="Status: " /> <Span :text="character.status" />
              </Label>
              <Label>
                <Span text="Specie: " /> <Span :text="character.species" />
              </Label>
            </StackLayout>
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      characters: []
    };
  },
  methods: {
    getCharacters: function() {
      this.$axios
        .get("character/")
        .then(response => {
          this.characters = response.data.results;
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getCharacters();
  },
};
</script>

<style lang="scss" scoped>
ActionBar {
  background-color: green;
  color: #ffffff;
}

ListView{
  height: 100%;
}
.images {
  &__item-wrapper {
    width: 80%;
    height: 450;
    margin-top: 10;
    margin-bottom: 20;
  }
  &__item-image {
    height: 300;
    width: 100%;
  }
  &__item-name {
    margin-top: 10;
    font-size: 20;
    text-align: center;
  }
}
</style>
