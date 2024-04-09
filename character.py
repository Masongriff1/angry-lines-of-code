# this is how we define a class in python, classes should have the first letter capitalized
class Character:

    def __init__(self, name, description, health, attack_power, defense):
        self.name = name
        self.description = description
        self.health = health
        self.attack_power = attack_power
        self.defense = defense

    def attack(self, target):
        # create some formula for damage - 
        damage = self.attack_power - target.defense
        print(f"{self.name} attacks {target.name} and deals {damage} damage.")
        target.health = target.health - damage

    def print_status(self):
        print(f"{self.name}: Health = {self.health}, Attack power = {self.attack_power}, Defense = {self.defense}")
        
    def get_health(self):
        return self.health
    
    def set_health(self,new_health):
        if new_health > 0 and new_health < 1000:
            self.health = new_health

player = Character("Mason", "student", 100, 50, 100)
enemy = Character("Procrastination", "evil", 80, 5, 5)

# fight
player.attack(enemy) # i am fighting enemy
enemy.attack(player) # enemy fighting me

# display the status
player.print_status()
enemy.print_status()