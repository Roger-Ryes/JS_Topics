'use strict'

var rest = {
    name: "Gomez",
    body(height, weight){
        return `Your height: ${height} and weight: ${weight}`
    }
}

console.log(rest.body(1.50, 60));