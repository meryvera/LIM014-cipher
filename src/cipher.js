const cipher = {
  encode: function (offset, encodetextarrayjs, encodetext) {
    const encodetextarray= encodetextarrayjs;
    for (let i = 0; i < encodetextarray.length; i++) {
      if(encodetextarray[i] === encodetextarray[i].toUpperCase()){
        encodetextarray[i] = encodetextarray[i].charCodeAt(0);
      } else if (encodetextarray[i] === encodetextarray[i].toLowerCase()) {
        encodetextarray[i] = encodetextarray[i].toUpperCase();
        encodetextarray[i] = encodetextarray[i].charCodeAt(0)
      }
    }
    console.log(encodetextarray);

    let runencodetextarray = encodetextarray.map(function(element) {
      return String.fromCharCode((element - 65 + offset) % 26 + 65);
    })
    console.log(runencodetextarray);
    let stringconvert = runencodetextarray.join('');

    if (encodetext === encodetext.toUpperCase()) {
      return stringconvert;
    } else {
      return stringconvert.toLowerCase();
    }
  },

  decode: function (offset1, decodetextarray, decodetext){
    for (let index = 0; index < decodetextarray.length; index++) {
      if (decodetextarray[index] === decodetextarray[index].toUpperCase()) {
        decodetextarray[index] = decodetextarray[index].charCodeAt(0);
      } else if (decodetextarray[index] === decodetextarray[index].toLowerCase()) {
        decodetextarray[index] = decodetextarray[index].toUpperCase();
        decodetextarray[index] = decodetextarray[index].charCodeAt(0);
      }
    }
    let rundecodetextarray = decodetextarray.map(function (elemento){
      return String.fromCharCode((elemento - offset1 + 65 )% 26 + 65)
    });
    let stringconvert1 = rundecodetextarray.join('');
    if (decodetext === decodetext.toUpperCase()){
      return stringconvert1;
    } else {
        return stringconvert1.toLowerCase();
    }
  }
};

export default cipher;
