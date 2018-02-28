"use strict";

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

Media.prototype.setCurrentMedia = function(number) {
  if (number > 0 && number <= this._listMediaContent.length) {
    this._currentMedia = number;
  };
}

Media.prototype.moreVolume = function() {
  if (this._volume < 100) {
    this._volume++;
  };
};
Media.prototype.lessVolume = function() {
  if (this._volume > 0) {
    this._volume--;
  };
};
Media.prototype.nextMedia = function() {
  if (this._currentMedia < this._listMediaContent.length) {
    this._currentMedia++;
  } else {
    this._currentMedia = 1;
  };
};
Media.prototype.previousMedia = function() {
  if (this._currentMedia > 1) {
    this._currentMedia--;
  } else {
    this._currentMedia = this._listMediaContent.length;
  };
};
Media.prototype.showInfoMedia = function() {
  var mediaInfo = ("# - " + this._currentMedia + "; name - " +
    this._listMediaContent[this._currentMedia - 1].getName());
  return mediaInfo;
};

///////////////////////////////////////////////////////////////////

//Model of Smart House

function SmartHouse(name, listDevices) {
  this._name = name;
  this._listDevices = devices;
}

SmartHouse.prototype.getName = function () {
  return this._name ;
}

SmartHouse.prototype.getListDevices = function () {
  return this._listDevices ;
}

SmartHouse.prototype.setName = function(name) {
  if (!checkEmptyStr.isEmpty(name)) {
    this._name = name;
  } else {
    this._name = "House is not named"
  };
};

SmartHouse.prototype.offAllDevices = function() {
  var listDev = this.getListDevices();
  for (var i = 0; i < listDev.length; i++) {
    listDev[i].off();
  };
};

SmartHouse.prototype.addDevice = function (device) {
  this._listDevices.push(device);
};


//ViewController

function TVView(TVModel) {
  this._TVModel = TVModel;
};

TVView.prototype.render = function() {
  var root = document.getElementById("root");
  //Model

  var TVContainer = document.createElement("div");
  TVContainer.className = "tv";
  root.appendChild(TVContainer);

  TVContainer.innerHTML = "<div>TV</div><div>Model: " + this._TVModel.getModel() + "</div>";

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

  var state = document.createElement("div");
  state.innerHTML = "State: " + (this._TVModel.getState() ? "On" : "Off");
  state.className = "off";
  TVContainer.appendChild(state);

  var volume = document.createElement("div");
  volume.innerHTML = "Volume: " + this._TVModel.getVolume();
  TVContainer.appendChild(volume);

  var curChannel = document.createElement("div");
  curChannel.id = "curChanDiv";
  curChannel.innerHTML = "Channel: " + this._TVModel.showInfoMedia();
  TVContainer.appendChild(curChannel);

  var listChannel = document.createElement("div");
  listChannel.className = "listChannel";
  listChannel.innerHTML = "List of channels";
  TVContainer.appendChild(listChannel);

  var ol = document.createElement("ol");
  ol.id = "listCh";
  ol.className = "listCh";
  listChannel.appendChild(ol);

  function fillListChannel() {
    var list = this.getListMedia();
    for (var i = 0; i < list.length; i++) {
      var li = document.createElement("li");
      li.innerHTML = " " + list[i].getName();
      ol.appendChild(li);
    };
  };
  fillListChannel.call(this._TVModel);

  var incrBtnVol = document.createElement("button");
  incrBtnVol.innerText = "Vol. ++";
  incrBtnVol.addEventListener(
    "click",
    function() {
      this._TVModel.moreVolume();
      volume.innerHTML = "Volume: " + this._TVModel.getVolume();
    }.bind(this)
  );

  TVContainer.appendChild(incrBtnVol);

  var decrBtnVol = document.createElement("button");
  decrBtnVol.innerText = "Vol. --";
  decrBtnVol.addEventListener(
    "click",
    function() {
      this._TVModel.lessVolume();
      volume.innerHTML = "Volume: " + this._TVModel.getVolume();
    }.bind(this)
  );

  TVContainer.appendChild(decrBtnVol);

  var incrBtnChannel = document.createElement("button");
  incrBtnChannel.innerText = "Next";
  incrBtnChannel.addEventListener(
    "click",
    function() {
      this._TVModel.nextMedia();
      curChannel.innerHTML = "Channel: " + this._TVModel.showInfoMedia();
    }.bind(this)
  );
  TVContainer.appendChild(incrBtnChannel);

  var decrBtnChannel = document.createElement("button");
  decrBtnChannel.innerText = "Prev";
  decrBtnChannel.addEventListener(
    "click",
    function() {
      this._TVModel.previousMedia();
      curChannel.innerHTML = "Channel: " + this._TVModel.showInfoMedia();
    }.bind(this)
  );
  TVContainer.appendChild(decrBtnChannel);

  var delBtn = document.createElement("button");
  delBtn.innerText = "Remove TV";
  TVContainer.appendChild(delBtn);
  delBtn.onclick = function () {
    root.removeChild(TVContainer);
  };

};
var listChannel = [new TVChannel("Inter"), new TVChannel("1+1"), new TVChannel("stb")];
var tv = new Media("tv-sams-42d", "tv", listChannel);
var tvVC = new TVView(tv);
tvVC.render();
