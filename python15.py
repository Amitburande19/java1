#program 1
#upper()
first_name="chinmay"
print(len(first_name))
e=first_name.upper()
print(e)

#lower()
last_name="Deshpande"
e2=last_name.lower()
print(e2)

middle_name="SHIRISH"
e3=middle_name.isupper()
print(e3)
e4=e2.islower()
print(e4)

city= "pune"
e5=city.startswith("pu")
e6=city.startswith("p")
print(e5)
print(e6)

e7=city.endswith('e')
e8=city.endswith('une')
print(e7)
print(e8)

city2="chandrapur"
e9=city2.count('a')
print(e9)

#program 3

city3 = " wardha"
print(len(city3))
e10=city3.lstrip()
print(e10)
print(len(e10))

city4 =" wardha "
print(len(city4))
e11=city4.rstrip()
print(e11)
print(len(e11))

city5=" wardha "
e12=city5.strip()
print(len(e12))

#program 4
info = "I am learning javascript"
e13 = info.replace("javascript","python")
print(e13)
print(info)

#program 5
e14= "123".isdigit()
print(e14)

#program 6
e15="123#"
e16=e15.isalpha()
print(e16)

e17=e15.isalnum
print(e17)

e18= "hello"
e19="1234"
e20="h123"
e21="h12#"
print(e19.isalnum())
print(e18.isalnum())
print(e20.isalnum())
print(e21.isalnum())

#Revision

first_name="chinmay"
print(len(first_name))
print(first_name.upper())
print(first_name.lower())
print(first_name.isupper())
print(first_name.islower())

first_Name=" amit "
print(len(first_Name))
print(len(first_Name.rstrip()))
print(len(first_Name.lstrip()))
print(len(first_Name.strip()))

#program 3

last_name="deshpande"
print(last_name.startswith("d"))
print(last_name.startswith("de"))
print(last_name.startswith("De"))

print(last_name.endswith("e"))
print(last_name.endswith("ande"))
print(last_name.endswith("De"))

marks="123"
print(marks.isdigit())
print(marks.isnumeric())
print(marks.isalnum())
print(type(marks))

#program 5
full_name=" a"
a3=full_name.isspace()
print(a3)

#program 6
firstN="amit"
a4=firstN.capitalize()
print(a4)

#program 7
a4 = "I Am Learning Javascript"
print(a4.istitle())

# program 8
info =["amit",'burande',"262666"]
a5 ="@".join(info)
print(a5)

#program 9
email = "amitburande@gmail.com"
a6 = email.split("@")
print(a6)

#find()
emailaddress="chinmaya"
print(emailaddress.find('a',6))
print(emailaddress.find('a',8))

#removeprefix
email11="gmail.com@amit"
email12="gmail.com@chimay"
email13="gmail.com@poorva"
#print(email11.removeprefix('gmail.com@'))
students=[email11,email12,email13]
lista=[]
for x in students:
    q1=x.removeprefix("gmail.com@")
    lista.append(q1)
print(lista)  

students={
    "1":"chinmayadmin",
    "2":"poorvaceo",
    "3":"shamcustomer",
    "4":"nirnaymanager"
}

roles=["admin","ceo","customer","manager"]
names=[]
for name in students.values():
    for role in roles:
        if role in name:
            q2=name.removesuffix(role)
            names.append(q2)
print(names)            

#swapcase()
a="hello"
print(a.swapcase())

#zfill

name="chinmay"
name2="ninad"
print(name2.zfill(10))



























































































































