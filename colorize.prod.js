var RESPONSE = {
  success: {
    code: 200,
    type: "success"
  },
  error: {
    code: 400,
    type: "error"
  }
};

function Colorize(name) {
  this.name = name || null;
}

// Logic from interwebs
Colorize.prototype.getHashCode = function() {
  var str = this.name || ''; 
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

Colorize.prototype.intToRGB = function(i) {
  var c = (i & 0x00FFFFFF).toString(16).toUpperCase();
  return "00000".substring(0, 6 - c.length) + c;
}

Colorize.prototype.generate = function() {
  var hash = this.getHashCode();
  var hex = this.intToRGB(hash);
  return {
    hex: hex,
    hex_hash: "#" + hex
  };
}

module.exports = function(context, callback) {
  var name = context.data.name;
  if (!name) {
    var err = Object.assign({}, RESPONSE.error, { text: "No name provided"});
    callback(null, err);
  } else {
    var C = new Colorize(name);
    var generatedColor = C.generate();
    var resp = Object.assign({}, RESPONSE.success, context.data, generatedColor);
    callback(null, resp);
  }
}