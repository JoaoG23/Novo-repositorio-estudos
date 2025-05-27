

class OnlineOrderProcess():
    def process_online_order(self):
        self.select_online_item()
        self.make_online_payment()
        self.deliver_online()

    def select_online_item(self):
        print("Selecionando online item")

    def make_online_payment(self):
        print("Fazendo pagamento online com cartão")

    def deliver_online(self):
        print("Entregando online item")

class StoreOrderProcess():
    def process_store_order(self):
        self.select_store_item()
        self.make_store_payment()
        self.deliver_store()

    def select_store_item(self):
        print("Selecionando item local na loja")

    def make_store_payment(self):
        print("Fazendo pagamento local na loja")

    def deliver_store(self):
        print("Entregando item local na loja")

