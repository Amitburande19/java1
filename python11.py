info=["chinmay","deshpande",45,67]

info2={
    "firstName":"chinmay",
    "lastName":"deshpande",
    "age":34,
    "rollNo":45
}
print(type(info2))

# retrive
#print(info2["firstName"])
#update
info2['firstName'] ='tanmay'
print(info2)
#add
info2['city']= "pune"
print(info2)
#delete
info2.pop('firstName')
print(info2)
#in
print("firstName" in info2)


vehicle={
    "color":"red",
    "type":"sedane"
}
print(vehicle)
print(len(vehicle))
print(vehicle["color"])
q1=vehicle.get("color")
print(q1)

#program 2
vehicle={
    "color":"red",
    "type":"sedane"
}
#vehicle.clear()
print(vehicle)

e=vehicle.popitem()
print(vehicle)

#program

info3={
    "firstName":"chinmay",
    "lastName":"deshpande",
    "age":34,
    "rollNo":45
}

for key in info3.keys():
    print(key)

for val in info3.values():
    print(val) 

for k,v in info3.items():
    print(k,v) 

print(info3['firstName'])
for x in info3:
    print(x,info3[x])          
















