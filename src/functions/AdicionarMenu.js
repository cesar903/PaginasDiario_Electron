const { Menu } = require("electron")

function AdicionarMenu(janela) {
    const modelo = Menu.buildFromTemplate([
        {
            label: "Páginas",
            click: function () {
                janela.loadFile("./public/paginas.html")
            }
        },
        {
            label: "Publicar",
            click: function () {
                janela.loadFile("./public/publicar.html")
            }
        },
        {
            label: "Sair",
            role: "quit"
        }
    ])
    Menu.setApplicationMenu(modelo)
}

module.exports = AdicionarMenu

