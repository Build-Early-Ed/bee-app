<template>
<!--Create Team Card component to add team members to About Page -->
        <b-col>
            <b-card
            :title="name"
            :img-src="src/assets/images/unnamed.png"
            img-alt="Job Profile"
            img-top
            tag="article"
            style="max-width:20rem"
            class="mb-2"
            >
            <b-card-text
             :text="id">
            </b-card-text>
            </b-card>
            </b-col>
</template>

<script>

export default {
    props: ["name"]

}
</script>

<style lang="scss" scoped>

</style>