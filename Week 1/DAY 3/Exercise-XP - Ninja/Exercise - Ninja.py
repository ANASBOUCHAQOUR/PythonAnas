class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    def show_call_history(self):
        print(self.call_history)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        other_phone.messages.append(message)

    def show_outgoing_messages(self):
        for msg in self.messages:
            if msg["from"] == self.phone_number:
                print(msg)

    def show_incoming_messages(self):
        for msg in self.messages:
            if msg["to"] == self.phone_number:
                print(msg)

    def show_messages_from(self, number):
        for msg in self.messages:
            if msg["from"] == number and msg["to"] == self.phone_number:
                print(msg)

phone1 = Phone("1234567890")
phone2 = Phone("9876543210")

phone1.call(phone2)
phone2.call(phone1)

phone1.send_message(phone2, "Hello, how are you?")
phone2.send_message(phone1, "I'm good, thank you!")

phone1.show_outgoing_messages()
phone2.show_incoming_messages()