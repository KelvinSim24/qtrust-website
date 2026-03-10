document.getElementById('checkBtn').addEventListener('click', async () => {
    const url = document.getElementById('tweetUrl').value;
    const username = document.getElementById('username').value;

    // Checks if Scraped URL Link is a Valid Twitter Link
    if (!url || (!url.includes('twitter.com') && !url.includes('x.com'))) {
        alert('Please enter a valid Twitter/X URL');
        return;
    }
    
    alert('URL Link Received...\nPlease wait for AI response\nThis may take 30 seconds')

    // Sends Scraped URL Link to scraping.py File
    try {
        const response = await fetch('http://127.0.0.1:5000/send-alert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url, username: username })
        });
        
        const data = await response.json();

        if (response.ok) {
            alert(`QTrust Response:\n${data.message}`);
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (err) {
        // Inform that scraping.py Is Not Running or Probably Stalling
        alert('Could not connect to QTrust server.\nThe backend system is not running.');
        console.error(err);
    }
});

document.getElementById('trueBtn').addEventListener('click', async () => {
    const url = document.getElementById('tweetUrl').value
    const username = document.getElementById('username').value;

    if (!url || (!url.includes('twitter.com') && !url.includes('x.com'))) {
        alert('Please enter a valid Twitter/X URL');
        return;
    }

    // Sends Scraped URL Link to scraping.py File
    try {
        const response = await fetch('http://127.0.0.1:5000/send-real-vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url, username: username })
        });

        const data = await response.json();

        if (response.ok) {
            alert(`QTrust Response:\n${data.message}`);
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (err) {
        // Inform that scraping.py Is Not Running or Probably Stalling
        alert('Could not connect to QTrust server.\nThe backend system is not running.');
        console.error(err);
    }
});


document.getElementById('fakeBtn').addEventListener('click', async () => {
    const url = document.getElementById('tweetUrl').value
    const username = document.getElementById('username').value;

    if (!url || (!url.includes('twitter.com') && !url.includes('x.com'))) {
        alert('Please enter a valid Twitter/X URL');
        return;
    }

    // Sends Scraped URL Link to scraping.py File
    try {
        const response = await fetch('http://127.0.0.1:5000/send-fake-vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url, username: username })
        });

        const data = await response.json();

        if (response.ok) {
            alert(`QTrust Response:\n${data.message}`);
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (err) {
        // Inform that scraping.py Is Not Running or Probably Stalling
        alert('Could not connect to QTrust server.\nThe backend system is not running.');
        console.error(err);
    }
});