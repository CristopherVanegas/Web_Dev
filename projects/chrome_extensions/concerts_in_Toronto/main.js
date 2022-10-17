async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5bc56109e4msh4975d48e5abccddp173d49jsnd78c78cb9d6b',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    
    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/artist/past?name=Ed%20sheeran&minDate=2021-05-13&maxDate=2022-01-25&page=1', options)
    const record = await res.json()

    console.log('record', record)
    

    // DOM man
    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}

fetchData();


