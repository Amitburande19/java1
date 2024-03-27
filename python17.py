setA={1,2,3}
setB={11,22,33}
setC=setA.union(setB)
print(setC)

#setE={11,33,44}
setF={44,55,66}
#setG=setE.intersection(setF)
#print(setG)
#setE.intersection_update(setF)
#print(setE)
#setF.intersection_update(setE)
print(setF)
#program 2
setQ={11,22,33}
setE={45,66,77,33}
setR=setQ.symmetric_difference(setE)
print(setR)
setQ.symmetric_difference_update(setE)
print(setQ)
print(setE)

# progrm 4
setQ={11,22,33}
setE={11,22,33,44}
q=setQ.issubset(setE)
print(q)
q2=setE.issubset(setQ)
print(q2)

setQ={11,22,33,44,88}
setF={55,66,77,88}
e=setQ.isdisjoint(setF)
print(e)

# program 5
setw={11,22,33,44}
#setw.add(55)
print(setw)

#setw.clear()
print(setw)

setw.pop()
print(setw)

setw.remove(22)
print(setw)

setw.update({5,6,7,8})
print(setw)

r=setw.discard(56)
print(r)


















