document.addEventListener("DOMContentLoaded", function() {
    fetch('/cricketers')
        .then(response => response.json())
        .then(data => {
            const cricketersList = document.getElementById('cricketers-list');
            data.forEach(cricketer => {
                const cricketerDiv = document.createElement('div');
                cricketerDiv.className = 'cricketer';
                
                const cricketerImage = document.createElement('img');
                cricketerImage.src = cricketer.image_url;
                cricketerImage.alt = cricketer.name;
                cricketerImage.loading = "lazy";

                const cricketerName = document.createElement('h4');
                cricketerName.textContent = cricketer.name;

                const heartButton = document.createElement('button');
                heartButton.textContent = `❤️ ${cricketer.hearts}`;
                heartButton.onclick = function() {
                    if (!localStorage.getItem(`hearted-${cricketer.id}`)) {
                        fetch(`/cricketers/${cricketer.id}/heart`, { method: 'POST' })
                            .then(response => response.json())
                            .then(() => {
                                heartButton.textContent = `❤️ ${cricketer.hearts + 1}`;
                                localStorage.setItem(`hearted-${cricketer.id}`, true);
                            });
                    } else {
                        alert('You have already given a heart to this cricketer!');
                    }
                };

                cricketerDiv.appendChild(cricketerImage);
                cricketerDiv.appendChild(cricketerName);
                cricketerDiv.appendChild(heartButton);
                cricketersList.appendChild(cricketerDiv);
            });
        });

        fetch('/top-cricketers')
        .then(response => response.json())
        .then(data => {
             
        const topCricketersDiv = document.getElementById('topCricketers');
        data.forEach(cricketer => {
            const div = document.createElement('div');
            div.className = 'topPlayer';

            const nameSpan = document.createElement('span');
            nameSpan.innerText = cricketer.name;
            div.appendChild(nameSpan);

            const heartSpan = document.createElement('span');
            heartSpan.className = 'heartCount';
            heartSpan.innerText = cricketer.hearts;
            div.appendChild(heartSpan);

            topCricketersDiv.appendChild(div);
        });
    });

    document.getElementById('refreshButton').addEventListener('click', function() {
        location.reload();
    });
    


});
