x=10

#list
names=["chinmay","poorva","sarika","sham"]
print(names)
names[2]="mayuri"
print(names)
# list stores the value by index

city=["pune","banglore","chennai","mumbai"]
print(city[0])

# number of elements in list
fruits=["apple","mango","banana","grapes"]
print(len(fruits))

#program 2
#how to update the value in list
animals=["tiger","lion","cat","rabbit","panther"]
animals[0]="snake"
print(animals)

#program 3
country=["india","cuba","china","srilanka","italy"]
for x in range(5):
    print(x)
    print(country[x])


for x in range(len(country)-1,-1,-1):
    print(country[x])

# progam 4

city=["pune","banlore","kolkata","mysore"]
for item in city:
    print(item)   

# program5
    # while loop

flowers=["lilly","jasmine","rose","sunflower"]
i1=0
while(i1<len(flowers)):
    print(flowers[i1])
    i1=i1+1

i2 = len(flowers)-1
while(i2>=0):
    print(i2)
    print(flowers[i2])
    i2=i2-1

# any element present in list

names=["chinmay","ninad","vijeet","mayur"]
print("mayur" in names)                
         