//Model
var checkEmptyStr = {
  isEmpty: function(str) {
    var result = false;
    if (!str || 0 === str.length) {
      result = true;
    }
    return result;
  }
};

//Model for Device
function Device(model, type) {
  this._model = model
  this._type = type;
  this._state = false;
};
Device.prototype.getModel = function() {
  return this._model;
};
Device.prototype.getType = function() {
  return this._type;
};
Device.prototype.getState = function() {
  return this._state;
};

Device.prototype.setModel = function(model) {
  if (!checkEmptyStr.isEmpty(model)) {
    this._model = model;
  } else {
    this._model = "Model is not named"
  };
};
Device.prototype.setType = function() {
  if (!checkEmptyStr.isEmpty(type)) {
    this.type = type;
  } else {
    this._model = "Model is not named"
  };
};
Device.prototype.on = function() {
  this._state = true;
};
Device.prototype.off = function() {
  this._state = false;
};

//Model for Media of TV
function TVChannel(name) {
  this._name = name;
};
TVChannel.prototype.getName = function() {
  return this._name;
};
TVChannel.prototype.setName = function(name) {
  if (!checkEmptyStr.isEmpty(name)) {
    this._name = name
  } else {
    this._name = "TVChannel is not named";
  };
}

function Media(model, type, listMediaContetnt) {
  Device.call(this, model, type);
  this._currentMedia = 1;
  this._volume = 50;
  this._listMediaContent = listMediaContetnt;
};
Media.prototype = Object.create(Device.prototype);
Media.prototype.constructor = Media;
Media.prototype.getVolume = function() {
  return this._volume;
};
Media.prototype.getCurrentMedia = function() {
  return this._currentMedia;
};
Media.prototype.getListMedia = function() {
  return this._listMediaContent;
};

Media.prototype.moreVolume = function() {
  if (this._volume < 10) {
    this._volume++;
  };
};
Media.prototype.lessVolume = function() {
  if (this._volume > 0) {
    this._volume--;
  };
};
Media.prototype.nextMedia = function() {
  if (this._curretnMedia <= this._listMediaContent.length) {
    this._curretnMedia++;
  } else {
    this._currentMedia = 1;
  };
};
Media.prototype.previousMedia = function() {
  if (this._curretnMedia > 1) {
    this._curretnMedia++;
  } else {
    this._currentMedia = this._listMediaContent.length;
  };
};
Media.prototype.showInfoMedia = function() {
  var mediaInfo = ("# - " + this._curretnMedia + "; name - " +
    this._listMediaContent[this._curretnMedia - 1].getName());
};


//ViuwController

function TVView(TVModel) {
  this._TVModel = TVModel;
};

TVView.prototype.render = function() {
  var root = document.getElementById("root");

  var TVContainer = document.createElement("div");
  TVContainer.className = "tv";
  root.appendChild(TVContainer);

  var state = document.createElement("div");
  state.innerHTML = "State: " + (this._TVModel.getState() ? "On" : "Off");
  state.className = "on";
  TVContainer.appendChild(state);

  var volume = document.createElement("div");
  volume.innerHTML = "Volume: " + this._TVModel.getVolume();
  TVContainer.appendChild(volume);



  var onBtn = document.createElement("button");
  onBtn.innerText = "On";
  onBtn.addEventListener(
    "click",
    function() {
      this._TVModel.on();
      state.innerHTML = "State: " + (this._TVModel.getState() ? "On" : "Off");
      state.className = "on";
    }.bind(this)
  );
  TVContainer.appendChild(onBtn);

  var offBtn = document.createElement("button");
  offBtn.innerText = "Off";
  offBtn.addEventListener(
    "click",
    function() {
      this._TVModel.off();
      state.innerHTML = "State: " + (this._TVModel.getState() ? "On" : "Off");
      state.className = "off";
    }.bind(this)
  );
  TVContainer.appendChild(offBtn);

};
var listChannel = [new TVChannel("Inter"), new TVChannel("1+1"), new TVChannel("stb")];
var tv = new Media("tv-sams-42d", "tv", listChannel);
var tvVC = new TVView(tv);
tvVC.render();
