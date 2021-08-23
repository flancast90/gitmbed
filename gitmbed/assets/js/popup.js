window.addEventListener('load', function() {
    if (location.protocol !== "chrome-extension:") {
        document.getElementById('status').innerHTML = "Navigate to a website to activate gitmbed!";
        document.write(location.protocol);
    }else {
        document.getElementById('status').innerHTML = "Gitmbed is running!";
    }
});
