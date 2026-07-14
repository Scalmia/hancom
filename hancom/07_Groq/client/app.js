document.getElementById('btn').addEventListener('click', () => {
    const prompt = document.getElementById('q').value;

    fetch('http://localhost:3000/api/groq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('ans').textContent = data.reply || data.error})
    .catch(() => { document.getElementById('ans').textContent = 'Error occurred while fetching response.' });
    })