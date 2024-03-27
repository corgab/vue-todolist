

const { createApp } = Vue

createApp({
data() {
    return {
    message: 'Hello Vue!',
    item: { text: "ciao", done: true },
    x: "x",
    removeTodo: "d-none"
    }
},
methods: {
    isItemTrue() {
        let textStorto = ""
        if(this.item.done == true) {
            textStorto = "testostorto";
        }
        return textStorto
    },

}
}).mount('#app')

//quando clicchi su x todo viene rimossa

