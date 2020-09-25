const makeArray = (obj) => {
  const data = obj.data;
  const origem = obj.origem;
  const destino = obj.destino;
  obj.status = !!obj.status ? obj.status.split(":")[1].replace(" ", "") : null;
  obj.data = !!obj.data ? obj.data.split(" ")[3] : null;
  obj.hora = !!data ? data.split(" ")[6] : null;
  obj.origem = !!obj.origem ? obj.origem.split(":")[1].replace(" ", "") : null;
  obj.origem = !!obj.origem
    ? obj.origem.split("-")[0].replace(/((\s*\S+)*)\s*/, "$1")
    : null;
  obj.destino = !!obj.destino
    ? obj.destino.split(":")[1].replace(" ", "")
    : null;
  obj.destino = !!obj.destino
    ? obj.destino.split("-")[0].replace(/((\s*\S+)*)\s*/, "$1")
    : null;
  obj.ufDestino = !!destino ? destino.split("/")[1].replace(" ", "") : null;
  obj.local = obj.local ? obj.local.split(":")[1].replace(" ", "") : null;
  obj.ufOrigem = !!origem ? origem.split("/")[1].replace(" ", "") : null;
};

module.exports = makeArray;
