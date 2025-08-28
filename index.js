// all reusable function
function getElementById(id) {
  return document.getElementById(id);
}

function getElementInnerText(id) {
  return document.getElementById(id).innerText;
}

function getElementsByClassName(className) {
  return document.getElementsByClassName(className);
}

// heart button DOM
const btns = document.getElementsByClassName("likeBtn");
for (const btn of btns) {
  btn.addEventListener("click", function () {
    const heartCount = parseInt(getElementInnerText("heart-count"));
    let increase = heartCount + 1;
    document.getElementById("heart-count").innerText = parseInt(increase);
  });
}

// call-btn DOM
const callBtn = getElementsByClassName("call-btn");
for (const btn of callBtn) {
  btn.addEventListener("click", function () {
    const time = new Date().toLocaleTimeString();
    const serviceName = btn.parentNode.parentNode.children[2].innerText;
    const serviceNumber = btn.parentNode.parentNode.children[3].innerText;

    let oldCoin = getElementInnerText("coin-count");
    if (oldCoin < 20) {
      alert("Not Enough Coin");
      return;
    }
    let decrease = oldCoin - 20;
    document.getElementById("coin-count").innerText = decrease;
    alert(`📞Calling ${serviceName} ${serviceNumber}...`);
    const historyContainer = getElementById("history-container");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] rounded-lg mt-4 p-4">
              <div>
                <h1 class="text-lg font-bold">${serviceName}</h1>
                <p>${serviceNumber}</p>
              </div>
              <p>${time}</p>
            </div>
    `;
    historyContainer.appendChild(newDiv);
  });
}

// ALL CLEAR
const clear = getElementById("clear-btn");
clear.addEventListener("click", function () {
  const historyContainer = getElementById("history-container");
  historyContainer.innerHTML = "";
});


// COPY BUTTON DOM
const copyBtns = getElementsByClassName('copy-btn');
for(const copyBtn of copyBtns){
  copyBtn.addEventListener('click',function(){
    const serviceNumber = copyBtn.parentNode.parentNode.children[3].innerText;
    const copyCount = parseInt(getElementInnerText('copy-count'));
    let increase = copyCount+1;
    document.getElementById('copy-count').innerText = increase;
    navigator.clipboard.writeText(serviceNumber)
    .then(function(){
      alert(`✅Number ${serviceNumber} copied to clipboard`)
    })
  })
}