# NODE JS
Plataforma que nos permite trabajar con el servidor con javascript
1. Conexion a BD
2. Crear servidor
3. Postman
4. Modelos
5. Controladores y rutas 
6. Subir archivos
7. Front-end con Angular

# INTRODUCCION 
- Permite desarrollar script
- Para desarrollar un APIrest o backend

________________________________________________
Para ejecutar un archivo se debe ir al terminar
y ejecutar el archivo js a node

	node archivo.js

________________________________________________
# NODE.JS, ACCEPT ARGUMENTS FROM THE COMMAND LINE
	You can pass any number of arguments when invoking a Node.js application using

 		$ node app.js

 	Arguments can be standalone or have a key and a value.
 	ejem:
		$ node app.js joe  or  $ node app.js name=joe

	The way you retrieve(recuperar) it is using the "process" object built into Node.js.
	It exposes an "argv" property, which is an array that contains all the command line invocation arguments.
	- The first element is the full path of the node command (ruta completa).
	- The second element is the full path of the file being executed (El contenido).
	ejem:
		process.argv.forEach((val, index) => {
		  console.log(`${index}: ${val}`)
		})

	You can get only the additional arguments by creating a new array that excludes the first 2 params:
	ejem:	
		const args = process.argv.slice(2)

		If you have one argument without an index name, like this:
			$ node app.js joe
		you can access it using
			const args = process.argv.slice(2)
			args[0]

____________________________________
# Para crear un nuevo proyecto se ejecuta el comando:

	$ npm init //Para iniciar el proyecto
Posteriormente se debe ingresar el nombre, la version, description, entry point(Punto de inicio del programa), 

__________________________________
# Para instalar dependencias o los paquetes 
	Ejecutamos el comando 
		$ npm install (paquete a instalar)

		ejm
			$ npm install express --save
			//express -> es un farewall que trabaja con el protocolo http, define rutas, recibir peticiones, crear metodos, etc 
			//--save -> permite guardarlo en el proyecto local

		$ npm install body-parser --save 

		es una libreria para convertir las librerias realizadas al backend a un objeto JSON usable en JS. Es decir si envio por POST lo convertira a JSON

		$ npm install connect-multiparty --save

		Permite subir archivos a mi backend, y poder trabajar con el protolo FILE, recojo fichero y guardo en mi servidor

		$npm install mongoose --save

		Es una libreria ORM
	---ORM (Object Relational Mapping)---
	ORM es una técnica de programación para convertir datos entre el lenguaje de programación orientado a objetos utilizado y el sistema de base de datos relacional 
		Esta libreria trabaja con MongoDB, con esta libreria se tiene una serie de metodos para trabajar con MongoDB 

		$npm install nodemon --save-dev

		Permite que al ejecutar un cambio en el codigo automaticamente el servidor se refresco o se vuelva a reinicar.
		Es una dependencia de desarrollo local

__________________________________________
# Package.json
	there are lots of things going on here:

    name: 		 sets the application/package name
    version: 	 indicates the current version
    description: is a brief description of the app/package
    main: 		 set the entry point for the application
    private: 	 if set to true prevents the app/package to be accidentally published on npm
    scripts: 	 defines a set of node scripts you can run
    dependencies:	 sets a list of npm packages installed as dependencies
    devDependencies: sets a list of npm packages installed as development dependencies
    (Una developer dependency es aquella de la que dependes en la fase de desarrollo mas no en la fase de ejecución / distribución)
    engines: sets 	 which versions of Node.js this package/app works on
    browserslist: 	 is used to tell which browsers (and their versions) you want to support

	All those properties are used by either npm or other tools that we can use.

	More detaills
	
	---scripts: Defines a set of node scripts you can run
		Example:

		"scripts": {
		  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
		  "start": "npm run dev",
		  "unit": "jest --config test/unit/jest.conf.js --coverage",
		  "test": "npm run unit",
		  "lint": "eslint --ext .js,.vue src test/unit",
		  "build": "node build/build.js"
		}

		 You can run them by calling npm run XXXX or yarn XXXX, where XXXX is the command name. Example: npm run dev.

	---dependencies:   Sets a list of npm packages installed as dependencies. When you install a package using npm or yarn:

		npm install <PACKAGENAME>
		yarn add <PACKAGENAME>

	that package is automatically inserted in this list.

		Example:
		"dependencies": {
		  "vue": "^2.5.2"
		}

	---devDependencies: 	Sets a list of npm packages installed as development dependencies. They differ from dependencies because they are meant to be installed only on a development machine, not needed to run the code in production.
	When you install a package using npm or yarn:

		npm install --dev <PACKAGENAME>
		yarn add --dev <PACKAGENAME>

	that package is automatically inserted in this list.

		Example:

		"devDependencies": {
		  "autoprefixer": "^7.1.2",
		  "babel-core": "^6.22.1"
		}

_________________________________________________________
# NPM DEPENDENCIES AND DEVDEPENDENCIES

When you install an npm package using "npm install <package-name>", you are installing it as a "dependency".
The package is automatically listed in the package.json file, under the "dependencies" list.

When you add the -D flag, or --save-dev, you are installing it as a "development dependency", which adds it to the "devDependencies" list.


________________________________________________________
# EXPRESS
(https://expressjs.com/es/guide/routing.html) 
RUTAS
	Esta vía de acceso de ruta coincidirá con las solicitudes a la ruta raíz, /.
		app.get('/', function (req, res) {
		  res.send('root');
		});

	Esta vía de acceso de ruta coincidirá con las solicitudes a /about.
		app.get('/about', function (req, res) {
		  res.send('about');
		});

	Esta vía de acceso de ruta coincidirá con acd y abcd.
		app.get('/ab?cd', function(req, res) {
		  res.send('ab?cd');
		});

	Esta vía de acceso de ruta coincidirá con abcd, abbcd, abbbcd, etc.
		app.get('/ab+cd', function(req, res) {
		  res.send('ab+cd');
		});

	Esta vía de acceso de ruta coincidirá con abcd, abxcd, abRABDOMcd, ab123cd, etc.
		app.get('/ab*cd', function(req, res) {
		  res.send('ab*cd');
		});

	Esta vía de acceso de ruta coincidirá con /abe y /abcde.
		app.get('/ab(cd)?e', function(req, res) {
		 res.send('ab(cd)?e');
		});
		
		NOTA:  
		Los caracteres ?, +, * y () son subconjuntos de sus contrapartidas de expresiones regulares. El guión (-) y el punto (.) se interpretan literalmente en las vías de acceso basadas en series.

	Esta vía de acceso de ruta coincidirá con cualquier valor con una “a” en el nombre de la ruta.
		app.get(/a/, function(req, res) {
		  res.send('/a/');
		});

MANEJADORES DE RUTAS
	
________________________________________________
# MONGOOSE 
(REF: https://www.npmjs.com/package/mongoose)

DEFINING A MODEL
CONNECTING TO MongoDB
	First, we need to define a connection. 
	If your app uses only one database, you should use "mongoose.connect". 
	If you need to create additional connections, use "mongoose.createConnection".

	Both connect and createConnection take a mongodb:// URI, or the parameters host, database, port, options.
	EJM
		await mongoose.connect('mongodb://localhost/my_databaseName', {
		  useNewUrlParser: true,
		  useUnifiedTopology: true,
		  useFindAndModify: false,
		  useCreateIndex: true
		});

DEFINING A MODEL
	Models are defined through the Schema interface.
	EJM
		const Schema = mongoose.Schema;
		const ObjectId = Schema.ObjectId;
		 
		const BlogPost = new Schema({
		  author: ObjectId,
		  title: String,
		  body: String,
		  date: Date
		});

	Aside(aparte) from defining the structure of your documents and the types of data you're storing, a Schema handles the definition of:
	    - Validators (async and sync)
	    - Defaults
	    - Getters
	    - Setters
	    - Indexes
	    - Middleware : 
	    - Methods definition
	    - Statics definition
	    - Plugins
	    - pseudo-JOINs

	The following example shows some of these features:
	EJM
		const Comment = new Schema({
		  name: { type: String, default: 'hahaha' },
		  age: { type: Number, min: 18, index: true },
		  bio: { type: String, match: /[a-z]/ },
		  date: { type: Date, default: Date.now },
		  buff: Buffer
		});

		// a setter 
		Comment.path('name').set(function (v) {
		  return capitalize(v);
		});
		 
		// middleware
		Comment.pre('save', function (next) {
		  notify(this.get('email'));
		  next();
		});

__________________
# Middleware 
(https://expressjs.com/es/guide/using-middleware.html)
Las funciones de middleware son funciones que tienen acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación. La siguiente función de middleware se denota normalmente con una variable denominada next.

Las funciones de middleware pueden realizar las siguientes tareas:
   - Ejecutar cualquier código.
   - Realizar cambios en la solicitud y los objetos de respuesta.
   - Finalizar el ciclo de solicitud/respuestas.
   - Invocar la siguiente función de middleware en la pila.

Si la función de middleware actual no finaliza el ciclo de solicitud/respuestas, debe invocar next() para pasar el control a la siguiente función de middleware. De lo contrario, la solicitud quedará colgada.

def 
Middleware 
Middleware es software que se sitúa entre un sistema operativo y las aplicaciones que se ejecutan en él. Básicamente, funciona como una capa de traducción oculta para permitir la comunicación y la administración de datos en aplicaciones distribuidas.

__________________
# CORS
