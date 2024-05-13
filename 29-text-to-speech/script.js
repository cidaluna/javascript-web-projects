function speech() {
    // Create a SpeechSynthesisUtterance
    const utterance = new SpeechSynthesisUtterance("Project 29 Text to Speech in Javascript");
  
    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[3]; // Choose a specific voice
  
    // Speak the text
    speechSynthesis.speak(utterance);
  }
  