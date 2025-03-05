---
sidebar_position: 5

---

## Challenge 1: API Rate Limits
- **Issue**: Some public APIs enforce rate limits.
- **Solution**: CoinGecko’s free tier is quite generous. If we encounter rate limit issues, we’d implement a simple caching or limit the refresh frequency.

## Challenge 2: Handling Search
- **Issue**: Searching needed a way to filter through the loaded data.
- **Solution**: We convert the fetched data object into an array. Then filter by the coin’s name based on the search term.

## Challenge 3: Mobile Responsiveness
- **Solution**: We used simple HTML elements with responsive styling. For more advanced design, we’d utilize a CSS framework (like Tailwind or Bootstrap).

