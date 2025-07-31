print("Hola Mundo Soy Helmer Morales")


"""
Texto que no se va a interpretar por Python
"""

#VARIABLES
text = "Repaso de Python"
nombre = "Helmer Morales"
year = 2023

#dos formas de concatenar texto
print(f"{text} {nombre} {str(year)}") # primera forma
print(text + " " + nombre + " " + str(year)) # segunda forma
# el como usar las variables es indiferente, pero la primera forma es más limpia y legible

#ENTRADA
sitioweb = input("Introduce tu sitio web: ")
print(f"Tu sitio web es: {sitioweb}")


#CONDICIONES

if (year >= 2023):
    print("Estamos en el año 2023 o posterior")
elif (year < 2023):
    print("Estamos en un año anterior a 2023")
else:
    print("No se ha podido determinar el año")

#FUNCIONES
def mostrarAltura(altura):
    print(f"La altura es: {str(altura)} cm")
    if (altura >= 180):
        print("Eres alto")
    elif (altura < 180):
        print("Eres bajo")

altura = int(input("Introduce tu altura en cm: "))
mostrarAltura(altura)

#LISTAS 
lenguajes = ["Python", "JavaScript", "Java", "C++", "Ruby"]
print("Lenguajes de programación:")

#BUCLES
for lenguaje in lenguajes:
    print(lenguaje)