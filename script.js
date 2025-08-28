// copy functionality
const copyBtn = document.querySelectorAll(".copy-btn")
const copyCount = document.getElementById("copy-count")

copyBtn.forEach(button =>{
    button.addEventListener("click",function(){
        const card = button.closest(".card");
        const copyInnerText = card.querySelector(".number").innerText

        // cpoy inner text
        navigator.clipboard.writeText(copyInnerText).then(function() {
            alert(`Copied number: ${copyInnerText}`)
            const copyCountNum = parseInt(copyCount.innerText)
            copyCount.innerText = copyCountNum + 1
        })
    })
})



