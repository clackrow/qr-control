export async function load({ params }) {
    const code = params.id;
    let url = 'https://api.sheety.co/aece078cc0193cf302d25b51d65043b2/controle/página1';
    const response = await fetch(url)
    const data = await response.json()
    let machine
    data.página1.map((item) => {
        if(code == item.codigo) {
            machine = item
        }
    })
    return machine
}