x=10
print(x)

first_name = "chinmay"
print(type(first_name))

last_name = 'deshpande'
print(type(last_name))

middle_name = """

shirish

"""
print(middle_name)

info='''
I am learning
javascript
'''
print(info)

#program 2

city = "pune"
#       0123
print(city[0])
print(city[1])

#progarm
city4 = "chandrapur"
# 0   1  2  3  4  5  6  7  8  9
# c   h  a  n  d  r  a  p  u  r
#-10 -9 -8 -7 -6 -5 -4 -3 -2 -1
# STRING[startIndex,Endindex(not included),stepsize]
print(city4[5::])
print(city4[-7::])
print(city4[1:7:])
print(city4[1:-2:])
print(city4[-7:-2:])
print(city4[-7:9:])
print(city4[0:10:3])
print(city4[::-1])
print(city4[5::])

# program 4
city = "nagpur"
e9 = city.upper()
print(e9)

city2 = "pune"
e10= city2.lower()
print(e10)

city3 = "chandrapur"
e11 = city3.count('a')
print(e11)
