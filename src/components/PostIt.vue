<template>
    
    
    <section class="post-it-container">
        
        <article class="post-it" :class="{listOfPostIts: listView, displayNone: hidePostIts}"
            :style="{backgroundColor: postIt.background, color: postIt.color}" 
            v-for="(postIt, index) in postIts" 
            :key="index"
            @click="viewAPostIt(postIt)"
            >
            <div class="note-text">
            <p>{{postIt.text}}</p>
            </div>
        </article>
    </section>
   
</template>
<script>
export default {
    props: {
        postits: Array,
        listView: Boolean,
        detailView: Boolean
    },

    data() {
        return {
            hidePostIts: false,
        }
    },
    
    methods: {
        viewAPostIt(postIt) {
            this.hidePostIts = !this.hidePostIts
            this.$emit("viewAPostIt", postIt)
        }, 
    },

    computed: {
        postIts() {
            return this.$store.state.postIts
        },

        getViewCard() {
            return this.$store.getters.getViewCard
        },
    }
}
</script>

<style lang="scss" scoped>
     .post-it-container {
            display: grid;
            grid-template-columns: 30% 30% 30%;
            justify-content: center;
            gap: 20px;
            grid-auto-rows: 150px;
            background: rgb(247, 243, 243);
            min-height: 75vh;

            .displayNone {
                display: none;
            }

            .listOfPostIts {
                grid-column: 2 / span 1;
                grid-row: span 1;
            }

            .post-it {
                cursor: pointer;
                box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                
                .note-text {
                    max-width: 100%;
                    margin: 0 1rem;
                    p {
                        word-break: break-all;
                        font-weight: bold;
                    }

                }
                
            }
            
    }
    
</style>