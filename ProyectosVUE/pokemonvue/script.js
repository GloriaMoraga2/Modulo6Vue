const app = Vue.createApp({
    data() {
        return {
            showPokemon: false,
            name: "",
            pokemon: {} 
        }
    },
    methods: {
        getPokemonDetails() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
                .then(response => {
                    this.pokemon = response.data;
                    this.showPokemon = true; 
                })
                .catch(error => {
                    console.error(error);
                    alert("no encontramos tu pokemon :(");
                });
        }
   
    },
    computed:{
        img(){
            return this.pokemon.sprites.front_default
        }
    },
    template: `<div>
        <div class="center-container" v-if="!showPokemon">
            <label for="">Ingresa el nombre de tu pokemon</label><br>
            <input v-model="name" />
            <button @click="getPokemonDetails">Buscar Pokémon</button>
        </div>

        <div class="center-container" v-else>
        <div class="pokemon-card">
            <h2>{{ pokemon.name }}</h2>
            <img :src="img" alt="Imagen de {{ pokemon.name }}" />
            <div class="pokemon-details">
            <p>Tipo: {{ pokemon.types.map(type => type.type.name).join(', ') }}</p>
            <p>Altura: {{ pokemon.height }}</p>
            <p>Peso: {{ pokemon.weight }}</p>
            </div>
        </div>
        <button @click="showPokemon = false">Volver</button>
        </div>
    </div>`
});

app.mount('#app');