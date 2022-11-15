<template>
    <div>
        <div v-if="!anime">loading...</div>
        <div v-else>
            <section class="anime-banner" :style="{
                'background-image': `url('${anime.coverImage.original}')`,
            }">
            </section>
            <section class="anime-overview">
                <div class="anime-header w-80">
                    <div class="anime-poster" :style="{
                        'background-image': `url('${anime.posterImage.small}')`,
                    }"></div>
                    <div class="anime-meta w-80">
                        <section class="anime_box">
                            <h2 class="anime-tittle">{{ anime.canonicalTitle }}</h2>
                            <h3 class="anime-subtittle">{{ anime.titles.ja_jp }}</h3>
                        </section>
                    </div>
                </div>
                <section class="anime-synopsis w-80 raw-text">
                    {{ anime.synopsis }}
                </section>
            </section>
            <section class="anime-details">
                    <div class="col-auto w-80">
                        <div class="details-pane">
                            <h4 class="mt-0 panel_title">Romaji Title</h4>
                            {{ anime.titles.en_jp }}

                            <h4 class="panel_title">Status</h4>
                            {{ status }}

                            <h4 class="panel_title">Type</h4>
                            {{ anime.showType }}

                            <h4 class="panel_title">Ratings</h4>
                            {{ anime.averageRating }}

                            <h4 class="panel_title">Release</h4>
                            {{ anime.startDate }}

                            <h4 class="panel_title">Duration</h4>
                            {{ anime.episodeLength }} (min per episode)

                            <h4 class="panel_title">Episodes</h4>
                            {{ anime.episodeCount }}

                            <h4 class="panel_title">Age rating</h4>
                            {{ anime.ageRatingGuide }}

                            <h4 class="panel_title">NSFW</h4>
                            {{ anime.nsfw ? 'Yes' : 'No' }}
                        </div>
                        <div class="anime-trailer" v-if="anime.youtubeVideoId != null" :style="{
                            'background-image': `url('https://i.ytimg.com/vi/${anime.youtubeVideoId}/hqdefault.jpg')`
                        }">
                            <a :href="`https://youtu.be/${anime.youtubeVideoId}`" target="_blank"
                                class="anime-trailer-link">
                                <IconVue name="youtube" size="30" /> &nbsp;&nbsp;Watch
                                trailer
                            </a>
                        </div>
                    </div>


            </section>
        </div>
    </div>

</template>

<script>
import IconVue from '@/components/Icon.vue';
export default {
    name: 'Anime',
    components: {
        IconVue,
    },
    data() {
        return {
            anime: null,
            rel: null,
        }
    },
    async mounted() {
        const animeId = this.$route.params.id;
        const res = await fetch(`https://kitsu.io/api/edge/anime/${animeId}`);
        const anime = await res.json();
        this.anime = anime.data.attributes;
        this.rel = anime.data.relationships;
        console.log(anime);


    },
    methods: {

    },
    computed: {
        status() {
            let status = this.anime.status;
            switch (status) {
                case 'airing':
                    return 'Airing';
                case 'finished':
                    return 'Finished';
                case 'toBeAnnounced':
                    return 'To be announced';
                case 'unreleased':
                    return 'Unreleased';
                case 'upcoming':
                    return 'Upcoming';
            }
            return 'Unknown';
        },
    }
}
</script>

<style scoped lang="scss">
.raw-text {
    white-space: pre-wrap;
}

.w-80 {
    width: 80%;
    margin: auto;
}

.anime-overview {
    width: 100%;
    box-shadow: 0px -3px 4px 0px rgba(0, 0, 0, 0.1);
}

.anime-banner {
    background-position: center;
    background-color: #eeeeee;
    background-size: cover;
    width: 100%;
    height: 350px;
}


.anime-header {
    display: flex;
    margin: auto;
}

.anime-meta {
    height: 140px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    margin-left: 48px;
}

.anime-tittle {
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 15px;
    color: #6ae49f;
}

.anime-subtittle {
    font-weight: 500;
    font-size: 17px;
    color: #707070;
}

.anime-poster {
    background-position: center;
    background-color: #eeeeee;
    width: 255px;
    height: 360px;
    margin-top: -220px;
    border-radius: 5px;
    background-size: cover;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
}

.anime-synopsis {
    font-size: 16px;
    margin-top: 32px;
    padding-bottom: 32px;
    color: #707070;
    line-height: 24px;
    font-weight: 100;
}

.anime-details {
    padding-top: 16px;
    background-color: #f9f9f9;
}

.details-pane {
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.15);
    background: white;
    margin-bottom: 32px;
    border-radius: 5px;
    margin-top: 16px;
    padding: 28px 24px;
    width: 320px;
}

.anime-trailer {
    width: 50%;
    height: 500px;
    border-radius: 5px;
    background-position: center;
    background-size: cover;
    margin: 0 auto;
    :hover {
        transition-duration: 0.3s;
        opacity: 0.95;
    }
}

.col-auto {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    align-items: center;
}

.panel_title {
    font-size: 16px;
    font-weight: 700;
    margin-top: 16px;
    margin-bottom: 5px;
    color: #212529;
    
}

.anime-trailer-link {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    backdrop-filter: blur(20px);
    text-align: center;
    padding-top: 195px;
    line-height: 110px;
    color: white;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 25px;
    transition-duration: 0.3s;
}
</style>