class personB:
    def __init__(self,fn,ln):
        self.first_name= fn
        self.last_name= ln

        def talk(self):
            print("I am talking")

        def walk(self):
            print("I am walking")    

amol = personB("amol","rao")
chinmay = personB("chinmay","deshpande")

print(amol.first_name)
print(amol.last_name)

print(chinmay.first_name)
print(chinmay.last_name)
chinmay.city="pune"
print(chinmay.city)
print(amol.city)
