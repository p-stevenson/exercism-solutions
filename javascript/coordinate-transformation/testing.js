const dx = -6;
const dy = 10;
const translator = translate2d(dx, dy);
const sx = 3;
const sy = 2;
const scaler = scale2d(sx, sy);

function translate2d(dx, dy) {
  return function initialCoords(x, y) {
    return [dx + x, dy + y]
  }
}

function scale2d(sx, sy) {
  return function initialCoords(x, y) {
    return [sx * x, sy * y]
  }
}

function composeTransform(f1, f2) {
  return function someFunc(x,y) {
    return f2(...f1(x,y))
  }
}

let composed = composeTransform(scaler, translator)
composed(0,0)

let opposite = composeTransform(translator, scaler)
opposite(0,0)