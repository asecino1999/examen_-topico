var m=require( '../src/ClassDevelop');
 
var pi=3.1416;
var polar =[ 
    {
        polar:{
            teta:pi/3,
            r:2,
        },
        cart:{
            x:1,
            y:Math.sqrt(3)
        }
    },
    {
        polar:{
            teta:pi/4,
            r:Math.sqrt(2),
        },
        cart:{
            x:1,
            y:1,
        }
    }

  ]
describe("", function () {
    var a;
    polar.forEach(element => {
        it("varicadno valores ", function () {
            var punto=m.polarToC(element.polar.r,element.polar.teta);
            var x=Math.round(punto.getX(),-1);
            var y=Math.round(punto.gety(),-1);
            expect(x).toBe(Math.round(element.cart.x,-1));
            expect(y).toBe(Math.round(element.cart.y,-1));
        });    
    });
    polar.forEach(element => {
        it("varicadno valores ", function () {
            var punto=m.cToPolar(element.cart.x,element.cart.y);
            var teta=Math.round(punto.getT(),-1);
            var r=Math.round(punto.getR(),-1);
            expect(teta).toBe(Math.round(element.polar.teta),-1);
            expect(r).toBe(Math.round(element.polar.r),-1);
        });    
    });
});