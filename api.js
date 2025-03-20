document.addEventListener("DOMContentLoaded", async function () {
    console.log("Loading modified ElevenLabs widget...");

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

    // Load ElevenLabs Widget
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    document.body.appendChild(script);

    script.onload = () => {
        console.log("ElevenLabs Widget Loaded");

        if (window.ConvaiWidget) {
            const widget = new window.ConvaiWidget({
                agentId: "YOUR_AGENT_ID", // Apna Convai Agent ID yahan daalo
                container: document.body,
                enableMic: true,
            });

            // Mic button ko toggle mic ke liye use karein
            micButton.addEventListener("click", () => {
                widget.toggleMic();
            });

            // Page load pe auto-call start ho
            setTimeout(() => {
                widget.startConversation();
            }, 1000);
        } else {
            console.error("Widget Load Failed!");
        }
    };
});
