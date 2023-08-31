// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


function create_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    const car: any = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let option of options) {
      const key: string = Object.keys(option)[0];
      const value: any = option[key];
      car[key] = value;
    }
  
    return car;
  }
  
  // Calling the function with the required information and additional options
  const carInfo: object = create_car("Toyota", "Camry", { color: "Blue" }, { features: ["GPS", "Sunroof"] });
  
  // Printing the returned object
  console.log(carInfo);
  