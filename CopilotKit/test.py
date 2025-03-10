import random

user_choice = int(input("Choose number: "))

pc_choice = random.randint(1, 50)

if user_choice == pc_choice:
    print("맞음")
elif user_choice > pc_choice:
    print("다운", pc_choice)
else:
    print("업", pc_choice)

if True:
    print( )