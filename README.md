# COTRACK

Cotrack is a JS library for obtaining object tracking information from Brazilian post offices.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install cotrack
```

or

```bash
yarn add cotrack
```

## Usage

```JS
const cotrack = require("cotrack")

async function rastreio() {
    const data = await cotrack("pz483514143br")
    console.log(data)
}

rastreio()

/*

log:

[
  {
    status: 'Objeto saiu para entrega ao destinatário',
    data: '25/09/2020',
    local: 'AC ACAILANDIA - Acailandia / MA',
    hora: '08:15',
    origem: null,
    destino: null,
    ufDestino: null,
    ufOrigem: null
  },
  {
    status: 'Objeto encaminhado ',
    data: '15/09/2020',
    origem: 'CTCE SALVADOR',
    destino: 'AC ACAILANDIA',
    hora: '21:21',
    ufDestino: 'MA',
    local: null,
    ufOrigem: 'BA'
  },
  {
    status: 'Objeto encaminhado ',
    data: '09/09/2020',
    origem: 'CTCE RIBEIRAO PRETO',
    destino: 'CTCE SALVADOR',
    hora: '08:26',
    ufDestino: 'BA',
    local: null,
    ufOrigem: 'SP'
  },
  {
    status: 'Objeto encaminhado ',
    data: '04/09/2020',
    origem: 'AGF GEDEON',
    destino: 'CTCE RIBEIRAO PRETO',
    hora: '19:46',
    ufDestino: 'SP',
    local: null,
    ufOrigem: 'SP'
  },
  {
    status: 'Objeto postado após o horário limite da unidade',
    data: '04/09/2020',
    local: 'AGF GEDEON - Ribeirao Preto / SP',
    hora: '19:25',
    origem: null,
    destino: null,
    ufDestino: null,
    ufOrigem: null
  }
]
*/
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
