const searchBox = document.getElementById('searchBox');
const table = document.getElementById('studentTable');
const noResults = document.getElementById('noResults');

searchBox.addEventListener('input', () => {
    const filter = searchBox.value.toLowerCase();
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    let hasVisible = false;

    for (let i = 0; i < rows.length; i++) {
        const text = rows[i].textContent.toLowerCase();
        if (text.includes(filter)) {
            rows[i].style.display = '';
            hasVisible = true;
        } else {
            rows[i].style.display = 'none';
        }
    }

    noResults.style.display = hasVisible ? 'none' : 'block';
});