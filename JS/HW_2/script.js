"use strict";

//MODELS

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
function Device(name, model, type) {
  if (!checkEmptyStr.isEmpty(name)) {
    this._name = name;
  } else {
    this._name = "No name";
  };
  if (!checkEmptyStr.isEmpty(model)) {
    this._model = model;
  } else {
    this._model = "Model is not named"
  };
  if (!checkEmptyStr.isEmpty(type)) {
    this.type = type;
  } else {
    this._model = "Model is not named"
  }
  this._state = false;
};
Device.prototype.getName = function () {
  return this._name;
}
Device.prototype.getModel = function() {
  return this._model;
};
Device.prototype.getType = function() {
  return this._type;
};
Device.prototype.getState = function() {
  return this._state;
};

Device.prototype.setName = function(name) {
  if (!checkEmptyStr.isEmpty(name)) {
    this._name = name;
  } else {
    this._name = "No name";
  };
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
//END model DEVICE

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

function Media(name, model, type, listMediaContetnt) {
  Device.call(this, name, model, type);
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
//END of MEDIA


// Model of device for LIGHT
function Light(name, model, type) {
  Device.call(this, name, model, type);
  this._currentBrightness = 3;
};
Light.prototype = Object.create(Device.prototype);
Light.prototype.constructor = Light;

Light.prototype.getCurrentBrightness = function() {
  return this._currentBrightness;
}
Light.prototype.moreBrightness = function() {
  if (this._currentBrightness < 5) {
    this._currentBrightness++;
  }
}
Light.prototype.lessBrightness = function() {
  if (this._currentBrightness > 1) {
    this._currentBrightness--;
  }
}
//END of LIGHT


//Model of Smart House

function SmartHouse(name, listDevices) {
  this._name = name;
  this._listDevices = listDevices;
  this._listKindDevice = [];
}

SmartHouse.prototype.getName = function() {
  return this._name;
}

SmartHouse.prototype.getListDevices = function() {
  return this._listDevices;
}

SmartHouse.prototype.getListKindDevice = function () {
  return  this._listKindDevice;
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
SmartHouse.prototype.setListKindDevice = function () {

  for (var i = 0; i < this._listDevices.length; i++) {
    var count = 0;
    for (var j = 0; j < this._listKindDevice.length; j++) {
      if(this._listKindDevice[j] == this._listDevices[i].constructor.name){
        break;
      }else {
        count ++;
      }
    }
    if (count == this._listKindDevice.length ){
      this._listKindDevice.push(this._listDevices[i].constructor.name);
    }
  }
}

SmartHouse.prototype.addDevice = function(device) {
  this._listDevices.push(device);
  this.setListKindDevice();
};


//ViewController

var root = document.getElementById("root");
root.className = "root";

function SmartHouseView(smartHouse) {
  this._smartHouse = smartHouse;
};

SmartHouseView.prototype.render = function() {
  var shConteiner = document.createElement("div");
  shConteiner.className = "sh";
  root.appendChild(shConteiner);
  shConteiner.innerHTML = "<div>Smart House</div><div>" + this._smartHouse.getName() + "</div>";

  var turnOffAll = document.createElement("button");
  turnOffAll.className = "offAll";
  turnOffAll.innerText = "Turn off all devices";
  turnOffAll.addEventListener(
    "click",
    function() {
      var listDevices = this._smartHouse.getListDevices();
      for (var i = 0; i < listDevices.length; i++) {
        if((document.getElementById("state"+listDevices[i].getName()) != null)) {   //Check if we delete device from page
          var elemState = document.getElementById("state"+listDevices[i].getName());
          listDevices[i].off();
          elemState.innerHTML = "State: " + (listDevices[i].getState() ? "On" : "Off");
          elemState.className = "off";

        }else {
          listDevices.splice(i,1);
          i--;
        }
      }
    }.bind(this)
  );
  shConteiner.appendChild(turnOffAll);

  var brElem = document.createElement("br")
  var addDeviceBtn  = document.createElement("button");
  addDeviceBtn.className = "addDevbtn";
  addDeviceBtn.innerText = "Add new device";
  shConteiner.appendChild(addDeviceBtn);
  addDeviceBtn.addEventListener(
    "click",
    function () {
      var listKindDevice = this._smartHouse.getListKindDevice();
      var divNewDevice = document.createElement("div");
      divNewDevice.id = "divNewDevice";
      shConteiner.appendChild(divNewDevice);
      var selectKindDevice = document.createElement("select");
      selectKindDevice.id = "selectKindDevice";


      for (var i = 0; i < listKindDevice.length; i++) {
        var option =  document.createElement("option");
        option.id = "option" + listKindDevice[i];
        option.innerHTML = listKindDevice[i];
        selectKindDevice.appendChild(option);
      }
      divNewDevice.appendChild(selectKindDevice);

      var inputName = document.createElement("input");
      inputName.id = "inputNameDev";
      inputName.placeholder = "name of device";
      var inputModel = document.createElement("input")
      inputModel.id = "inputModelDev";
      inputModel.placeholder = "model of device";
      var inputType = document.createElement("input")
      inputType.id = "inputTypeDev";
      inputType.placeholder = "type of device";

      divNewDevice.appendChild(inputName);
      divNewDevice.appendChild(inputModel);
      divNewDevice.appendChild(inputType);

      var inputButton = document.createElement("button");
      inputButton.id = "buttonCreateNewDev";
      inputButton.innerText = "Create new device";
      divNewDevice.appendChild(inputButton);
      inputButton.addEventListener(
        "click",
        function () {
          if(selectKindDevice.value == "Light"){
            var devName = inputName.value;
            var devModel = inputModel.value;
            var devType = inputType.value;
            var newLight = new Light(devName, devModel, devType);
            this._smartHouse.addDevice(newLight);
            var newLightVC = new LightView(newLight);
            newLightVC.render();
          }
          if(selectKindDevice.value == "Media"){
            var devName = inputName.value;
            var devModel = inputModel.value;
            var devType = inputType.value;
            var newTV = new Media(devName, devModel, devType, listChannel);
            this._smartHouse.addDevice(newTV);
            var newMediaVC = new TVView(newTV);
            newMediaVC.render();
          }
          shConteiner.removeChild(divNewDevice);
        }.bind(this)
      );
    }.bind(this)
  );



};

//ViewController of TV
function TVView(TVModel) {
  this._TVModel = TVModel;
};

TVView.prototype.render = function() {

  var TVContainer = document.createElement("div");
  TVContainer.className = "tv";
  root.appendChild(TVContainer);

  TVContainer.innerHTML = "<div>"+ this._TVModel.getName() +"</div><div>Model: " + this._TVModel.getModel() + "</div>";

  var onBtn = document.createElement("button");
  onBtn.innerText = "On";
  onBtn.addEventListener(
    "click",
    function() {
      this._TVModel.on();
      state.innerHTML = "State: " + (this._TVModel.getState() ? "On" : "Off");
      state.className = "on";
      incrBtnVol.disabled = false;
      decrBtnVol.disabled = false;
      decrBtnChannel.disabled = false;
      incrBtnChannel.disabled = false;
      curChannel.style.display = "block";
      listChannel.style.display = "block";
      volume.style.display = "block";
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
      incrBtnVol.disabled = true;
      decrBtnVol.disabled = true;
      decrBtnChannel.disabled = true;
      incrBtnChannel.disabled = true;
      curChannel.style.display = "none";
      listChannel.style.display = "none";
      volume.style.display = "none"
    }.bind(this)
  );
  TVContainer.appendChild(offBtn);

  var state = document.createElement("div");
  state.innerHTML = "State: " + (this._TVModel.getState() ? "On" : "Off");
  state.id = "state" + this._TVModel.getName();
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

  var decrBtnChannel = document.createElement("button");
  decrBtnChannel.innerText = "Prev";
  decrBtnChannel.addEventListener(
    "click",
    function() {
      this._TVModel.previousMedia();
      curChannel.innerHTML = "Channel: " + this._TVModel.showInfoMedia();
    }.bind(this)
  );this._TVModel.getModel()
  TVContainer.appendChild(decrBtnChannel);

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

  if(this._TVModel.getState() == false){
    incrBtnVol.disabled = true;
    decrBtnVol.disabled = true;
    decrBtnChannel.disabled = true;
    incrBtnChannel.disabled = true;
    curChannel.style.display = "none";
    listChannel.style.display = "none";
    volume.style.display = "none";
  };

  var delBtn = document.createElement("button");
  delBtn.innerText = "Remove TV";
  TVContainer.appendChild(delBtn);
  delBtn.onclick = function() {
    root.removeChild(TVContainer);
  }.bind(this);

};
// END of ViewController TV


//ViewController of LIGHTthis._TVModel.getModel()

var changedBrightness = {
  changeBright: function(curBright, elem) {
    switch (curBright) {
      case 1:
        elem.style.background = "lightyellow"
        break;
      case 2:
        elem.style.background = "PapayaWhip"
        break;
      case 3:
        elem.style.background = "PaleGoldenrod"
        break;
      case 4:
        elem.style.background = "Yellow"
        break;
      case 5:
        elem.style.background = "Gold"
        break;
      default:
        elem.style.background = ""
    };
  }
}

function LightView(lightModel) {
  this._lightModel = lightModel;
};

LightView.prototype.render = function() {
  var lightContainer = document.createElement("div");
  lightContainer.className = "light";
  root.appendChild(lightContainer);

  lightContainer.innerHTML = "<div>"+this._lightModel.getName()+"</div><div>Model: " + this._lightModel.getModel() + "</div>";

  var onBtn = document.createElement("button");
  onBtn.innerText = "On";
  onBtn.addEventListener(
    "click",
    function() {
      this._lightModel.on();
      state.innerHTML = "State: " + (this._lightModel.getState() ? "On" : "Off");
      state.className = "on";
      incrBtnBrigt.disabled = false;
      decrBtnBrigt.disabled = false;
      brightness.style.display = "block";
      changedBrightness.changeBright(this._lightModel.getCurrentBrightness(), lightContainer);
    }.bind(this)
  );
  lightContainer.appendChild(onBtn);

  var offBtn = document.createElement("button");
  offBtn.innerText = "Off";
  offBtn.addEventListener(
    "click",
    function() {
      this._lightModel.off();
      state.innerHTML = "State: " + (this._lightModel.getState() ? "On" : "Off");
      state.className = "off";
      incrBtnBrigt.disabled = true;
      decrBtnBrigt.disabled = true;
      lightContainer.style.background = "gray";
      brightness.style.display = "none";
    }.bind(this)
  );
  lightContainer.appendChild(offBtn);

  var state = document.createElement("div");
  state.innerHTML = "State: " + (this._lightModel.getState() ? "On" : "Off");
    state.id = "state" + this._lightModel.getName();
  state.className = "off";
  state.name = "state";
  lightContainer.appendChild(state);

  var brightness = document.createElement("div");
  brightness.innerHTML = "brightness: " + this._lightModel.getCurrentBrightness();
  changedBrightness.changeBright(this._lightModel.getCurrentBrightness(), lightContainer); //Object for change Brigh
  lightContainer.appendChild(brightness);

  var decrBtnBrigt = document.createElement("button");
  decrBtnBrigt.innerText = "Brightness --";
  decrBtnBrigt.addEventListener(
    "click",
    function() {
      this._lightModel.lessBrightness();
      brightness.innerHTML = "Brightness: " + this._lightModel.getCurrentBrightness();
      changedBrightness.changeBright(this._lightModel.getCurrentBrightness(), lightContainer); //Object for change Brigh
    }.bind(this)
  );
  lightContainer.appendChild(decrBtnBrigt);

  var incrBtnBrigt = document.createElement("button");
  incrBtnBrigt.innerText = "Brigh. ++";
  incrBtnBrigt.addEventListener(
    "click",
    function() {
      this._lightModel.moreBrightness();
      brightness.innerHTML = "Brightness: " + this._lightModel.getCurrentBrightness();
      changedBrightness.changeBright(this._lightModel.getCurrentBrightness(), lightContainer); //Object for change Brigh
    }.bind(this)
  );
  lightContainer.appendChild(incrBtnBrigt);

  if(this._lightModel.getState() == false){
    incrBtnBrigt.disabled = true;
    decrBtnBrigt.disabled = true;
    lightContainer.style.background = "gray";
    brightness.style.display = "none";
  };

  var delBtn = document.createElement("button");
  delBtn.innerText = "Remove";
  lightContainer.appendChild(delBtn);
  delBtn.onclick = function() {
    root.removeChild(lightContainer);
  };
}

var listChannel = [new TVChannel("Inter"), new TVChannel("1+1"), new TVChannel("stb")];
var tv = new Media("tv","tv-sams-42d", "tv", listChannel);
var light = new Light("light","bosh-br60vt", "mainLight");
var devices = [tv, light];

var sHouse = new SmartHouse("My House", devices);
sHouse.setListKindDevice();

var shVC = new SmartHouseView(sHouse);
shVC.render();
var tvVC = new TVView(tv);
tvVC.render();

var lightVC = new LightView(light);
lightVC.render();
