import { A } from "@solidjs/router";
import { createQuery } from "@tanstack/solid-query";
import { Switch, Match } from "solid-js";
async function fetchTodos() {
  const resp = await fetch("http://localhost:1323/app");
  return await resp.text();
}
function App() {
  const query = createQuery(() => ({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  }));
  return (
    <>
      <A href="/about">About</A>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <Switch>
        <Match when={query.isPending}>
          <p>Loading...</p>
        </Match>
        <Match when={query.isError}>
          <p>Error: {query.error?.message}</p>
        </Match>
        <Match when={query.isSuccess}>
          <code>{query?.data}</code>
        </Match>
      </Switch>
    </>
  );
}

export default App;
