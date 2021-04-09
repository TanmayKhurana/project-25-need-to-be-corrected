class Dustbin {
    
        constructor(x,y,w,h){
            var r_options={
                isStatic:true
            }
    
            this.r = Bodies.rectangle(x,y,w,h, r_options);
            this.w = w
            this.h = h
             World.add(world, this.r);
    this.image = loadImage("dustbingreen.png")
        }
        display(){
            var pos = this.r.position
            imageMode(CENTER)
            fill("white");image(this.image, pos.x, pos.y, this.w, this.h)
            
        }
    
}