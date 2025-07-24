

document.addEventListener('DOMContentLoaded', () => {
    const fileNames = [
        'flooring.jpg',
        'flooring 2.jpg',
        'flooring 3.jpg',
        'flooring 4.jpg',
        'flooring 5.jpg',
        'magic 2.jpg',
        'magic 4.jpg',
        'Anvar 1.jpg',
        'Anvar 2.jpg'
        
    ]

    const container = document.getElementById("gallery")

    fileNames.forEach((f) => {
        const div = document.createElement('div')
        div.className += ("col-lg-3 col-md-4 col-6")
        const a = document.createElement('a')
        a.className += ("d-block mb-4 h-100")
        const img = document.createElement('img')
        img.className += ('img-fluid img-thumbnail')
        img.src = '../assets/images/' + f

        a.appendChild(img)
        div.appendChild(a)
        container.appendChild(div)
        console.log(container)
    })


})
