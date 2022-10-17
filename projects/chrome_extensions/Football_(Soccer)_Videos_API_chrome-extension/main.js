async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '27e59c0db6msh607977d72eee94cp174a47jsnd344917d5281',
            'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://free-football-soccer-videos.p.rapidapi.com/', options)
    const record = await res.json()

    console.log('record', record)
    

    // DOM manipulation
    document.getElementById("concerts").innerHTML = record.map(item => `<li>${item.title}</li>`).join('');
}

fetchData();


