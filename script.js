// heart incearing functionality

const heartIcon = document.querySelectorAll(".heart-icon")
const heartCount = document.getElementById("heart-count")

heartIcon.forEach(button =>{
    button.addEventListener("click",function(){
        const heartCountNum = parseInt(heartCount.innerText)
        heartCount.innerText = heartCountNum + 1

    })
})



// copy functionality
const copyBtn = document.querySelectorAll(".copy-btn")
const copyCount = document.getElementById("copy-count")

copyBtn.forEach(button =>{
    button.addEventListener("click",function(){
        const card = button.closest(".card");
        const copyInnerText = card.querySelector(".number").innerText

        // cpoy inner text and add 1 in copy count
        navigator.clipboard.writeText(copyInnerText).then(function() {
            alert(`Number copid: ${copyInnerText}`)
            const copyCountNum = parseInt(copyCount.innerText)
            copyCount.innerText = copyCountNum + 1
        })
    })
})

//  call functionality

const callBtn = document.querySelectorAll(".call-btn")
const coinCount = document.getElementById("coin-count")
const callingDetailContainerMain = document.getElementById("calling-detail-container-main")




callBtn.forEach(button =>{
    button.addEventListener("click",function(){
        const card = button.closest(".card");
        const subtitle = card.querySelector("p").innerText
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


        const callingDetailContainer = document.createElement("div")
        callingDetailContainer.className = "flex justify-between items-center my-2"

        //calling detail parent
        const callingDetailDiv = document.createElement("div")


        //adding the call title in call history section
        const callTitle = document.createElement("p")
        callTitle.className = "text-[#5C5C5C] text-[1.1rem]"
        callTitle.innerText = subtitle
        callingDetailDiv.appendChild(callTitle)

        //adding the number in call history section
        const callNum = document.createElement("h2")
        callNum.className = "text-xl md:text-[1.25rem] font-bold py-2 number"
        callNum.innerText = serviceNum
        callingDetailDiv.appendChild(callNum)

        // time div
        const callingTimeDiv = document.createElement("div")



        //  get current time
        const currentTime = new Date()
        const currentLocaleTime = currentTime.toLocaleTimeString()


        //adding the time in call history section
        const time = document.createElement("h1")
        time.className = "text-[#5C5C5C] text-[1.1rem] font-[Roboto]"
        time.innerText = currentLocaleTime
        callingTimeDiv.appendChild(time)



        callingDetailContainer.appendChild(callingDetailDiv)
        callingDetailContainer.appendChild(callingTimeDiv)

        // adding the calling-detail to the parent div (calling-detail-container)
        callingDetailContainerMain.appendChild(callingDetailContainer)


    })
})


// clear button functionality

const clearBtn = document.getElementById("clear-btn")

clearBtn.addEventListener("click",function () {
    callingDetailContainerMain.innerHTML = "";
})
