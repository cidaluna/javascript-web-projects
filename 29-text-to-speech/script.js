let textareaEl = document.querySelector('#inputTextarea');
let voicesEl = document.querySelector('#voices');
let clearBtn = document.querySelector('#clear');
let convertBtn = document.querySelector('#convert');
let selectedVoice = 0;

//console.log(window.navigator.appCodeName);

window.speechSynthesis.addEventListener('voiceschanged', () =>{
  let voicesList = window.speechSynthesis.getVoices(); // Select a voice (optional)
  console.log(voicesList);
  for(let i in voicesList){
    let optionEl = document.createElement('option');
    optionEl.setAttribute('value', i);
    optionEl.innerText = voicesList[i].name; // Create Element
    voicesEl.appendChild(optionEl);
  }
});


convertBtn.addEventListener('click', () => {
  if(textareaEl.value !== ''){
    let voicesList = window.speechSynthesis.getVoices(); // 1. Get voices list
    let utterance = new SpeechSynthesisUtterance(textareaEl.value); // 2. Prepare text
    utterance.voice = voicesList[selectedVoice]; // 3. Choose a specific voice
    window.speechSynthesis.speak(utterance); // 4. Speech the text
  }
});

voicesEl.addEventListener('change', () => {
  selectedVoice = parseInt(voicesEl.value);
})

clearBtn.addEventListener('click', () => {
  if(textareaEl.value !== ''){
    textareaEl.value = '';
  }
});

function updateStatus(){
  if(window.speechSynthesis.speaking){
    voicesEl.setAttribute('disabled', 'disabled');
    clearBtn.setAttribute('disabled', 'disabled');
    convertBtn.setAttribute('disabled', 'disabled')
  }else{
    voicesEl.removeAttribute('disabled');
    clearBtn.removeAttribute('disabled');
    convertBtn.removeAttribute('disabled');
  }
}
setInterval(updateStatus, 1000);
