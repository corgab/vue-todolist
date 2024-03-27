

const { createApp } = Vue

createApp({
data() {
    return {
    message: 'Hello Vue!',
    item: { text: "ciao", done: true },
    items: [
        {
            text:"ciao",
            done: true
        },
        {
            text:"nonciao",
            done: false
        },
        {
            text:"ciao",
            done: true
        },
    ]
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
    removeTodo() {
        this.items.splice(0)
    },
    addArray() {
        pushatore = { text: "", done: true}
        const textEl = document.getElementById("text")
        const textVal = textEl.value
        pushatore.text = textVal
        if(textVal !== "") {
            this.items.push(pushatore)
        }
    }
}
}).mount('#app')



