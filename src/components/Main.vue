<template>
    <section class="container">
        <header>
            <div>
                <img @click="showListView" src="../assets/view.png" alt="" v-if="!detailView">
            </div>
            <div>
                <img @click="addPostIt" src="../assets/create.png" alt="" v-if="!detailView">
            </div>
            <div>
                <img @click="noteInput" src="../assets/edit.png" alt="" v-if="detailView">
            </div>
            <div>
                <img @click="changeFontColor" src="../assets/pencil.png" alt="" v-if="detailView">
            </div>
            <div>
                <img @click="changeColor" src="../assets/marker.png" alt="" v-if="detailView">
            </div>
        </header>
        <h1>GOODNOTES POST-IT NOTES</h1>
        <PostIt v-if="!detailView" @viewAPostIt="viewAPostIt" :postits="postits" :listView="listView" :detailView="detailView"/>
        <ViewPostit @saveInput="saveInput" v-else-if="detailView"  :postit="postit" @remove="remove" :editMode="editMode"/>
        
    </section>    
</template>
<script>
    import PostIt from './PostIt'
    import ViewPostit from './ViewPostit'

export default {
    props: {
          
    },
    components: {
        PostIt,
        ViewPostit
    },

    data() {
        return {
            listView: false,
            detailView: false,
            editMode: false,
            postit: Object,
        }
    },
    methods: {
        addPostIt() {
            this.$store.dispatch('add');
        },

        showListView() {
            this.listView = !this.listView
        },

        viewAPostIt(postIt) {
            this.detailView = !this.detailView
            this.postit = postIt
        },

        remove(postIt) {
            this.$store.dispatch('remove', postIt)
            this.detailView = false;
        },

        changeColor() {
            this.$store.dispatch('changeColor', this.postit)
        },

        changeFontColor() {
            this.$store.dispatch('changeFontColor', this.postit)
        },


        saveInput() {
            this.detailView = false;
            this.editMode = false;
        },

        noteInput(){
            this.editMode = !this.editMode
        }
    },

    computed: {
        getViewPostit() {
            return this.$store.getters.getViewPostit
        },

        postits() {
            return this.$store.state.postIts
        }
    }
    
}
</script>
   
<style lang="scss">
    .container {
        width: 40vw;
        margin: auto;

        .post {
            display: none
        }
        header {
            display: flex;
            flex-direction: row;
            justify-content: center;
            background: rgb(230, 226, 226);
            border-bottom: solid gray 2rem;

            div {
                margin: 0;
                img {
                    width: 7rem;
                    cursor: pointer;
                }
            }
        }
        h1 {
            font-size: 2rem;
            font-weight: bold;
            margin: 0;
            padding: 1rem 0;
            background: rgb(247, 243, 243);
        }

       
    }
</style>