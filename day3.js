const memory = (num) => {
  const moves = [[1,0], [0,-1], [-1,0], [0,1]];
  return [...Array(num).keys()].reduce((state) => {
    return state.value > num ? state : next(state, num);
  }, {x:-1, y:0, value: 1, length: 2, step: 0, dx: moves[0][0], dy: moves[0][1], moves: moves, mem: {} });
}

const next = (state, num) => {
  const rotate = state.step === state.length / 2 || state.step >= state.length;
  const moves = rotate ? state.moves.slice(1).concat([state.moves[0]]) : state.moves;
  const x = state.x + state.dx;
  const y = state.y + state.dy;
  const value = neighbors(state.mem, x, y).reduce((sum, e) => sum + (e || 0), 0) || 1;
  const mem = {...state.mem, [[x,y]]: value};
  const entry = {
    x: x,
    y: y,
    value: value,
    length: (state.step >= state.length ? state.length + 2 : state.length),
    step: (state.step >= state.length ? 1 : state.step + 1),
    dx: moves[0][0],
    dy: moves[0][1],
    mem: mem,
    moves: moves
  }
  return entry;
}

const neighbors = (mem, x, y) => {
  return [
    mem[[x-1,y-1]], mem[[x,y-1]], mem[[x+1,y-1]],
    mem[[x-1,y]], mem[[x+1,y]],
    mem[[x-1,y+1]], mem[[x,y+1]], mem[[x+1,y+1]]
  ];
}

console.log('result is', memory(347991).value);
