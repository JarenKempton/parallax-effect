const loop = (times, callback) => {
    for(let i = 0; i < times; i++) {
        callback(i);
    }
}

export default loop;