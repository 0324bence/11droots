<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div id="root">
    <h1>{data.motd}</h1>
    <h2>{data.players.now} / {data.players.max}</h2>
    <div id="table">
        <div id="header">
            <span>Játékosok</span>
        </div>
        <div id="body">
            {#each data.players.sample as player}
                <div class="player">
                    <span>{player.name}</span>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap");

    * {
        font-family: "Roboto", sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        padding: 2rem;
        background-color: hsl(0, 0%, 20%);
        color: hsl(0, 0%, 92%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding-bottom: 1rem;
    }
    h1 {
        text-align: center;
        font-size: 3.5rem;
        font-weight: 800;
    }
    h2 {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 500;
    }
    #table {
        width: 30vw;
        border: 0.2rem solid hsl(0, 0%, 92%);
        height: 35rem;
        max-height: 35rem;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    #header {
        width: 100%;
        text-align: center;
        border-bottom: 0.2rem solid hsl(0, 0%, 92%);
    }
    #header span {
        font-size: 2rem;
        font-weight: 600;
    }
    #body {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        overflow-y: overlay;
    }
    #body::-webkit-scrollbar {
        width: 0.5rem;
        position: absolute;
    }
    #body::-webkit-scrollbar-track {
        background: transparent;
    }
    #body::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 92%);
    }
    .player {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 500;
        border-bottom: 0.1rem solid hsl(0, 0%, 92%);
    }
    @media screen and (max-width: 768px) {
        #table {
            width: 100%;
        }
    }
</style>
