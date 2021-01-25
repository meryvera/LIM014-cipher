const cipher = {
  encode: function (offset, encodetextarray, encodetext) {

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

  decode: function (number1, text1){
    let decodetextarrjs = text1.split('');
    console.log(decodetextarrjs);

    for (let index = 0; index <decodetextarrjs.length; index++) {
      if (decodetextarrjs[index] === decodetextarrjs[index].toUpperCase()) {
        decodetextarrjs[index] = decodetextarrjs[index].charCodeAt(0);
      }
      else if (decodetextarrjs[index] === decodetextarrjs[index].toLowerCase()) {
        decodetextarrjs[index] = decodetextarrjs[index].toUpperCase(0);
        decodetextarrjs[index] = decodetextarrjs[index].charCodeAt(0);
      }
    }
    let rundecodetextarrjs = decodetextarrjs.map(function (elemento){
      return String.fromCharCode((elemento - number1 + 65 )% 26 + 65)
    });
    let stringconvert1 = rundecodetextarrjs.join('');
    if (text1 === text1.toUpperCase()){
      return stringconvert1;
    } else {
        return stringconvert1.toLowerCase();
    }
  }
};

export default cipher;
