function cookingbyNumbers(num, ...operations) {
  for(let operation of operations) {
    switch (operation) {
      case 'chop':
        num /= 2;
        console.log(num)
        break;
      case 'dice':
        num = Math.sqrt(num);
        console.log(num);
        break;
      case 'spice':
        num +=1;
        console.log(num);
        break;
      case 'bake':
        num *=3;
        console.log(num);
        break;
      case 'fillet':
        num = num * 0.8;
        console.log(num.toFixed(2));
        break;
      default:
        break;
    }
  }
}
cookingbyNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');