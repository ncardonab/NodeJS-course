module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(
      () =>
        callback(
          new Error(
            `Rectangle dimensions should be greater than 0: x = ${x} and y = ${y} \n`
          ),
          null
        ),
      2000
    );
  } else {
    setTimeout(
      () =>
        callback(
          null, // The error is set to null
          {
            perimeter: () => 2 * (x + y),
            area: () => x * y,
          }
        ),
      2000
    );
  }
};

exports.perimeter = (x, y) => 2 * (x + y);
exports.area = (x, y) => x * y;
