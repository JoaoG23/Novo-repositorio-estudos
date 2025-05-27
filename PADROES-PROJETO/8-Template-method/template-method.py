from abc import ABC, abstractmethod

class OrderProcessTemplate(ABC):
    def process_order(self):
        self.select_item()
        self.make_payment()
        self.deliver()

    @abstractmethod
    def select_item(self):
        pass

    @abstractmethod
    def make_payment(self):
        pass

    @abstractmethod
    def deliver(self):
        pass

# Agora é com você implementar as subclasses OnlineOrder e StoreOrder, cada uma com suas próprias implementações desses métodos.

# Por exemplo:
class OnlineOrder(OrderProcessTemplate):
    def select_item(self):
        print("Item selected online")

    def make_payment(self):
        print("Payment made through online gateway")

    def deliver(self):
        print("Item delivered to customer's address")

class StoreOrder(OrderProcessTemplate):
    def select_item(self):
        print("Item selected in store")

    def make_payment(self):
        print("Payment made at the counter")

    def deliver(self):
        print("Customer takes the item")

order = OnlineOrder()
order.process_order()
print("\n")
order = StoreOrder()
order.process_order()
