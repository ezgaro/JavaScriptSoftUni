function softUniGameBar(data) {
  const regex = /%(?<name>[A-Z][a-z]*)%<(?<product>\w+)>\|(?<count>\d+)\|(?<price>\d+\.?\d+)\$/;
  let totalIncome = 0;

  for (let line of data) {
      if (line === 'end of shift') {
          break;
      }

      const match = line.match(regex);
      if (match) {
          const { name, product, count, price } = match.groups;
          const totalPrice = count * price;
          totalIncome += totalPrice;
          console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
      }
  }

  console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniGameBar([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift'
]);