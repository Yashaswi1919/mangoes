class Stone{
    constructor(x,y,diametre){
        var options={
            isStatic:false,
            restituiton:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diametre,options);
        this.diametre=diametre;
        this.image = loadImage("images/stone.png");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.positon.y);
        imageMode(CENTER);
        this.image(this.image,0,0,this.diameter);
        pop();
    }
}