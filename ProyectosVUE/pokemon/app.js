const { createApp, defineComponent } = Vue;

const Pokemon = defineComponent({
  data() {
    return {
      pokemon: {},
      pokemonId: 132, // ID de Ditto
    };
  },
  mounted() {
    this.fetchPokemon();
  },
  methods: {
    async fetchPokemon() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`
        );
        this.pokemon = response.data;
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    },
  },
  template: `
        <div class="pokemon" v-if="pokemon.name">
            <h1>{{ pokemon.name }}</h1>
            <img :src="pokemon.sprites.front_default" alt="Pokemon image" />
            <p><strong>Height:</strong> {{ pokemon.height }}</p>
            <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
            <p><strong>Base Experience:</strong> {{ pokemon.base_experience }}</p>
            <h2>Abilities</h2>
            <ul>
                <li v-for="ability in pokemon.abilities" :key="ability.ability.name">
                    {{ ability.ability.name }} (Hidden: {{ ability.is_hidden }})
                </li>
            </ul>
        </div>
    `,
});

createApp({
  components: {
    Pokemon,
  },
}).mount("#app");
