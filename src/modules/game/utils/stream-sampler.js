export default class StreamSampler {
  constructor(n) {
    this.n = n;
    this.count = 0;
    this.results = [];
  }

  next(v) {
    this.count += 1;
    if (this.count <= this.n) {
      this.results.push(v);
    } else {
      const r = Math.floor(Math.random() * this.count);
      if (r < this.n) {
        this.results[r] = v;
      }
    }
  }
}
