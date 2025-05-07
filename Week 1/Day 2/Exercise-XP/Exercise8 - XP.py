# Star Wars Quiz Data
data = [
    {"question": "What is Baby Yoda's real name?", "answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?", "answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?", "answer": "1977"},
    {"question": "Who built C-3PO?", "answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?", "answer": "Darth Vader"},
    {"question": "What species is Chewbacca?", "answer": "Wookiee"}
]

def ask_questions():
    correct = 0
    incorrect = 0
    wrong_answers = []

    for q in data:
        user_answer = input(q["question"] + " ").strip()
        if user_answer.lower() == q["answer"].lower():
            print("Correct!\n")
            correct += 1
        else:
            print("Incorrect.\n")
            incorrect += 1
            wrong_answers.append({
                "question": q["question"],
                "your_answer": user_answer,
                "correct_answer": q["answer"]
            })

    return correct, incorrect, wrong_answers

def display_results(correct, incorrect, wrong_answers):
    print(f"\nYou got {correct} correct and {incorrect} incorrect answers.\n")
    
    if wrong_answers:
        print("Here are the questions you got wrong:")
        for wrong in wrong_answers:
            print(f"Question: {wrong['question']}")
            print(f"Your answer: {wrong['your_answer']}")
            print(f"Correct answer: {wrong['correct_answer']}\n")

def main():
    while True:
        correct, incorrect, wrong_answers = ask_questions()
        display_results(correct, incorrect, wrong_answers)

        if incorrect > 3:
            play_again = input("You had more than 3 incorrect answers. Do you want to try again? (yes/no): ").lower()
            if play_again != "yes":
                print("Thanks for playing!")
                break
        else:
            print("Great job! May the Force be with you!")
            break

main()
