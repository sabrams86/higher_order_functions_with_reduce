module.exports = {

  map: function(array, cb){
    return array.reduce(function (prev, curr) {
      return prev.concat(cb(curr));
    },[]);
  },

  filter: function (array, cb) {
    return array.reduce(function (prev, curr) {
      if (cb(curr)){
        return prev.concat(curr)
      } else {
        return prev;
      }
    },[]);
  },

  every: function (array, cb) {
    return array.reduce(function (prev, curr) {
      return cb(curr) && prev
    }, true);
  },

  some: function (array, cb) {
    return array.reduce(function (prev, curr) {
      return cb(curr) || prev
    }, false);
  },

  none: function (array, cb) {
    return array.reduce(function (prev, curr) {
      return !cb(curr) && prev
    }, true);
  },
}
