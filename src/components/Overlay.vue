<template>
    <div class="fullscreen-overlay">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'overlay',
    mounted() {
        document.body.classList.add('no-scrollbar');
    },
    unmounted() {
        document.body.classList.remove('no-scrollbar')
    }
}
</script>

<style scoped lang="scss">
.fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 300;
    background-color: #fff;
}
</style>