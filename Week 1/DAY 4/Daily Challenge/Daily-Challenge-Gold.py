import random
from typing import List

# Gene class - represents a single gene (0 or 1)
class Gene:
    """
    Represents a single gene in the DNA sequence.
    A gene can have a value of either 0 or 1.
    """
    def __init__(self, value=None):
        """
        Initialize a gene with either a specified value (0 or 1) or a random value.
        """
        self.value = value if value in (0, 1) else random.randint(0, 1)

    def mutate(self) -> None:
        """
        Mutate the gene with a 50% chance of flipping its value.
        """
        if random.random() < 0.5:  # 50% chance to flip
            self.value = 1 - self.value

    def __str__(self) -> str:
        return str(self.value)

# Chromosome class - contains 10 Genes
class Chromosome:
    """
    Represents a chromosome containing 10 genes.
    """
    def __init__(self):
        """
        Initialize a chromosome with 10 random genes.
        """
        self.genes: List[Gene] = [Gene() for _ in range(10)]

    def mutate(self) -> None:
        """
        Mutate all genes in the chromosome.
        """
        for gene in self.genes:
            gene.mutate()

    def is_all_ones(self) -> bool:
        """
        Check if all genes in the chromosome have a value of 1.
        """
        return all(gene.value == 1 for gene in self.genes)

    def __str__(self) -> str:
        return ''.join(str(g) for g in self.genes)

# DNA class - contains 10 Chromosomes
class DNA:
    """
    Represents a DNA sequence containing 10 chromosomes.
    """
    def __init__(self):
        """
        Initialize DNA with 10 random chromosomes.
        """
        self.chromosomes: List[Chromosome] = [Chromosome() for _ in range(10)]

    def mutate(self) -> None:
        """
        Mutate all chromosomes in the DNA.
        """
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_perfect(self) -> bool:
        """
        Check if all chromosomes in the DNA are perfect (all genes are 1).
        """
        return all(chromosome.is_all_ones() for chromosome in self.chromosomes)

    def get_perfect_chromosomes_count(self) -> int:
        """
        Get the number of perfect chromosomes in the DNA.
        """
        return sum(1 for chromosome in self.chromosomes if chromosome.is_all_ones())

    def __str__(self) -> str:
        return '\n'.join(str(chromo) for chromo in self.chromosomes)

# Organism class - has DNA and a mutation probability
class Organism:
    """
    Represents an organism with DNA and a mutation rate.
    """
    def __init__(self, dna: DNA, environment_mutation_rate: float):
        """
        Initialize an organism with DNA and a mutation rate.
        
        Args:
            dna: The organism's DNA
            environment_mutation_rate: Probability of mutation (0.0 to 1.0)
        """
        if not 0 <= environment_mutation_rate <= 1:
            raise ValueError("Mutation rate must be between 0 and 1")
        self.dna = dna
        self.mutation_rate = environment_mutation_rate

    def attempt_mutation(self) -> None:
        """
        Attempt to mutate the organism's DNA based on the mutation rate.
        """
        if random.random() < self.mutation_rate:
            self.dna.mutate()

# Simulation
def simulate(max_generations: int = 1000) -> None:
    """
    Simulate the evolution of an organism until perfect DNA is achieved or max generations reached.
    
    Args:
        max_generations: Maximum number of generations to simulate
    """
    generations = 0
    dna = DNA()
    organism = Organism(dna, environment_mutation_rate=0.7)  # 70% chance to mutate

    print("Starting simulation...")
    print("Initial DNA:")
    print(organism.dna)
    print("\nProgress:")

    while not organism.dna.is_perfect():
        generations += 1
        organism.attempt_mutation()

        # Show progress every 100 generations
        if generations % 100 == 0:
            perfect_chromosomes = organism.dna.get_perfect_chromosomes_count()
            print(f"Generation {generations}: {perfect_chromosomes}/10 perfect chromosomes")

        if generations >= max_generations:
            print(f"\nMaximum generations ({max_generations}) reached without achieving perfect DNA.")
            print("Final DNA:")
            print(organism.dna)
            return

    print(f"\nPerfect DNA achieved in {generations} generations!")
    print("Final DNA:")
    print(organism.dna)

if __name__ == "__main__":
    try:
        simulate()
    except Exception as e:
        print(f"An error occurred during simulation: {str(e)}")