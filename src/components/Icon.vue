<template>
    <img :height="size" :src="require(`../assets/icons/${name}.svg`)" />
</template>

<script>
    export default {
        name: 'icon',
        props: {
            name: String,
            size: Number,
        },
    };
</script>

<style scoped lang="scss">
img {
    margin-top: 1px;
    user-select: none;
}
</style>