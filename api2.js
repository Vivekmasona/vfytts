document.addEventListener("DOMContentLoaded", function () {
    console.log("Loading ElevenLabs Convai Widget...");

    // Mic Button Create
    const micButton = document.createElement("button");
    micButton.innerText = "🎤";
    micButton.style.width = "80px";
    micButton.style.height = "80px";
    micButton.style.borderRadius = "50%";
    micButton.style.border = "none";
    micButton.style.backgroundColor = "red";
    micButton.style.color = "white";
    micButton.style.fontSize = "24px";
    micButton.style.cursor = "pointer";
    micButton.style.position = "fixed";
    micButton.style.bottom = "20px";
    micButton.style.right = "20px";

    document.body.appendChild(micButton);

    // ElevenLabs Widget Load
    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "q6EtujId97WBxLEUlEgQ"); // Tumhara agent ID
    widget.setAttribute("enable-mic", "true");
    document.body.appendChild(widget);

    // Page Load pe Auto Start
    widget.addEventListener("load", () => {
        setTimeout(() => {
            widget.startConversation();
        }, 1000);
    });

    // Mic Button Click = Mic Toggle
    micButton.addEventListener("click", () => {
        widget.toggleMic();
    });

    console.log("Widget Initialized Successfully!");
});
