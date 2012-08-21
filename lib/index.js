_ = require("underscore");

function Graph () {
  this.vertices = [];
  this.indices = [];

  this.addDefaultIndex();
};

Graph.prototype.addIndex = function (index) {
  this.indices.push(index);
};

Graph.prototype.putVertex = function (vertex) {
  this.vertices.push(vertex);
};

Graph.prototype.findVertices = function (query) {
  var index, vertices;

  index = this.indexForQuery(query);

  if (index) {
    vertices = index.findVertices(query);
  } else {
    vertices = this.findVerticesWithoutIndex(query);
  }

  return vertices;
};

Graph.prototype.indexForQuery = function (query) {

};

Graph.prototype.findVerticesWithoutIndex = function (query) {
  var i, verticesLength, vertices, queryKey, vertex, isMatch;

  vertices = [];

  for (i = 0, verticesLength = this.vertices.length; i < verticesLength; i++) {
    vertex = this.vertices[i];
    isMatch = true;

    for (queryKey in query) {
      if (vertex[queryKey] != query[queryKey]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) vertices.push(vertex);
  }

  return vertices;
}

function Index (properties) {
  this.properties = properties;

  this.cache = {};
}

Index.prototype.putVertex = function (object) {
  var key;

};

Index.prototype.makeKey = function (object) {
  var key, i, propertiesLength;

  key = "";
  propertiesLength = properties.length;

  for (i = 0; i++; i < propertiesLength) {
    
  }
};

var graph = new Graph();

var index = new Index(["id"]);
graph.addIndex(index);

graph.putVertex({id: 1, name: "Brendan", age: 23});
graph.putVertex({id: 2, name: "Nick", age: 23});
graph.putVertex({id: 3, name: "Chyna", age: 22});
graph.putVertex({id: 4, name: "Gianni", age: 30});

var objs = graph.findVertices({id: 1, age: 22});

console.log(graph);
console.log(objs);
