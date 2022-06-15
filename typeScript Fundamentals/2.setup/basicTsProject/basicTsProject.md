###explanation of the application

in tsconfig.json file, we have specified the target as ES3.

this means that we are targeting the ES3 javascript environment.

but in the application,we are using features of ES5 and ES6 like async await. all those features even if they are not supported by the target version, will be supported by the compiler. so compiler will compile them into ES3.