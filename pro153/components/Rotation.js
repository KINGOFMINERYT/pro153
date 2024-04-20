//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});
AFRAME.registerComponent("plane-control", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init:function(){ 
    window.addEventListener("keydown",(e)=>{
      this.data.speedOfRotation = this.el.getAttribute("rotation")
      this.data.speedOfAscent = this.el.getAttribute("position")
      var pr = this.data.speedOfRotation
      var pp = this.data.speedOfAscent
      if(e.key==="ArrowRight"){
        if(pr.x<10){
          pr.x += 0.5
          this.el.setAttribute("rotation",pr)
        }
        if(pp.y<5){
          pp.y += 0.03
          this.el.setAttribute("position",pp)
        }
      }
      if(e.key==="ArrowLeft"){
        if(pr.x>-10){
          pr.x += -0.5
          this.el.setAttribute("rotation",pr)
        }
        if(pp.y>-2){
          pp.y -= 0.03
          this.el.setAttribute("position",pp)
        }
      }
      if(e.key==="ArrowUp"){
        if(pr.z<10){
          pr.z += 0.5
          this.el.setAttribute("rotation",pr)
        }
        
      }
      if(e.key==="ArrowDown"){
        if(pr.z>-10){
          pr.z -= 0.5
          this.el.setAttribute("rotation",pr)
        }
        
      }
    })
  }

  })




