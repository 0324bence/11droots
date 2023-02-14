import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
    const res = await fetch(`https://mcapi.us/server/status?ip=s4.vgh.hu&port=25588`);
    const item = await res.json();
    return item;
}) satisfies PageLoad;
