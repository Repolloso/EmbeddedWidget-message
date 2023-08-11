function EmbeddedWidget({
        backgroundColor = "#7052fb", 
        color = "white", 
        name = "Jhon Doe", 
        image = null, 
        imgBalloonColor = "white", 
        title = null, 
        subTitle = "Insert your subtitle here", 
        titleQuestions = "Insert your question title here", 
        questions = [
            {
                question: "Insert your question here",
                answer: "#"
            }
        ], 
        clientTitle = "Customer support title",
        clientQuestions = [
            {
                question: "Insert your question here",
                answer: "#"
            }
        ],
    }) {
    const aidBalloon = document.querySelector('#aid-balloon');

    //validate if the img is an url or a base64
    if (image !== null && image.includes('http')) {
        image = image;
    } else {
        image = '{{asset("new_index/images/icon/130.svg")}}';
    }

    //validate if the imgBalloonColor is white or black
    if (imgBalloonColor !== 'white' && imgBalloonColor !== 'black' || imgBalloonColor === null) {
        imgBalloonColor = 'white';
    }

    const widgetHTML = `
        <button class="aid-balloon" id="aid-balloon-button">
            <img src="https://cdn-icons-png.flaticon.com/512/3034/3034023.png" alt="open-balloon" width="30" loading="lazy" id="img-balloon">
        </button>

        <div class="aid-balloon-content" id="message-popup" style="display: none;">
            <div class="aid-balloon_header">
                <div class="aid-balloon-header_head">
                    <figure class="fig">
                        <img src="${image}" alt="${name} - img" class="img-figure" loading="lazy" width="70px">
                    </figure>
                    <div class="aid-balloon-header_text">
                        <h5 class="h4-title">${title !== null ? title : 'Hello, ' + name}</h5>
                        <p class="p-text">${subTitle}</p>
                    </div>
                </div>
            </div>
            <div class="aid-balloon_questions">
                <div class="div-block scroll">
                    <h6 class="h6-title">${titleQuestions}</h6>
                    <ul class="items">
                        ${
                            // Aquí se debe iterar sobre las preguntas frecuentes
                            // para mostrarlas en el widget
                            questions.map((element, i) => {
                                return `
                                    <li id="${i}">
                                        <a href="${element.answer}" class="links">
                                            ${element.question}
                                        </a>
                                    </li>
                                `;
                            }).join('')
                        }
                    </ul>
                </div>
                <div class="div-block scroll-2">
                    <h6 class="h6-title">${clientTitle}</h6>
                    <ul class="items">
                        ${
                            clientQuestions.map((element, i) => {
                                return `
                                    <li id="${i * 5}">
                                        <a href="${element.answer}" class="links">
                                            ${element.question}
                                        </a>
                                    </li>
                                `;
                            }).join('')
                        }
                    </ul>
                </div>
            </div>
        </div>
    `;

    aidBalloon.innerHTML = widgetHTML;

    const messageBalloon = aidBalloon.querySelector('#aid-balloon-button');
    const imageElement = aidBalloon.querySelector('#aid-balloon-button img');
    const messagePopup = aidBalloon.querySelector('.aid-balloon-content');
    let isImageVisible = true;

    messageBalloon.addEventListener('click', () => {
        if (isImageVisible) {
            imageElement.src = 'https://cdn-icons-png.flaticon.com/512/2997/2997911.png';
            imageElement.alt = 'close-balloon';
            messagePopup.style.display = 'block';
        } else {
            imageElement.src = 'https://cdn-icons-png.flaticon.com/512/3034/3034023.png';
            imageElement.alt = 'open-balloon';
            messagePopup.style.display = 'none';
        }

        isImageVisible = !isImageVisible;
    });

    // Aplicar los estilos y colores recibidos como parámetros
    const widgetStyles = `
        /* Aplicar estilos personalizados aquí */
        .aid-balloon {
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: ${backgroundColor};
            text-align: center;
            line-height: 20px;
            color: #fff;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            right: 15px;
            bottom: 15px;
            z-index: 1000;
            border: none;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        }
            
        .aid-balloon img {
            /* Solo se aceptan colores blanco o negro */
            filter: ${imgBalloonColor === 'black' ? 'invert(100%) sepia(0%) saturate(0%) hue-rotate(108deg) brightness(104%) contrast(104%)' : 'brightness(0) invert(1)'};
        }
            
        .aid-balloon:hover {
            transform: scale(1.1);
        }
            
        .aid-balloon:focus {
            outline: none;
            box-shadow: none;
            transform: scale(1.1);
        }
            
        .aid-balloon:active {
            transform: scale(1.1);
        }
            
        .aid-balloon-content {
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            width: 350px;
            height: 550px;
            right: 15px;
            bottom: 90px;
            z-index: 1000;
            background-color: whitesmoke;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        }
            
        .aid-balloon_header {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            width: 100%;
            padding: 1rem;
            border-bottom: 1px solid #ccc;
            background-color: ${backgroundColor};
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
            
        .aid-balloon-header_head {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: start;
        }
            
        .aid-balloon-header_head .img-figure{
            border-radius: 50%;
            object-fit: cover;
        }
            
        .aid-balloon-header_head .fig {
            margin: auto;
        }
            
        .h4-title, .p-text {
            color: ${color};
            margin-bottom: 0;
        }

        .p-text {
            font-size: 0.8rem;
            margin-top: 10px;
        }
            
        .h6-title {
            font-weight: bold;
        }
        
        .aid-balloon-header_text {
            display: flex;
            flex-direction: column;
            margin-left: 1rem;
        }
            
        .aid-balloon_questions {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            width: 100%;
            padding: 1rem;
            gap: 1rem;
        }
            
        .div-block {
            background-color: white;
            padding: 1rem;
            width: 100%;
        }   

        .scroll {
            height: 250px;
            overflow-y: auto;
        }
        
        .scroll-2 {
            height: 145px;
            overflow-y: auto;
        }

        .items {
            list-style: none;
            margin-top: 1rem;
        }

        .links {
            color: #5c66b5;
        }

        .links:hover {
            text-decoration: underline;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = widgetStyles;
    aidBalloon.appendChild(styleElement);
}