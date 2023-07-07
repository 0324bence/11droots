import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params, url }) => {
    const ip = url.searchParams.get("ip") || "0";
    const port = url.searchParams.get("port") || "0";
    const res = await fetch(`https://mcapi.us/server/status?ip=${ip}&port=${port}`);
    const item = await res.json();
    return item;
}) satisfies PageLoad;
