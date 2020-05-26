<template>
    <section class="post-it-container">
        <article class="post-it" :style="{backgroundColor: postit.background, color: postit.color}">
            <div class="save-delete">
                <img  @click="saveInput" src="../assets/save.png" alt="">
                <img  @click="removePostIt(postit)" src="../assets/remove.png" alt="">
            </div>
            <div class="edit">
                <textarea v-model="postit.text" :class="{noteInput: editMode}" v-if="editMode"></textarea>
            </div>
           
        </article>
    </section>
</template>
<script>
export default {
    props: {
        postit: Object,
        editMode: Boolean,
    },
    data() {
        return {
            
        }
    } ,
    
    methods: {
         removePostIt(postit) {
            this.$emit("remove", postit)
        },

        saveInput() {
            this.$emit("saveInput")
        }
    }
}
</script>

<style lang="scss" scoped>
.post-it-container {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-auto-rows: 450px;
    background: rgb(247, 243, 243);
    min-height: 75vh;
    
    
    .post-it {
        max-width: 100%;
        box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        .save-delete {
            display: flex;
            justify-content: flex-end;
            margin-top: .5rem;
            margin-right: .5rem;
            
            img {
                margin: .4rem;
            }
        }
        .edit {
            text-align: center;
            
            textarea {
                background: inherit;
                font-size: 3rem;
                font-weight: bold;
                border: 0;
                height: 85%;
                width: 80%;
                overflow: hidden;
                outline: none;
                align-self: center;
            }
        }
       
        
    }
}
</style>