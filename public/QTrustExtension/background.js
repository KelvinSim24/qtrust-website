chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type == 'store_links') {
        chrome.storage.local.get({tweetLinks:[]}, (data) => {
            const combined = [...new Set([...data.tweetLinks, ...message.links])];
            chrome.storage.local.set({tweetLinks: combined});
        })
    }
})