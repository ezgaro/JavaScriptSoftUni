class Figure {
  constructor() {
    this.units = "cm";
  }

  get area() {
    // Placeholder: should be overridden by subclasses
    return null;
  }

  changeUnits(newUnits) {
    this.units = newUnits;
  }

  toString() {
    return `Figures units: ${this.units}`;
  }
}

class Circle extends Figure {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  get area() {
    let factor = this._getConversionFactor();
    return Math.PI * (this.radius * factor) ** 2;
  }

  toString() {
    let factor = this._getConversionFactor();
    return `${super.toString()} Area: ${this.area.toFixed(2)} - radius: ${(this.radius * factor).toFixed(2)}`;
  }

  _getConversionFactor() {
    switch (this.units) {
      case "m": return 0.01;
      case "mm": return 10;
      default: return 1; // cm is the default
    }
  }
}

class Rectangle extends Figure {
  constructor(width, height, units = "cm") {
    super();
    this.width = width;
    this.height = height;
    this.units = units;
  }

  get area() {
    let factor = this._getConversionFactor();
    return (this.width * factor) * (this.height * factor);
  }

  toString() {
    let factor = this._getConversionFactor();
    return `${super.toString()} Area: ${this.area.toFixed(2)} - width: ${(this.width * factor).toFixed(2)}, height: ${(this.height * factor).toFixed(2)}`;
  }

  _getConversionFactor() {
    switch (this.units) {
      case "m": return 0.01;
      case "mm": return 10;
      default: return 1; // cm is the default
    }
  }
}