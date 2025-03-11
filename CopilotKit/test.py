while True:
    name, a, w = input().split()
    if name == "#":
        break
    elif int(a) > 17 or int(w) >= 80:
        print(name, "Senior")
    else:
        print(name, "Junior")