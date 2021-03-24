GitHubCalendar(".calendar", "aa-ag", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "aa-ag", {
    proxy(username) {
        return fetch(`https://your-proxy.com/github?user=${username}`)
    }
}).then(r => r.text())