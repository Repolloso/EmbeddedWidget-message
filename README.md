# EmbeddedWidget-message
Embedded Widget for user help

## Uso 

1. Insterte este sript en el body de su proyecto:
   ```
   <script src="https://res.cloudinary.com/duyd0717m/raw/upload/v1691778437/cdn/minify-aid-balloon_vxjlbj.js"></script>
   ```
   
3. Instancie el método EmbeddedWidget:
   const widget = EmbeddedWidget({});

4. El widget es personalizable con la informacion que usted requiera, los argumentos son:
   -   backgroundColor: Modifica el color del head del modal y el globo de mensaje --> *string*
   -   color: Modifica el color del texto del head --> *string*
   -   name: Nombre de la persona en cuestion (userName, etc) --> *string*
   -   image: Imagen de perfil que desea mostrar --> *url* 
   -   imgBalloonColor: Color que desea que tenga el icono del globo (botón que abre el modal) --> *string*
   -   title: Título que desea que tenga el head, el title tiene prioridad por sobre el name, por ende, si desea que se muestre "Hello, nombre" no debe poner este parametro --> *string*
   -   subTitle: Subtitulo que va debajo del head --> *string*
   -   titleQuestions: Titulo de la sección de preguntas --> *string*
   -   questions: Preguntas con link que llevan hacia la respuesta --> *array*
   -   clientTitle: Titulo de la sección de ayuda --> *string*
   -   clientQuestions: Preguntas con link que llevan hacia la respuesta --> *array*
  
5. Ejemplo:
  ```
   <script>
    const backgroundColor = "black" 
    const color = "white"
    const name = "Nombre"
    const image = "https://www.w3schools.com/howto/img_avatar.png" // url
    const imgBalloonColor = "white"
    const title = null; // Tiene prioridad por sobre el nombre, o pone un titulo o un nombre.
    const subTitle = "Subtitulo"
    const titleQuestions = "Preguntas frecuentes titulo"
    const questions = [
          {
              question: "Inserte una pregunta",
              answer: "#urlRespuesta"
          },
    ]
    const clientTitle = "Customer support"
    const clientQuestions = [
          {
              question: "Inserte una pregunta",
              answer: "#urlRespuesta"
          },
    ]
  
    const widget = new EmbeddedWidget(
        { 
            backgroundColor,
            color,
            name,
            image,
            imgBalloonColor,
            title,
            subTitle,
            titleQuestions,
            questions,
            clientTitle,
            clientQuestions
        }
    )   
  </script>
```

  ![image](https://github.com/Repolloso/EmbeddedWidget-message/assets/82538888/7d46d393-7230-4395-8073-8d4fd8a1c9d1)

