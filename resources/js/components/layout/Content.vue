<template>
    <div class="content">
        <div class="title">{{ title }}</div>
        <b-card class="card">
            <slot></slot>
        </b-card>
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
}

.title {
    font-size: 45px;
    margin-bottom: 20px;
}

.card {
    width: 80%;
}
</style>
