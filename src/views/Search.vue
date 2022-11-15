<template>
    <div class="row w-80 mt-5">
        <h2 class="search_title mb-4">Search results for '{{ $route.query.q }}'</h2>
       <LoaderVue class="m-5" v-if="loading" />
       <div v-if="!loading">
        <router-link
        v-for="result in results"
        :key="result.id"
        :to="`/Anime/${result.id}`"
        class="search-item">
        <div class="search-result">
            <img width="100" :src="result.attributes.posterImage.tiny" class="poster" alt="Poster">
            <div class="search-result-details">
                <h2 class="anime_title">{{ result.attributes.canonicalTitle }}</h2>
                <h3 class="anime_subtitle">{{ result.attributes.showType }}</h3>
            </div>
        </div>
    </router-link>
    </div>
</div>
</template>

<script>
import LoaderVue from '@/components/Loader.vue';
import axios from 'axios';

const URL = `https://kitsu.io/api/edge/anime?filter[text]=`



export default {
    name: 'Search',
    components: {
        LoaderVue,
    },
    data() {
        return {
            results: [],
            loading: true,
        };
    },
    methods: {
       async searchAnime() {
            const res = await fetch(URL + this.$route.query.q);
            const results = await res.json();
            this.results = results.data;
            console.log(results);
        },
        async reload() {
            this.loading = true;
            let query = this.$route.query.q;
            if (query == null || query == '') return;
            const res = await fetch(URL + this.$route.query.q);
            const results = await res.json();
            this.results = results.data;
            console.log(results);
            this.loading = false;
        },
    },
    mounted() {
        this.searchAnime()
        this.reload();
    },
    watch: {
        '$route.params': function () {
            this.reload();
        }
    },

}
</script>

<style scoped lang="scss">
    router-link {
        display: flex;    
    }
    .search-result {
        display: flex;
        flex-flow: row;
        align-items: center;
        padding: 12px;
        margin-top: 12px;
        margin-bottom: 8px;
        margin-left: 48px;
        margin-right: 48px;
        transition-duration: 0.3s;
        .poster {
            border-radius: 3px;
        }
        
    }
    .search-result-details {
            margin-left: 48px;
            .anime_title {
                color: #6ae49f;
                font-weight: 500;
                font-size: 28px;
                margin-bottom: 15px;
            }
            .anime_subtitle {
                font-weight: 300;
                font-size: 18px;
            }
        }
</style>