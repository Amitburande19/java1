# int as a parameter and int as return type
def addOne(x,y):
    return(x+y)
e = addOne(12,3)
print(e)

#float as parameter and return type
def subTwo(x,y):
    return(x-y)
f=subTwo(12.3,8.2)
print(f)

#boolean as parameter and return type
def canDrive(age,havaVehivle):
    if age >18 and havaVehivle:
        return True
    else:
        return False
g = canDrive(19,True)
print(g)

# string as parameter and return type
def greet(name):
    return("welcome "+name)
j=greet("chinmay !")
print(j)

# list as parameter and return type
names=["chinmay","shirish","sameer","raj"]
def addName(lst):
    lst.append("vijeet")
    return lst
k =addName(names)
print(k)

#dictionary as parameter and return type
info ={
    "firstName":"chinmay",
    "lastName":"deshpande"
}
def addcity(information):
    information['city']="pune"
    return information
l=addcity(info)
print(l)

#tuple as a parameter and return type

numbers=(11,22,33)
def addValue(tupA):
    tupA=list(tupA)
    tupA.append(44)
    tupA=tuple(tupA)
    return tupA
f=addValue(numbers)
print(f)

# set as a parameter and return type
setA={11,22,33}
def addElement(seta):
    seta.add(44)
    return(seta)
z=addElement(setA)
print(z)








































