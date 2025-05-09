# bank account
class BankAccount:
    def __init__(self, balance=0, username='', password=''):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False
    
    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Deposit amount must be positive.")
        self.balance += amount
    
    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if amount > self.balance:
            raise Exception("Insufficient funds.")
        self.balance -= amount

    def authenticate(self, username, password):
        if username == self.username and password == self.password:
            self.authenticated = True
        else:
            raise Exception("Invalid username or password.")

# minimum balance account
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance=0, minimum_balance=0, username='', password=''):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance
    
    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Authentication required.")
        if amount <= 0:
            raise Exception("Withdrawal amount must be positive.")
        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot withdraw below the minimum balance.")
        self.balance -= amount

# bonus - ATM Class
class ATM:
    def __init__(self, account_list, try_limit=2):
        if not all(isinstance(account, (BankAccount, MinimumBalanceAccount)) for account in account_list):
            raise Exception("All accounts must be instances of BankAccount or MinimumBalanceAccount.")
        
        if try_limit <= 0:
            raise Exception("Try limit must be a positive number.")
        
        self.account_list = account_list
        self.try_limit = try_limit
        self.current_tries = 0
    
    def show_main_menu(self):
        while True:
            print("1. Log in")
            print("2. Exit")
            choice = input("Select an option: ")
            if choice == '1':
                self.log_in()
            elif choice == '2':
                break
            else:
                print("Invalid option.")
    
    def log_in(self):
        username = input("Enter username: ")
        password = input("Enter password: ")
        
        for account in self.account_list:
            try:
                account.authenticate(username, password)
                self.show_account_menu(account)
                return
            except Exception:
                pass
        
        self.current_tries += 1
        if self.current_tries >= self.try_limit:
            print("Max tries reached. Shutting down.")
            exit()
        else:
            print(f"Invalid username or password. Attempt {self.current_tries}/{self.try_limit}")
            self.log_in()
    
    def show_account_menu(self, account):
        while True:
            print("1. Deposit")
            print("2. Withdraw")
            print("3. Exit")
            choice = input("Select an option: ")
            if choice == '1':
                amount = float(input("Enter deposit amount: "))
                try:
                    account.deposit(amount)
                    print(f"Deposited {amount}. New balance: {account.balance}")
                except Exception as e:
                    print(e)
            elif choice == '2':
                amount = float(input("Enter withdrawal amount: "))
                try:
                    account.withdraw(amount)
                    print(f"Withdrew {amount}. New balance: {account.balance}")
                except Exception as e:
                    print(e)
            elif choice == '3':
                break
            else:
                print("Invalid option.")

# bank accounts
account1 = BankAccount(balance=100, username="user1", password="pass1")
account2 = MinimumBalanceAccount(balance=200, minimum_balance=50, username="user2", password="pass2")

# ATM instance
atm = ATM([account1, account2], try_limit=3)

# ATM menu
atm.show_main_menu()
