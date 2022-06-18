<template>
    <div class="content">
        <div class="title">{{ title }}</div>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'Contet',
    props: ['title']
}
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8%;
}

.title {
    font-size: 45px;
    margin-bottom: 20px;
}
</style>
