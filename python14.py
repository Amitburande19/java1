# program1
first_name='chinmay'
last_name="deshpande"
middle_name="""
shirish
"""

info ='''
i am learning

'''
print(type(info))

# program 2
city = "chandrapur"
print(city[1::])
print(city[2:7:])
print(city[-8:])
print(city[-8:-2:])
print(city[1:-1:])
print(city[0:10:2])
print(city[-1:-3])

#program 3

city3 = "pune"

print(city3[0])
print(city3[1])
print(city3[2])
print(city3[3])

for x in range(4):
    print(city3[x])

for x in range(len(city3)-1,-1,-1):
    print(city3[x])    

for x in range(50,4,-5):
    print(x)  

city4 = "nagpur"

for x in range(len(city4)):
    print(city4[x])

for char in city4:
    print(char)

# program 4   

#program 5
city5 = "wardha"

i1 = 0
while(i1 < len(city5)):
    print(city5[i1])
    i1=i1+1

i2 = len(city5)-1
while(i2 >=0):
    print(city5[i2])
    i2=i2-1    





