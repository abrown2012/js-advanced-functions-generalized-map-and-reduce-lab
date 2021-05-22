

const map = (sourceArray, fun) => {
    return sourceArray.map(x => fun(x))
}

const reduce = (sourceArray, fun, st=0) => {
    if (st ===0) {
    return (sourceArray.reduce((x, y) => fun(x, y)))
    } else {
        return st+(sourceArray.reduce((x, y) => fun(x, y)))
    }
  }