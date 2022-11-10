<template>
    <form class="nav-search" @click="submit">
        <IconVue name="search" size="20" />
        <input type="text" placeholder="Search..." v-model="query" />
    </form>
</template>

<script>
import IconVue from './Icon.vue';
export default {
    name: 'NavbarSearch',
    data() {
        return {
            query: this.$route.query.q || '',
        };
    },
    components: {
        IconVue,
    },
    methods: {
        submit() {
            this.$router.push({
                name: 'Search',
                query: { q: this.query}
            });
        },
    },
};
</script>

<style scoped lang="scss">
    .nav-search{
        margin: 8px, 16px;
        padding: 3px, 8px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.2);
        input {
            border: 0;
            outline: 0;
            color: white;
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
            background: rgba(255, 255, 255, 0.4);
        }
    }

</style>