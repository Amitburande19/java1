

#program 2

class person2:
    country = "bharat"
    def __init__(self,fn,ln):
        self.firstName= fn
        self.lastName= ln
    def displayName(self):
        print(self.firstName + self.lastName)

    @classmethod
    def changecountry(cls,cnty):
        cls.country=cnty

    amol= person2("amol","rao")
    chinmay= person2("chinmay","deshpande")
    ninad= person2("ninad","dani")

    print(amol.firstName)
    print(amol.lastName)
    print(amol.country)        