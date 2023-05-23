<script>
    export let data;

    let machine = data
</script>

<div class="mainApp">
    <div class={machine.vencido == 'sim'? 'vencido':'nao_vencido'}>
        <h2>Controle do dispositivo: <strong>{machine.codigo}</strong></h2>
        <hr>
        <div class="last">
            Última manutenção:
            <br>
            {machine.ultima}
        </div>

        <div class="last">
            Próxima manutenção:
            <br>
            {machine.proxima}
        </div>
    </div>
</div>

<style>
    :global(body) {
        background-color: rgb(255, 255, 255);
    }
    .mainApp {
        color: black;
        padding: 1rem;
        width: 90%;
        margin: auto;
        text-align: center;
    }

    .vencido {
        background-color: rgb(255, 74, 74);
        border-radius: 1rem;
        text-align: center;
        padding: 2rem;
        height: 90vh;
        
    }

    .nao_vencido {
        background-color: rgb(50, 255, 50);
        border-radius: 1rem;
        text-align: center;
        padding: 2rem;
        height: 90vh
    }

    .last {
        background-color: gray;
        width: 20%;
        padding: 1rem;
        border-radius: 1rem;
        margin: auto;
        margin-top: 5rem;
        min-width: 10rem;
    }

</style>