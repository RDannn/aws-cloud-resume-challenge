const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        const response = await fetch("https://your-lambda-url.lambda-url.us-east-1.on.aws/");
        const data = await response.json();
        const views = JSON.parse(data.body).views; // Extract the views count
        counter.innerHTML = `Views: ${views}`;
    } catch (error) {
        console.error("Error fetching the view count:", error);
        counter.innerHTML = "Couldn't read views";
    }
}

updateCounter();
