import math

def binarySearch(mylist, target):
        first = 0
        last = len(mylist)-1

        while first<=last:
            midpoint = math.floor((first + last)/2)
            if mylist[midpoint] == target:
                return midpoint
            else:
                if target < mylist[midpoint]:
                    last = midpoint-1
                else:
                    first = midpoint+1

        return None

test_list = [0,3,4,7,9,11,34,46,57,65]

print(binarySearch(test_list, 4))
print(binarySearch(test_list, 30))
print(binarySearch(test_list, 57))