class Stone
{
	constructor(x,y,w,h)
	{
		var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
        this.image = loadImage("stone.png")
	}
	display()
	{
            var Pos=this.body.position;
   //         Pos.x = obj.x;
     //       Pos.y = obj.y;
			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER)
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
			pop()
			
    }
}