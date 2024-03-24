# list

names=["chinmay","sarika","poorva","chinmay"]
# retrive
print (names[0])
#update
names[0]="tanmay"
print(names)
#add
names.append("ajay")
print(names)
#add
names.insert(2,"ninad")
print(names)
#delete
names.pop()
print(names)
names.pop(1)
print(names)
names2=["chinmay","sarika","poorva","chinmay"]
names2.remove("chinmay")
print(names2)
#in 
print("tanmay"in names)

#program2

info=["chinmay","deshpande",34,55]

info2={
    #key:value
    #property:value
    "firstName":"chinmay",
    "lastName":"deshpande",
    "age":34,
    "rollNo":55
}

#print(info2[0])
#retrive
e=info2['firstName']
print(e)

#update
info2['firstName']="poorva"
print(info2)

#add
info2['city']="pune"
print(info2)

#delete
info2.pop('firstName')
print(info2)

# program 2

vehicle={
    "color":"red",
    "type":"sedane",
    "color":"blue"
}
print(type(vehicle))

#len()
print(len(vehicle))

#in
print("color" in vehicle)

#duplicate keys
print(vehicle)

#retrive
vehicle['color']="red"
vehicle['regNo']="123"
del vehicle
