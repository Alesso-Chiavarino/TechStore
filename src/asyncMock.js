const products = [
    {
        "id": 1,
        "nombre": "Asus Tuf Gaming Nvidia Geforce Rtx 3090",
        "precio": 470000,
        "precio2": "470.000",
        "imagen": "../img/placadevideo1.jpg",
        "categoria": "placaVideo"
    },
    {
        "id": 2,
        "nombre": "Procesador gamer AMD Ryzen 5 3600",
        "precio": 30000,
        "precio2": "30.000",
        "imagen": "../img/procesador1.jpg",
        "categoria": "procesador"
    },
    {
        "id": 3,
        "nombre": "Mother Gigabyte B450 M Aorus Elite",
        "precio": 25000,
        "precio2": "25.000",
        "imagen": "../img/placa1.jpg",
        "categoria": "placaMadre"
    }
]

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
} 