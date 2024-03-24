# program 1

birthyear=[1989,1990,1991,1992]
ages=[]
for x in birthyear:
    ages.append(2024-x)
print(ages)

# program 2

marks=[1,2,33,44,66,77,33,44,65]
above50=[]

for x in marks:
    if x> 50:
        above50.append(x)
print(above50)

# program 3

numbers=[11,22,33]
total=0
for x in numbers:
    total=total+x
print(total)  

cities =["pune","mumbai","benglore","delhi"]
for x in cities:
    print("welcome "+x)