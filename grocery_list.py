# reused functions
def make_grocery_list():
    groceries = []
    while True:
        user_input = input('What do you need from the grocery store? ')
        if user_input == '':
                break
        else:
                groceries.append(user_input)
    return groceries

def print_grocery_list(grocery_list):
    for i in range(len(groceries)):
        print(f'{i}: {groceries[i]}')

# make and print groceries
groceries = make_grocery_list()
print_grocery_list(groceries)

is_replacing_groceries = input('Do you want to replace any items? (Y/n)')
if is_replacing_groceries == "Y" or is_replacing_groceries == "":
    start = int(input('From which index do you want to replace? '))
    end = int(input('To what index do you want to replace? '))

    if end - start > 0:
        new_groceries = make_grocery_list()
        groceries[start : end + 1] = new_groceries # + 1 because slicing does not include end number
        print_grocery_list(groceries)
    elif end - start == 0:
        new_input = input('What do you need from the grocery store? ')
        groceries[start] = new_input
        print_grocery_list(groceries)
    else:
        print('Invalid number range')

else:
    print('Enjoy shopping!')