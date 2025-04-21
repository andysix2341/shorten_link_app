const input = document.querySelector('input')
const form = document.querySelector('form')

form.addEventListener('submit', () => {
    if (input.value === '') return alert('please input link in input field')
    postLink()
    input.value = null
})


async function postLink() {
    try {
        const res = await fetch('http://localhost:3000/upload', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                originalLink: input.value
            })
        })
        if (!res.ok) {
            throw new Error("Something wen't wrong")
        }
        const data = await res.json()
        console.log(data)
    } catch(err) {
        console.error(err)
    }
}