class Dog{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dogImg.png");
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        fill ("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
       
        image(this.image, 0, 0, this.width, this.height);
    }
}