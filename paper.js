class Paper{
	constructor(x,y,d)
	{
		var options={
            restitution: 0,
            friction: 0.3		
			}
		this.d=d;
        this.body=Bodies.circle(x, y, d,options);
        this.img=loadImage("paper.png");
         World.add(world, this.body);
         

	}
	display()
	{
			
			var pos=this.body.position;		
            var angle = this.body.angle;
			push()
            translate(pos.x, pos.y);
            rotate(angle)
			imageMode(CENTER)
			//strokeWeight(4);
            
            
            image( this.img,0,0,this.d);
            
			pop()
			
	}

}
