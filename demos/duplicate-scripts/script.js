(() => {
  console.time('runtime')
  for (let index = 0; index < 1_000_000_000; index++) {
    // mock blocking time.
  }
  console.timeEnd('runtime')
})();
