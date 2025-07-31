# Tipos de base de datos

## SQL (MySQl, PostgreSQL, SQLServer, etc)
+ Relacionales
+ Tablas 
+ Esquema

> Las bases de datos Relacionales se componen de un conjunto de tablas o capsulas de información, las cuales se relacionan mediante indices, y en cada una de las tablas se guarda la información de forma separada y luego se relaciona mediente joins y subconsultas.

>Por ejemplo, podemos tener dos tablas, podríamos tener una tabla de artículos y una tabla de usuarios... Esta tabla de usuarios puede haber creado este artículo y se relacionan mediante un **ID**, utilizando **claves primarias** y **claves ajenas o claves foráneas**.

En las bases de datos SQL están orientadas a tablas porque la información se guarda de manera ordenada y con un esquema claro y fijo. Es decir, ***todas las tablas tienen los mismos campos, con las mismas filas y columnas, lo que garantiza que el esquema sea constante y predecible***.


## NoSQL (MongoDB)
+ No Relacionales.
+ JavaScript.
+ Orientada a Documentos (json, bson).
+ Sencillez.
+ Velocidad.
+ Esquema Libre 

> Las bases de datos NoSQL se componen de un conjunto de **estructuras de datos flexibles y variadas** (documentos, grafos, clave-valor, columnas anchas), las cuales no se relacionan necesariamente mediante índices rígidos como en las relacionales. La información se guarda de forma más desacoplada y se relaciona **implícitamente, por referencia o incrustando datos**, en lugar de depender de joins y subconsultas tradicionales.

> Por ejemplo, podríamos tener dos colecciones (no tablas): una de artículos y otra de usuarios... Un artículo podría **incrustar directamente la información** del usuario que lo creó (como su nombre y ID) dentro del propio documento del artículo, o simplemente **referenciarlo mediante su ID** sin una clave foránea explícita. La flexibilidad radica en que los datos del usuario pueden estar directamente en el artículo, o el artículo puede tener diferentes campos si es necesario.

En las bases de datos NoSQL, las estructuras de datos NO están orientadas a un esquema fijo. La información se guarda de manera adaptable y con un esquema dinámico y flexible. Es decir, ***las "colecciones" o conjuntos de datos pueden tener documentos individuales con campos variables, diferentes estructuras de filas y columnas, lo que permite que el esquema cambie y evolucione constantemente según las necesidades***.


# Resumen de Diferencias: SQL (Relacional) vs. NoSQL

## Bases de Datos SQL (Relacionales):

+ **Estructura**: Se componen de un conjunto de ___tablas o cápsulas de información___ con filas y columnas fijas.

+ **Esquema**: Tienen un esquema ___rígido y predefinido (fijo)___. Todas las filas en una tabla deben seguir la misma estructura de campos.

+ **Relaciones**: Las tablas se ___relacionan explícitamente___ mediante índices, ___claves primarias y claves foráneas (foreign keys)___, utilizando ___JOINs___ y subconsultas para combinar datos.

+ **Tipo de datos**: Ideales para ___datos estructurados___ donde la coherencia y las relaciones son primordiales.

## Bases de Datos NoSQL:

+ **Estructura**: Utilizan ___estructuras de datos flexibles y variadas___ como documentos (JSON), grafos, clave-valor o columnas anchas. No se basan en tablas con esquemas fijos.

+ **Esquema**: Tienen un ___esquema dinámico y flexible___. Los "documentos" o entradas dentro de una colección pueden tener campos variables y estructuras diferentes.

+ **Relaciones**: Las relaciones son más ___flexibles___; pueden ser ___implícitas, por referencia__ (simplemente guardando un ID) o ___incrustando__ directamente los datos relacionados dentro de un mismo "documento". No usan JOINs tradicionales.

+ **Tipo de datos**: Adecuadas para ___datos semi-estructurados o no estructurados___ y para escenarios que requieren alta escalabilidad horizontal y flexibilidad.