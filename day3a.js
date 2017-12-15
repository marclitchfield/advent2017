const distance = (start, end) => {
  const startMem = memory(start);
  const endMem = memory(end);
  return Math.abs(endMem.y - startMem.y) + Math.abs(endMem.x - startMem.x);
}

const memory = (num) => {
  const moves = [[1,0], [0,-1], [-1,0], [0,1]];
  return [...Array(num).keys()].reduce((state) => {
    return next(state, num);
  }, {x:-1, y:0, length: 2, step: 0, dx: moves[0][0], dy: moves[0][1], moves: moves });
}

const next = (state, num) => {
  const rotate = state.step === state.length / 2 || state.step >= state.length;
  const moves = rotate ? state.moves.slice(1).concat([state.moves[0]]) : state.moves;
  const x = state.x + state.dx;
  const y = state.y + state.dy;
  const entry = {
    x: x,
    y: y,
    length: (state.step >= state.length ? state.length + 2 : state.length),
    step: (state.step >= state.length ? 1 : state.step + 1),
    dx: moves[0][0],
    dy: moves[0][1],
    moves: moves
  }
  return entry;
}

console.log('result is', distance(1, 347991));
