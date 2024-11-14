//vue 3

const app = {
  data() {
    return {
      images: [
        {
          url: "https://images.dog.ceo/breeds/hound-basset/n02088238_9015.jpg",
          description:
            "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga nisi cum eaque deserunt nihil, sapiente officia, consectetur facere magnam doloribus reiciendis, labore velit? Voluptates earum ea fuga aliquam debitis.2",
          author: "autor 1",
        },
        {
          url: "https://images.dog.ceo/breeds/samoyed/n02111889_2366.jpg",
          description:
            "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga nisi cum eaque deserunt nihil, sapiente officia, consectetur facere magnam doloribus reiciendis, labore velit? Voluptates earum ea fuga aliquam debitis.2",
          author: "autor 2",
        },
        {
          url: "https://images.dog.ceo/breeds/dhole/n02115913_2542.jpg",
          description:
            "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga nisi cum eaque deserunt nihil, sapiente officia, consectetur facere magnam doloribus reiciendis, labore velit? Voluptates earum ea fuga aliquam debitis.2",
          author: "autor 3",
        },
        {
          url: "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1659.jpg",
          description:
            "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga nisi cum eaque deserunt nihil, sapiente officia, consectetur facere magnam doloribus reiciendis, labore velit? Voluptates earum ea fuga aliquam debitis.2",
          author: "autor 4",
        },
        {
          url: "https://images.dog.ceo/breeds/chihuahua/n02085620_3423.jpg",
          description:
            "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga nisi cum eaque deserunt nihil, sapiente officia, consectetur facere magnam doloribus reiciendis, labore velit? Voluptates earum ea fuga aliquam debitis.2",
          author: "autor 5",
        },
        {
          url: "https://images.dog.ceo/breeds/terrier-toy/n02087046_2957.jpg",
          description:
            "lorenLorem ipsum dolor sit amet consectetur adipisicing elit. Modi fuga nisi cum eaque deserunt nihil, sapiente officia, consectetur facere magnam doloribus reiciendis, labore velit? Voluptates earum ea fuga aliquam debitis.2",
          author: "autor 6",
        },
      ],
      selectedImage: null,
    };
  },
  methods: {
    showDescription(image) {
      this.selectedImage = image;
    },
    closeDescription() {
      this.selectedImage = null;
    },
  },

  template: `
        <div>
            <div class="gallery-container">
                <div 
                    v-for="(image, index) in images" 
                    :key="index" 
                    class="image-item" 
                    @click="showDescription(image)"
                >
                    <img :src="image.url" :alt="'Imagen ' + (index + 1)">
                </div>
            </div>

            <div v-if="selectedImage" class="description-modal">
                <div class="modal-content">
                    <span id="close-button" @click="closeDescription">&times;</span>
                    <img :src="selectedImage.url" :alt="selectedImage.description">
                    <p>Autor: {{ selectedImage.author }}</p>
                    <p>{{ selectedImage.description }}</p>
                </div>
            </div>
        </div>
        `,
};

Vue.createApp(app).mount("#app");
