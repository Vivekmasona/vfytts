class VFYTTSWidget {
    constructor(agentId) {
        this.agentId = agentId;
        this.stream = null;
        this.recognition = null;
        this.init();
    }

    async init() {
        if (!this.agentId) {
            console.error("❌ Agent ID missing!");
            return;
        }

        this.createUI();
        this.setupSpeechRecognition();
        this.autoStartAgent();
    }

    createUI() {
        this.widgetContainer = document.createElement("div");
        this.widgetContainer.style.position = "fixed";
        this.widgetContainer.style.bottom = "20px";
        this.widgetContainer.style.right = "20px";
        this.widgetContainer.style.zIndex = "9999";

        this.micButton = document.createElement("button");
        this.micButton.innerText = "🎤";
        this.micButton.style.fontSize = "24px";
        this.micButton.style.padding = "10px";
        this.micButton.style.borderRadius = "50%";
        this.micButton.style.background = "#ff5722";
        this.micButton.style.color = "#fff";
        this.micButton.style.border = "none";
        this.micButton.style.cursor = "pointer";

        this.micButton.addEventListener("click", () => this.startListening());

        this.widgetContainer.appendChild(this.micButton);
        document.body.appendChild(this.widgetContainer);
    }

    setupSpeechRecognition() {
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.lang = "en-US";
        this.recognition.continuous = false;
        this.recognition.interimResults = false;

        this.recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            console.log("🎙️ User Said:", text);
            this.sendToAgent(text);
        };

        this.recognition.onerror = (event) => console.error("Speech Recognition Error:", event.error);
    }

    startListening() {
        this.recognition.start();
    }

    async sendToAgent(text) {
        console.log("📡 Sending to Agent:", text);

        try {
            const response = await fetch(`https://api.elevenlabs.io/convai/${this.agentId}/message`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text }),
            });

            const data = await response.json();
            console.log("🤖 Agent Response:", data.reply);

            this.speak(data.reply);
        } catch (error) {
            console.error("❌ Agent API Error:", error);
        }
    }

    speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    }

    autoStartAgent() {
        setTimeout(() => {
            this.sendToAgent("Hello!");
        }, 2000);
    }
}

// **🎯 Initialize the widget**
document.addEventListener("DOMContentLoaded", () => {
    new VFYTTSWidget("q6EtujId97WBxLEUlEgQ"); // Replace with your Agent ID
});
