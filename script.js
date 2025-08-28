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

//  call functionality

const callBtn = document.querySelectorAll(".call-btn")
const coinCount = document.getElementById("coin-count")

callBtn.forEach(button =>{
    button.addEventListener("click",function(){
        const card = button.closest(".card");
        const subtitle = card.querySelector(".subtitle").innerText
        const serviceNum = card.querySelector(".number").innerText

        // checking the balence
        if (parseInt(coinCount.innerText)===0) {
            alert("Insufficient Balance")
            return
        }

        // if have sufficient balence

        alert(`📞Calling ${subtitle} ${serviceNum}...`);

        // decreasing 20 conin for each call

        const coinCountNum = parseInt(coinCount.innerText)
        coinCount.innerText = coinCountNum - 20

        // here call histiry
    })
})
