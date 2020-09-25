const axios = require("axios");
const cheerio = require("cheerio");
const makeArray = require("./makeArray");

const options = {
  method: "GET",
  mode: "no-cors",
  headers: {
    "Content-Type": "text; charset=utf-8",
    "cache-control": "no-cache",
  },
};

const fetchData = async (code) => {
  const siteUrl = `https://www.linkcorreios.com.br/?id=${code}`;
  const result = await axios.get(siteUrl, options);
  return cheerio.load(result.data);
};

const rastreio = async (code) => {
  const strs = [];
  const ret = [];

  const html = await fetchData(code);

  html(".linha_status").each(function (index, elem) {
    strs.push(elem);
  });

  strs.forEach((element) => {
    let responseObject = {};
    html(element)
      .find("li")
      .each(function (index, elem) {
        let text = html(elem).text();
        if (text && text.includes("Status")) {
          responseObject.status = text;
        }
        if (text && text.includes("Data")) {
          responseObject.data = text;
        }
        if (text && text.includes("Local")) {
          responseObject.local = text;
        }
        if (text && text.includes("Origem")) {
          responseObject.origem = text;
        }
        if (text && text.includes("Destino")) {
          responseObject.destino = text;
        }
      });
    ret.push(responseObject);
  });

  const refactor = ret.splice(1);
  refactor.map(makeArray);
  return refactor;
};

module.exports = rastreio;
