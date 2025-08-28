// copy functionality
const copyBtn = document.querySelectorAll(".copy-btn")

copyBtn.forEach(button =>{
    button.addEventListener("click",function(){
        const card = button.closest(".card");
        const copyInnerText = card.querySelector(".number").innerText

        // cpoy inner text
        navigator.clipboard.writeText(copyInnerText).then(function() {
            alert(`Copied number: ${copyInnerText}`)
        })
    })
})
