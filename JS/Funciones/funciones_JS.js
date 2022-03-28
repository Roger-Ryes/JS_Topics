//FUNCION DE CONVERSION
    Number(); // Si le paso un numero en comillas lo convierte a numero 

    parseInt();// Si le paso un numero en comillas lo convierte a numero

    parseFloat();// Si le paso un decimal en comillas lo    convierte a numero

    String(); //Convierte cualquier variable a texto

    variable.toString(); //Se comprota como un metodo que convierte  a string

//DETERMINAR QIE TIPO DE DATO ES
    typeof variable; //Permite determinar que tipo de variable es
    isNaN(); /* Es un note name es decir detecta si son letras   TRUE->Es texto FALSE-> No es un texto*/

//FUNCIONES OPERACIONES DE TEXTO
    //Transformacion de texto
    variable.toString();

    //Transformacion a mayusculas
    variable.toUpperCase();

    //Transformacion a minusculas
    variable.toLowerCase();

    //Calcular longitud
    variable.length;

    //Contatenar - Une texto
    variable1+' '+variable2; //Metodo 1
    variable1.concat(" "+variable2); //Metodo 2

//METODOS DE BUSQUEDA 
    // Busca la palabra y da la posicion (El index)
    variable.indexOf("palabra");

    // Busca la ultima considencia de palabra de un grupo de la misma palabra 
    variable.lastIndexOf("palabra");

    //Otro metodo de busqueda de palabra y con posicion
    variable.search("palabra");
  //El valor -1 significa que no encuenta
    
    //Palabra buscada en un array, entrega la palabra
    variable.match("palabra");

    //Palabras buscadas en un array de un grupo
    variable.match(/palabra/g);

    //Saca la palabra (posicion, numero de caracteres)
    variable.substr(13,5);
    
    //Saca una letra en concreta
    variable.charAt(20);

    //Busca un texto al inicio y envia TRUE o FALSE
    variable.startsWith("palabra inicial");

    //Busca un texto al final y envia TRUE o FALSE
    variable.endsWith("palabra final");

    //Busca una palabra y devuelve TRUE o FALSE
    variable.includes("palabra");

//METODO DE REEMPLAZO
    //Permite Reemplazar 
    variable.replace("palabraNueva","palabraAReemplazar");

//METODO SEPARAR STRING
    //Separar string
    variable.slice(14); // desde
    variable.slice(10, 15); //desde, hasta

    //Recortar palabras y meterlo en un array
    var separador = " "; //espacio
    variable.split(separador);

    //Quita espacios
    variable.trim();

//PLANTILLA DE TEXTO or TEMPLATE LITERALS
    var variable= `<h1> Esto es una plantilla </h1>
                    <h3>Imprimir valor2: ${valor1}</h3>
                    <h3>Imprimir otro valor: ${valor2} </h3>
    `;

//ARRAYS
    //Recorrer arrays con FOREACH
    array.forEach((element,index, ContenidoArray)=> {
        document.write(element); //index y ContenidoArray son opcionales
    });
    //Recorrer arrays con FOR IN
    for(let indice in array){ // Asigna el indice de un array
        document.write(array[indice]);
    }
    //Map
    variable.map((var2,index)=>{
        document.write(index+" "+var2);
    });

    //Agregar un elemento al array
    array.push("palabra_a_agregar");

    //Borrar un elemento del array
    array.pop(); //elimino el ultimo elemento //METODO1
    array[0] = undefined; //Coloca como "undefined" //METODO2
    array.splice(indice,1); //En base a un indice borrar mas inidices (indice, N°_A_borrar)
    
    //Convertir un array a texto
    array.join();
        //Se puede unir y separar
        array.join(" ").split("\"");

    //Convertir de texto a array
    var separador =",";
    cadenaString.split(separador);

    //Ordenar un Array
    array.sort(); //Ordena por orden alfabetico
    array.sort(function(a,b){return a-b}) // Ordenar por orden numerico
    array.reverse(); //Orden inverso al alfabetico

    //Buscar un valor
    busqueda = array.find(function(elemento){
        return elemento == "palabra_a_buscar";
    });
        //Reduccion de codigo usando fleca
        busqueda = array.find(elemento=> 
            elemento == "palabra_a_buscar"
        );
    
    //Buscar la palabra y saca el index
    busqueda = array.findIndex (elemento=> elemento == "accion");

    //Identifica que tipos de valor hay en un Array
    array.some(elemento_int => elemento_int > 90); //Regresa valores booleanos





