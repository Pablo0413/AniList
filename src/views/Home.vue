<template>
  <overlay class="homepage-overlay">
    <div class="content-box">
      <h1 class="content_title">Anime Search</h1>
      <h2 class="content_subtitle">Here we can try to search Naruto.. ;)</h2>
      <form class="search" @submit.prevent="submit">
        <IconVue name="search" size=20 />
        <input type="text" placeholder="Search..." v-model="query" />
    </form>
    </div>
  </overlay>
</template>

<script>
import IconVue from '@/components/Icon.vue'
import overlay from '@/components/Overlay.vue';

export default {
  name: 'Home',
  components: {
    overlay,
    IconVue,
  },
  data() {
    return {
      query: '',
    };
  },
  methods: {
    submit() {
        this.$router.push({
            name: 'Search',
            query: { q: this.query },
        });
      }
    }
}
</script>

<style scoped lang="scss">
.homepage-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/wallpaper/index.jpg');
  background-position: center;
  background-size: cover;
}

.content-box {
  color: white;
  backdrop-filter: blur(32px);
  text-align: center;
  padding: 50px;
  border-radius: 5px;
  .content_title {
    font-size: 40px;
    margin-bottom: 30px;
  }
  .content_subtitle {
    font-size: 25px;
  }
  .search {
    display: inline-block;
    margin: 80px 0;
    padding: 7px 8px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    input {
      border: 0;
      outline: 0;
      color: white;
      padding: 0;
      width: 350px;
      background-color: transparent;
      font-size: 15px;
      margin-left: 15px;
    }
    img {
      margin-left: 5px;
    }
    ::placeholder {
    color: rgba(255, 255, 255, 0.5);
    }
    ::selection {
    background-color: rgba(255, 255, 255, 0.5);
    }
  }
  a {
    border-bottom: 0;
  }
  
}

</style>


