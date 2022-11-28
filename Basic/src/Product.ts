// import NewCircle, { Size } from "./Shapes";
import * as Shapes from "./Shapes";

// const circle = new NewCircle(1);
const circle = new Shapes.Circle(1);
console.log(circle.radius, Shapes.CircleSize.Medium);

export { Shapes }