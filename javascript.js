document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const status = document.querySelector("#status");
    const formBtn = document.querySelector("form>button")

    const displayStatus = (res)=>{
        status.innerHTML = res.status;
        status.style.display = "block";
        formBtn.innerHTML = "Send";
        form.reset()
        setTimeout(() => {
            status.style.display = "none";
        }, 3000);
    }

    const newReq = post => {
        const options = {
            method: 'POST',
            body: JSON.stringify(post),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }
        return fetch(`/contact`, options)
            .then(res => res.json())
            .then(res => displayStatus(res))
            .catch(error => console.log(error));
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        formBtn.innerHTML = "Se trimite..."
        let post = {
            name: form.elements["name"].value,
            email: form.elements["email"].value,
            message: form.elements["message"].value
        }

        newReq(post)

    })


})

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

// Update the classes and ids according to your structure
sr.reveal(`
    .intro, .comand,
    #despre .img-about, #despre .text-about,
    #meniu .box2, #meniu .box2-1, #meniu .box2-2, #meniu .box2-3, #meniu .box2-4, #meniu .box2-5, #meniu .box2-6,
    #contact .contact-box, #contact .contact-box2, #contact .contact-box3`, {
    interval: 200
});
