names =["sarika","poorva","amit"]
names2=names
names2[0]="raj"
print(names)
print(names2)

#program 2
#append()

fruits=["apple","mango","banana"]
fruits.append("grapes")
print(fruits)

# program 3
#pop()
#pop(index)
#remove()

vegetables=["cabbage","cauliflower","tomato","potato"]
vegetables.pop()
print(vegetables)
vegetables.pop(1)
print(vegetables)
vegetables.remove("tomato")
print(vegetables)

# program 4
animals=["tiger","lion","rabbit","panther","tiger","lion"]
#animals.clear()
#print(animals)
q1= animals.count("tiger")
print(q1)

# program 5
city=["pune","mumbai","banglore","kolkata"]
city.reverse()
print(city)

#program 6
country=["india","bangladesh","srilanka","japan"]
country.insert(2,"china")
print(country)

#program 7
district=["chandrapur","wardha","nagpur"]
district.sort()        #alphabetically
print(district)

# pfogram 8
listA=[11,22,33]
#listB=listA
#listB[0]=88
#print(listB)
#print(listA)

listD=listA.copy()
listD[1]=111
print(listD)
print(listA)

listA=[11,22,33]
listA.extend([77,88,99])
print(listA)
q1=listA.index(77)
print(q1)





