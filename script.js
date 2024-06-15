let initialPath = "M 0 30 Q 500 30 1000 30"
let finalPath = "M 0 30 Q 500 30 1000 30"
let height = screen.height;
let audio = new Audio("./sound/A.mp3");
const sounds = ["E","A","D","G","B","E2"]
let audioElements =[]
for (let index = 0; index < 6; index++) {
    let audio = new Audio(`./sound/${sounds[index]}.mp3`);
    audioElements.push(audio);
}
for (let index = 1; index <= 6; index++) {
    let string = document.querySelector(`#string${index}`);
    let cord = string.getBoundingClientRect();
    string.addEventListener("mousemove", (event) => {
        console.log("play")
        let initialPath = `M 0 30 Q ${event.clientX - cord.left} ${event.clientY - cord.top} 1000 30`;
        gsap.to(`#string${index} svg path`, {
            attr: { d: initialPath },
            duration: 0.3,
            ease: "power3.out"
        });
    });
    string.addEventListener("mouseleave", () => {
        audioElements[index-1].currentTime =2;
        audioElements[index-1].play()
        gsap.to(`#string${index} svg path`, {
            attr: { d: finalPath }, 
            duration: 0.8,
            ease: "elastic.out(1,0.1)"
        });
    });
}

