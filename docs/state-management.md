---
sidebar_position: 4

---

# State Management

We chose **React Query** for state management to handle:

1. **Caching**: Automatic caching of API responses.
2. **Refetching**: Automatic and manual refetch for updated data.
3. **Error Handling**: Built-in error and loading states.
4. **Simplicity**: Minimal boilerplate compared to Redux.

**Alternative**: You could use `Context API` or `Zustand`, but React Query is well-suited for “server state” like fetching API data.