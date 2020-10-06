var array = [
    "string",
    "hello",
    "world200",
    200,
    function(){ return "drive"; },
];
array[0] = "New string";
array.shift();
array.pop();
array.unshift( "new", "values" );
array.push( "ending", "values" );
array.splice( 2, 2, "new elemets", [], {}, 200, 300, function(){} );
