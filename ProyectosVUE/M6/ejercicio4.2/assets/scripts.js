const app = {
  data() {
    return {
      images: [
        {
          url: "https://images.dog.ceo/breeds/kelpie/n02105412_3416.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          author: "autor 1",
        },
        {
          url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_3400.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          author: "autor 2",
        },
        {
          url: "https://images.dog.ceo/breeds/samoyed/n02111889_1314.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          author: "autor 3",
        },
      ],
      visibleStart: 0,
      visibleEnd: 2,
      selectedImage: null,
    };
  },
  computed: {
    visibleImages() {
      return this.images.slice(this.visibleStart, this.visibleEnd);
    },
  },
  methods: {
    handleScroll(event) {
      const container = event.target;
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        this.visibleStart = Math.min(
          this.visibleStart + 2,
          this.images.length - 2
        );
        this.visibleEnd = Math.min(this.visibleEnd + 2, this.images.length - 1);
      } else if (container.scrollLeft === 0) {
        this.visibleStart = Math.max(this.visibleStart - 2, 0);
        this.visibleEnd = Math.max(this.visibleEnd - 2, 2);
      }
    },
    selectedimages(image) {
      this.selectedImage = image;
    },
    closeDescription() {
      this.selectedImage = null;
    },
  },
  template: `
   <div id="app">
      <div class="title">Galería de Imágenes de Perros</div>
      <div class="container-gallery">
        <div class="scroll-container" @scroll="handleScroll">
          <div
            v-for="(image, index) in visibleImages"
            :key="index"
            class="image-item"
            @click="selectedimages(image)"
          >
            <img :src="image.url" :alt="'Imagen ' + (index + 1)" />
          </div>
        </div>

        <div v-if="selectedImage" class="description-modal">
          <div class="modal-content">
            <button id="close-button" @click="closeDescription">&times;</button>
            <img :src="selectedImage.url" :alt="selectedImage.description" />
            <p>Autor: {{selectedImage.author}}</p>
            <p>Descripción: {{selectedImage.description}}</p>
          </div>
        </div>
      </div>
    </div>
`,
};

Vue.createApp(app).mount("#app");
