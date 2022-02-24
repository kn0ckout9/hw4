const pi = Math.PI;
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const circle = {
    radius: r,

  // Return the character description
    circumference() {
        return 2*pi*r;
    },
    area() {
        return pi*r*r;
  },
};


console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
