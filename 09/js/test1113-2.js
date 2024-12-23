//원기둥 객체 만들기. 
class Cylinder{
    constructor(cy1_diameter, cy1_height){
        this.cy1_diameter = cy1_diameter;
        this.cy1_height = cy1_height;
    }

    vol1(){
        let r = this.cy1_diameter/2;
        return(Math.PI * r * r *this.cy1_height).toFixed(2);
    }
}