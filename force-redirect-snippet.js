// Force Redirect After Quote Display
// Add this to contact.html just before </body>

<script>
// Monitor for quote display in iframe
let checkCount = 0;
let hasRedirected = false;

const checkForQuote = setInterval(() => {
    checkCount++;

    // Look for signs that quote is displayed
    const iframe = document.getElementById('quoter-iframe');

    // Check if iframe content has changed (by monitoring height changes)
    if (iframe) {
        const currentHeight = iframe.offsetHeight;

        // Also check for thank you text in page
        const pageContent = document.body.innerText.toLowerCase();

        if (pageContent.includes('instant quote') ||
            pageContent.includes('your quote') ||
            pageContent.includes('text stop to opt out')) {

            if (!hasRedirected) {
                console.log('Quote detected! Redirecting to thank you page...');
                hasRedirected = true;
                clearInterval(checkForQuote);

                // Wait 3 seconds so user sees quote, then redirect
                setTimeout(() => {
                    window.location.href = '/thank-you.html';
                }, 3000);
            }
        }
    }

    // Stop checking after 30 seconds
    if (checkCount > 60) {
        clearInterval(checkForQuote);
    }
}, 500);
</script>