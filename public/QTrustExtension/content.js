function extractTweetLinks() {
  const anchors = document.querySelectorAll('a[href*="/status/"]');
  const foundLinks = new Set();

  anchors.forEach((a) => {
    const url = a.href.split('?')[0];
    if (/twitter\.com\/[^/]+\/status\/\d+/.test(url)) {
      foundLinks.add(url);
    }
  });

  chrome.storage.local.get({ tweetLinks: [] }, (data) => {
    const existingLinks = new Set(data.tweetLinks);
    const newLinks = Array.from(foundLinks).filter(link => !existingLinks.has(link));

    if (newLinks.length > 0) {
      const updatedLinks = [...existingLinks, ...newLinks];
      chrome.storage.local.set({ tweetLinks: updatedLinks });

      // Show an alert for each new tweet URL
      newLinks.forEach(link => alert(`New Tweet URL:\n${link}`));
    }
  });
}


document.getElementById("input-url").addEventListener("click", async () => {
  const url = prompt("Enter a URL:");
  if (url && url.startsWith("http")) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: showAlert,
      args: [url]
    });
  } else {
    alert("Please enter a valid URL (starting with http or https).");
  }
});

// Sends Alert with Scraped Text from Twitter URL Tweet Link
function showAlert(url) {
  alert(`You entered the URL:\n${url}`);
}