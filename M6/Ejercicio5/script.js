const Pokemon = {
  data() {
    return {
      name: "", // Nombre del Pokémon a buscar
      pokemon: {}, // Datos del Pokémon que se obtendrán de la API
    };
  },
  methods: {
    async obtenerPokemon() {
      try {
        // Realiza una solicitud a la API de Pokémon con el nombre o número ingresado
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${this.name.toLowerCase()}`
        );
        // Almacena los datos obtenidos en el objeto pokemon
        this.pokemon = response.data;
      } catch (error) {
        console.error("No se encuentra el pokemon buscado", error);
        // Limpia los datos del Pokémon si no se encuentra
        this.pokemon = {};
      }
    },
    limpiarBusqueda() {
      this.name = "";
      this.pokemon = {};
    },
  },
  template: `
    <div class="container">
      <h1>Bienvenido a Pokedex</h1>
      <p>Busca tu pokemon por nombre o su número</p>
      <label for="">Nombre o número</label>
      <input v-model="name" placeholder="Ej: pikachu o 25" />
      <button @click="obtenerPokemon">Buscar</button>
      <button @click="limpiarBusqueda">Limpiar</button> 
    </div>

    <div class="container-pokemon" v-if="pokemon.name">
      <div class="pokemon">
        <h1>{{ pokemon.name }}</h1>
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          alt="Pokemon image"
        />
        <p>
          <strong>Tipo:</strong> {{ pokemon.types.map(type =>
          type.type.name).join(', ') }}
        </p>
        <p><strong>Altura:</strong> {{ pokemon.height }}</p>
        <p><strong>Peso:</strong> {{ pokemon.weight }}</p>
        <p><strong>Base Experience:</strong> {{ pokemon.base_experience }}</p>
      </div>
    </div>
  `,
};

// Crea la aplicación de Vue y monta el componente Pokemon en el elemento con el ID "app"
Vue.createApp(Pokemon).mount("#app");
