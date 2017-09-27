function openNewTab () {
	chrome.tabs.query({active: true}, function(tabs) {
		var tabIndex = tabs[0].index
		chrome.tabs.query({}, function(tabs) {
			var tabsNumber = tabs.length
			var tabToOpen = tabIndex + 1
			if (tabToOpen >= tabsNumber) {
				tabToOpen = 0
			}
			var tabToRefresh = tabToOpen + 1
			if ((tabToOpen + 1) === tabsNumber) {
				tabToRefresh = 0
			}
			chrome.tabs.update(tabs[tabToOpen].id, {active: true})
			chrome.tabs.reload(tabs[tabToRefresh].id)
		})
	});
}
setInterval(function() {
	openNewTab()
}, 20000);

