const categories = [
    {
        name: "Libros",
        img: "https://static01.nyt.com/images/2023/03/23/multimedia/23bookbans-mfvl/23bookbans-mfvl-jumbo.jpg"
    },
    {
        name: "Musica",
        img: "data:image/jpeg;base64,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"
    },
    {
        name: "Juegos de Mesa",
        img: "https://media.timeout.com/images/105627949/750/422/image.jpg"
    },

    {
        name: "Agendas",
        img: "https://www.grupobillingham.com/blog/wp-content/uploads/2022/12/planner-agenda-calendario.jpg"
    },
    {
        name: "Libreria",
        img: "https://cdn.shopify.com/s/files/1/0049/6261/5365/files/115220_Pitt_Graphite_Matt_set_tin_of_11_PA_To_push_Online_catalogue-shop_Office_73394_480x480.jpg?v=1631734160"
    },
    {
        name: "Peliculas",
        img: "https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg"
    }

];

export default categories;