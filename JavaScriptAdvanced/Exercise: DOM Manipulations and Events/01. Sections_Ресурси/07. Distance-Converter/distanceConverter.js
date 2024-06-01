function attachEventsListeners() {
  let [input, output] = document.querySelectorAll('input[type="text"]');
  let fromOption = document.querySelector("#inputUnits");
  let toOption = document.querySelector("#outputUnits");
  let convertButton = document.getElementById("convert");

  convertButton.addEventListener("click", (e) => {
    let convert = Number(input.value);
    let result = 0;
    switch (fromOption.value) {
      case "km":
        convert *= 1000;
        break;
      case "m":
        convert *= 1;
        break;
      case "sm":
        convert *= 0.01;
        break;
      case "mm":
        convert *= 0.001;
        break;
      case "mi":
        convert *= 1609.34;
        break;
      case "yrd":
        convert *= 0.9144;
        break;
      case "ft":
        convert *= 0.3048;
        break;
      case "in":
        convert *= 0.0254;
        break;
      default:
        break;
    };
    switch (toOption.value) {
        case "km":
            result = convert / 1000;
            break;
        case "m":
            result = convert / 1;
            break;
        case "sm":
            result = convert / 0.01;
            break;
        case "mm":
            result = convert / 0.001;
            break;
        case "mi":
            result = convert / 1609.34;
            break;
        case "yrd":
            result = convert / 0.9144;
            break;
        case "ft":
            result = convert / 0.3048;
            break;
        case "in":
            result = convert / 0.0254;
            break;
        default:
            break;
        };
        output.value = result;
  });
}
