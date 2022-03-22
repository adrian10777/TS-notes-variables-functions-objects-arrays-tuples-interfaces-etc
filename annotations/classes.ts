//classes

// classes are blueprints, to create an onj wiht some fields (values) and methods to represent a thing

class Vehicle {

  constructor(public color: string){

  }

  protected drive(): void {
    console.log('chugga chugga')
  }

  protected honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {

  constructor(public wheels: number, color: string){
    super(color);
  }


  private drive():void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


 const car = new Car(4, 'red');
car.startDrivingProcess();
