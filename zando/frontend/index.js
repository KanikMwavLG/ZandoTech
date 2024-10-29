let data = [];
let filepaths = "data.json";
fetch(filepaths)
.then(response => response.json())
.then(jsonData => {
    data = jsonData;

   
})
.catch(error => console.error('Erreur  lors du chargement des données :', error));

function displayResults(items) {
    
    const resultContainer = document.getElementById('resultContainer');



    resultContainer.innerHTML = '';
    items.forEach(item => {
        const blockDiv = document.createElement('div');

        blockDiv.classList.add('result-bloc');

        if (item.video) {
            const video = document.createElement('video');
            video.src = item.video;
            video.controls = true;

            video.classList.add('mb-3');


            blockDiv.appendChild(video);
        }

        
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.imageAlt;


            blockDiv.appendChild(img);
        }


        const textDiv = document.createElement('div');
        textDiv.innerHTML = item.text;

        blockDiv.appendChild(textDiv);


        const button = document.createElement('button');

        button.classList.add('btn', 'btn-primary');

        button.innerText = item.buttonText;

        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#staticBackdrop1');


        blockDiv.appendChild(button);


        resultContainer.appendChild(blockDiv);
    });
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm === '') {
        document.getElementById('resultContainer').innerHTML = '';
        return;
    }
    const filteredData = data.filter(item => item.content.toLowerCase().includes(searchTerm));

    displayResults(filteredData);
}

document.getElementById('searchInput').addEventListener('input', performSearch);








document.addEventListener('DOMContentLoaded', function () {
    const whatsappLink = document.getElementById('whatsappLink');

    const message = "Bonjour, je souhaite obtenir plus dinformations sur vos produits.";

    const phonenumber = "243975895900";

    const whatsappUrl = 'https://wa.me/ ' + phonenumber + '?text=' + encodeURIComponent(message);

    whatsappLink.href = whatsappUrl;
});


